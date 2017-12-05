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

    async createNew(args){
        let existingFanCheck = await this.fanRepository.checkForDuplicateRelation(args.user_id, args.component_id);
        if(!!existingFanCheck.length) throw new Error('DUPLICATE: This user is already a fan of this component.');
        let newFan = await this.fanRepository.createNew(args);
        return newFan
    }

    async delete(args){
        const fanId = args.id
        let deletedFan = await this.fanRepository.hardDelete(fanId);
        return deletedFan;
    }

}

module.exports = FanService;