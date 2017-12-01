import bcrypt from 'bcryptjs'

class FanService {
    constructor({fanRepository}) {
        this.fanRepository = fanRepository;
    }

    async getByIdentifier(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
            let componentId = parent.id;
            return await this.fanRepository.getCollectionByIdentifierSpecial(componentId, "component_id");
        } catch (error) {
            console.log(error)
        }
    }

    async getByUserId(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
            let componentId = parent.id;
            return await this.fanRepository.getCollectionByIdentifierSpecial(componentId, "user_id");
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = FanService;