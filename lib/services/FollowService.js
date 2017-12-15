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

    async createNew(args, authenticatedUserId){
        if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
        if (authenticatedUserId !== args.follower) throw new Error('UNAUTHORIZED');
        try{
            if(args.follower === args.followee) throw new Error('DUPLICATE: Identical Follower and Followee');
            let existingFollowCheck = await this.followRepository.checkForDuplicateFollow(args.follower, args.followee);
            existingFollowCheck = existingFollowCheck[0];
            if(existingFollowCheck) throw new Error('DUPLICATE: Identical Follow');
            let newFollow = await this.followRepository.createNew(args);
            return newFollow
        }
        catch(error){
            if (error.message === 'UNAUTHORIZED') throw error;
            console.log(error)
        }
    }

    async delete(args, authenticatedUserId){
        if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
        if (authenticatedUserId !== args.follower) throw new Error('UNAUTHORIZED');
        try{
            let follower = args.follower;
            let followee = args.followee;
            let deletedFollow = await this.followRepository.hardDeleteFollow(follower, followee)
            return deletedFollow
        }
        catch(error){
            if (error.message === 'UNAUTHORIZED') throw error;
            console.log(error)
        }
    }


}

module.exports = FollowService;