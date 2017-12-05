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

    async createNew(args){
        try{
            if(args.follower === args.followee) throw new Error('DUPLICATE: Identical Follower and Followee');
            let existingFollowCheck = await this.followRepository.checkForDuplicateFollow(args.follower, args.followee);
            existingFollowCheck = existingFollowCheck[0];
            if(existingFollowCheck) throw new Error('DUPLICATE: Identical Follow');
            let newFollow = await this.followRepository.createNew(args);
            console.log(newFollow);
            return newFollow
        }
        catch(error){
            console.log(error)
        }
    }

    async delete(args){
        try{
            let follower = args.follower;
            let followee = args.followee;
            let deletedFollow = await this.followRepository.hardDeleteFollow(follower, followee)
            return deletedFollow
        }
        catch(error){
            console.log(error)
        }
    }


}

module.exports = FollowService;