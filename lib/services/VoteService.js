import bcrypt from 'bcryptjs'

class UserService {
    constructor({voteRepository}) {
        this.voteRepository = voteRepository;
    }

    async getByIdentifier(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
            let componentId = parent.id;
            return await this.voteRepository.getCollectionByIdentifier(componentId, "component_id");
        } catch (error) {
            console.log(error)
        }
    }

    async getByUserId(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
            let componentId = parent.id;
            return await this.voteRepository.getCollectionByIdentifier(componentId, "user_id");
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = UserService;