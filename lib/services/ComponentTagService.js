import bcrypt from 'bcryptjs'

class VoteService {
    constructor({componentTagRepository}) {
        this.componentTagRepository = componentTagRepository;
    }

    async getTagsByComponent(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
            let componentId = parent.id;
            return await this.componentTagRepository.getTagsByComponent(componentId);
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = VoteService;