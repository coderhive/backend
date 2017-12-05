import bcrypt from 'bcryptjs'

class ComponentService {
    constructor({componentRepository, activityRepository, followRepository, fanRepository}) {
        this.componentRepository = componentRepository;
        this.activityRepository = activityRepository;
        this.followRepository = followRepository;
        this.fanRepository = fanRepository;
    }

    async getById(id) {
        try {
            // TODO Authenticate for admin or ownership
            return await this.componentRepository.getById(id);
        } catch (error) {
            console.log(error)
        }
    }

    async getAll() {
        try {
            let components = await this.componentRepository.getAll('score');
            // users = users.map(user => {
            //     delete user.hashed_password;
            //     delete user.email;
            //     return user
            // });
            return components
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

    async getChildren(thisId) {
        try {
            let children = await this.componentRepository.getCollectionByIdentifier(thisId, "parent_component_id");
            return children
        }
        catch (error) {
            console.log(error)
        }
    }

    async getClones(thisId) {
        try {
            let children = await this.componentRepository.getCollectionByIdentifier(thisId, "clone_component_id");
            return children
        }
        catch (error) {
            console.log(error)
        }
    }

    async createNew(args, authenticatedUserId) {
        let newComponent = await this.componentRepository.createNew(args);
        let followersToAlert = await this.followRepository.getFollowerIds(authenticatedUserId);
        await followersToAlert.map(async (follow) => {
            return await this.activityRepository.createNew({
                owner_id: follow.follower,
                type: 'newComponent',
                user_id: authenticatedUserId,
                component_id: newComponent.id
            })
        });
        return newComponent;
    }

    async update(args) {
        let component_id = args.id
        let updatedComponent = await this.componentRepository.update(args);
        let fansToAlert = await this.fanRepository.getCollectionByIdentifierSpecial(component_id, "component_id");
        await fansToAlert.map(async (fan) => {
            return await this.activityRepository.createNew({
                owner_id: fan.user_id,
                type: 'updatedComponent',
                user_id: updatedComponent.owner_user_id,
                component_id: updatedComponent.id
            })
        });
        return updatedComponent;
    }

    async delete(args) {
        try {
            let id = args.id;
            let deletedComponent = await this.componentRepository.deleteComponent(id)
            return deletedComponent
        }
        catch (error) {
            console.log(error)
        }

    }
}

module.exports = ComponentService;