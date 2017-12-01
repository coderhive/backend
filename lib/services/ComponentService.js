import bcrypt from 'bcryptjs'

class ComponentService {
    constructor({componentRepository}) {
        this.componentRepository = componentRepository;
    }

    async getByIdentifier(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
            let userId = parent.id;
            return await this.componentRepository.getCollectionByIdentifier(userId, "user_id");
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ComponentService;