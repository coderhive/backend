import bcrypt from 'bcryptjs'

class CommentService {
    constructor({commentRepository, fanRepository, activityRepository}) {
        this.commentRepository = commentRepository;
        this.fanRepository = fanRepository;
        this.activityRepository = activityRepository;
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

    async createNew(args, authenticatedUserId) {
        try {
            if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
            if (authenticatedUserId !== args.user_id) throw new Error('UNAUTHORIZED');
            let newComment = await this.commentRepository.createNew(args);
            let fansToAlert = await this.fanRepository.getFansByComponent(args.component_id);
            await fansToAlert.map(async (fan) => {
                return await this.activityRepository.createNew({
                    owner_id: fan.user_id,
                    type: 'newComment',
                    user_id: args.user_id,
                    comment_id: newComment.id,
                    component_id: args.component_id
                })
            });

            return newComment
        }
        catch (error) {
            if (error.message === 'UNAUTHORIZED') throw error;
            console.log(error)
        }
    }

    async update(args, authenticatedUserId) {
        try {
            if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
            let comment = await this.commentRepository.getById(args.id);
            if (authenticatedUserId !== comment.user_id) throw new Error('UNAUTHORIZED');
            let updatedComment = await this.commentRepository.update(args);
            return updatedComment
        }
        catch (error) {
            if (error.message === 'UNAUTHORIZED') throw error;
            console.log(error)
        }
    }

    async delete(args, authenticatedUserId) {
        try {
            if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
            let comment = await this.commentRepository.getById(args.id);
            if (authenticatedUserId !== comment.user_id) throw new Error('UNAUTHORIZED');
            let deletedComment = await this.commentRepository.hardDelete(args.id);
            return deletedComment
        }
        catch (error) {
            if (error.message === 'UNAUTHORIZED') throw error;
            console.log(error)
        }
    }

}

module.exports = CommentService;