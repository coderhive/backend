import bcrypt from 'bcryptjs'

class ActivityService {
    constructor({activityRepository, componentRepository, userRepository, commentRepository}) {
        this.activityRepository = activityRepository;
        this.componentRepository = componentRepository;
        this.userRepository = userRepository;
        this.commentRepository = commentRepository;
    }

    async getActivity(userId) {
        try {
            let activities = await this.activityRepository.getCollectionByIdentifier(userId, 'owner_id');
            return activities
        } catch (error) {
            console.log(error)
        }
    }

    async getByIdentifier(args, parent) {
        try {
            let component = await this.componentRepository.getById(parent.component_id);
            return component

        } catch (error) {
            console.log(error)
        }
    }

    async getByUserId(args, parent) {
        try {
            let user = await this.userRepository.getById(parent.user_id);
            return user

        } catch (error) {
            console.log(error)
        }
    }

    async getComment(id) {
        try {
            let comment = await this.commentRepository.getById(id);
            return comment

        } catch (error) {
            console.log(error)
        }
    }

    async createNew(args) {
        try {
            let newActivity = await this.activityRepository.createNew(args);
            console.log(newActivity);
            return newActivity
        }
        catch (error) {
            console.log(error)
        }
    }

}

module.exports = ActivityService;