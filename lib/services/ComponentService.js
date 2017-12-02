import bcrypt from 'bcryptjs'

class ComponentService {
    constructor({componentRepository}) {
        this.componentRepository = componentRepository;
    }

    async getById(id) {
        try {
            // TODO Authenticate for admin or ownership
            return await this.componentRepository.getById(id);
        } catch (error) {
            console.log(error)
        }
    }

    async getByIdentifier(args, parent) {
        try {
            // TODO Authenticate for admin or ownership
            let userId = parent.id;
            return await this.componentRepository.getCollectionByIdentifier(userId, "owner_user_id");
        } catch (error) {
            console.log(error)
        }
    }

    async getChildren(thisId){
        try{
            let children = await this.componentRepository.getCollectionByIdentifier(thisId, "parent_component_id");
            return children
        }
        catch(error){
            console.log(error)
        }
    }

    async getClones(thisId){
        try{
            let children = await this.componentRepository.getCollectionByIdentifier(thisId, "clone_component_id");
            return children
        }
        catch(error){
            console.log(error)
        }
    }
}

module.exports = ComponentService;