import bcrypt from 'bcryptjs'

class VoteService {
    constructor({voteRepository}) {
        this.voteRepository = voteRepository;
    }

    async getByIdentifier(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
            let componentId = parent.id;
            return await this.voteRepository.getCollectionByIdentifierSpecial(componentId, "component_id", 'vote');
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

}

module.exports = VoteService;