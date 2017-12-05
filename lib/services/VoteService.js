import bcrypt from 'bcryptjs'

class VoteService {
    constructor({voteRepository}) {
        this.voteRepository = voteRepository;
    }

    async getByIdentifier(args, parent) {
        try {
            let componentId = parent.id;
            console.log(parent)
            let output = await this.voteRepository.getCollectionByIdentifierSpecial(componentId, "component_id", 'vote');
            console.log('>>>>>>>>> ', output)
            return output
        } catch (error) {
            console.log(error)
        }
    }

    async getByUserId(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
            let componentId = parent.id;
            return await this.voteRepository.getCollectionByIdentifierSpecial(componentId, "user_id", 'vote');
        } catch (error) {
            console.log(error)
        }
    }

    //TODO when we create a new vote, we must modify the score of the underlying component
    async createNew(args){
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
            return newVote
        }
        catch(error){
            throw error
        }
    }

    async delete(args){
        try{
            let user_id = args.user_id;
            let component_id = args.component_id;
            let deletedVote = await this.voteRepository.hardDeleteByUser(user_id, component_id);
            return deletedVote
        }
        catch(error){
            console.log(error)

        }
    }

}

module.exports = VoteService;