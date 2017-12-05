import bcrypt from 'bcryptjs'

class VoteService {
    constructor({voteRepository}) {
        this.voteRepository = voteRepository;
    }

    async getByIdentifier(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
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

    async createNew(args){
        try{
            let existingVoteCheck = await this.voteRepository.checkForDuplicateRelation(args.user_id, args.component_id);
            existingVoteCheck = existingVoteCheck[0]
            let deletedVote;
            if(existingVoteCheck.vote === args.vote) throw new Error('DUPLICATE: Identical Vote');
            else if(existingVoteCheck.vote){
                deletedVote = await this.voteRepository.hardDelete(existingVoteCheck.id)
            }
            let newVote = await this.voteRepository.createNew(args);
            newVote.replacedVoteId === deletedVote.id;
            console.log(newVote);
            return newVote
        }
        catch(error){
            throw error
        }
    }

}

module.exports = VoteService;