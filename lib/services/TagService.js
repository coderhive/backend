import bcrypt from 'bcryptjs'

class VoteService {
    constructor({tagRepository}) {
        this.tagRepository = tagRepository;
    }

    async getTagsByComponent(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
            let componentId = parent.id;
            return await this.tagRepository.getTagsByComponent(componentId);
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = VoteService;