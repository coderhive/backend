import bcrypt from 'bcryptjs'

class VoteService {
    constructor({voteRepository, fanRepository, activityRepository, userRepository, componentRepository}) {
        this.voteRepository = voteRepository;
        this.fanRepository = fanRepository;
        this.activityRepository = activityRepository;
        this.userRepository = userRepository;
        this.componentRepository = componentRepository;
    }

    async getByIdentifier(args, parent) {
        try {
            let componentId = parent.id;
            let output = await this.voteRepository.getCollectionByIdentifierSpecial(componentId, "component_id", 'vote');
            return output
        } catch (error) {
            console.log(error)
        }
    }

    async createNew(args, authenticatedUserId){
        if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
        if (authenticatedUserId !== args.user_id) throw new Error('UNAUTHORIZED');
        try{
            let existingVoteCheck = await this.voteRepository.checkForDuplicateRelation(args.user_id, args.component_id);
            existingVoteCheck = existingVoteCheck[0]
            let deletedVote;
            if(existingVoteCheck && existingVoteCheck.vote === args.vote) throw new Error('DUPLICATE: Identical Vote');
            else if(existingVoteCheck){
                deletedVote = await this.voteRepository.hardDelete(existingVoteCheck.id)
            }
            let newVote = await this.voteRepository.createNew(args);
            if(existingVoteCheck) newVote.replacedVoteId === deletedVote.id;

            let component = await this.componentRepository.getById(args.component_id);
            component.score += args.vote;
            let ownerUser = await this.userRepository.getById(component.owner_user_id);
            ownerUser.experience += args.vote;
            let updatedUser = await this.userRepository.update({id: ownerUser.id, experience: ownerUser.experience});
            let updatedComponent = await this.componentRepository.update({id: component.id, score: component.score});

            let fansToAlert = await this.fanRepository.getFansByComponent(args.component_id);
            await fansToAlert.map(async (fan) => {
                return await this.activityRepository.createNew({
                    owner_id: fan.user_id,
                    type: 'newVote',
                    user_id: args.user_id,
                    component_id: args.component_id
                })
            });
            return newVote
        }
        catch(error){
            if (error.message === 'UNAUTHORIZED') throw error;
            console.log(error)
        }
    }

    async delete(args, authenticatedUserId){
        if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
        if (authenticatedUserId !== args.user_id) throw new Error('UNAUTHORIZED');

        try{
            let user_id = args.user_id;
            let component_id = args.component_id;

            let deletedVote = await this.voteRepository.hardDeleteByUser(user_id, component_id);
            let component = await this.componentRepository.getById(component_id);
            component.score -= deletedVote.vote;
            let ownerUser = await this.userRepository.getById(component.owner_user_id);
            ownerUser.experience -= deletedVote.vote;
            let updatedUser = await this.userRepository.update({id: ownerUser.id, experience: ownerUser.experience});
            let updatedComponent = await this.componentRepository.update({id: component.id, score: component.score});

            return deletedVote
        }
        catch(error){
            if (error.message === 'UNAUTHORIZED') throw error;
            console.log(error)
        }
    }
}

module.exports = VoteService;