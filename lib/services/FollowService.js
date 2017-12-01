import bcrypt from 'bcryptjs'

class FollowService {
    constructor({followRepository}) {
        this.followRepository = followRepository;
    }

    async getFollowers(args, parent) {
        try {
            let userId = parent.id;
            return await this.followRepository.getFollowers(userId);
        } catch (error) {
            console.log(error)
        }
    }

    async getFollowees(args, parent) {
        try {
            let userId = parent.id;
            return await this.followRepository.getFollowees(userId);
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = FollowService;