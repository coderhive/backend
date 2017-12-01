import bcrypt from 'bcryptjs'

class CommentService {
    constructor({commentRepository}) {
        this.commentRepository = commentRepository;
    }

    async getByIdentifier(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
            let componentId = parent.id;
            return await this.commentRepository.getCollectionByIdentifierSpecial(componentId, "component_id", 'comment');
        } catch (error) {
            console.log(error)
        }
    }

    async getByUserId(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
            let componentId = parent.id;
            return await this.commentRepository.getCollectionByIdentifierSpecial(componentId, "user_id", 'comment');
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = CommentService;