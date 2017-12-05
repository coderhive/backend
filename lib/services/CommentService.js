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

    async createNew(args) {
        try {
            let newComment = await this.commentRepository.createNew(args);
            return newComment
        }
        catch (error) {
            console.log(error)
        }
    }

    async update(args) {
        try {
            let updatedComment = await this.commentRepository.update(args);
            return updatedComment
        }
        catch (error) {
            console.log(error)
        }
    }

    async delete(args) {
        try {
            let deletedComment = await this.commentRepository.hardDelete(args.id);
            return deletedComment
        }
        catch (error) {
            console.log(error)
        }
    }

}

module.exports = CommentService;