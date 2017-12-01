import bcrypt from 'bcryptjs'

class UserService {
    constructor({voteRepository}) {
        this.voteRepository = voteRepository;
    }

    async getByIdentifier(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
            let userId = parent.id;
            return await this.voteRepository.getCollectionByIdentifier(userId, "user_id");
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = UserService;