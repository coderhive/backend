class EntityResolver {
    constructor({entityName, entityService}) {
        this.entityName = entityName;
        this.entityService = entityService;
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.getByIdentifier = this.getByIdentifier.bind(this);
        this.getOwnerByParentComponentId = this.getOwnerByParentComponentId.bind(this);
        this.getByUserId = this.getByUserId.bind(this);
        this.getParent = this.getParent.bind(this);
        this.getChildren = this.getChildren.bind(this);
        this.getCloneSource = this.getCloneSource.bind(this);
        this.getClones = this.getClones.bind(this);
        this.getTagsByComponent = this.getTagsByComponent.bind(this);
        this.getFollowers = this.getFollowers.bind(this);
        this.getFollowees = this.getFollowees.bind(this);
        this.getByIdentifierSpecial = this.getByIdentifierSpecial.bind(this);
        this.getByUserIdSpecial = this.getByUserIdSpecial.bind(this);
        this.createNew = this.createNew.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this)
    }

    async getAll(parent, args, context) {
        try {
            const allEntities = await this.entityService.getAll();
            return allEntities
        } catch (error) {
            if (error.message === "UNAUTHORIZED") throw error;
            console.log(error)
        }
    }

    async getById(parent, args, context) {
        try {
            const entity = await this.entityService.getById(args.id);
            return entity
        } catch (error) {
            console.log(error)
        }
    }

    async getOwnerByParentComponentId(parent, args, context) {
        try {
            const entity = await this.entityService.getById(parent.id);
            return entity
        } catch (error) {
            console.log(error)
        }
    }


    async getByIdentifier(parent, args, context) {
        try {
            const entity = await this.entityService.getByIdentifier(args, parent);
            return entity
        } catch (error) {
            console.log(error)
        }
    }

    async getByUserId(parent, args, context) {
        try {
            const entity = await this.entityService.getByUserId(args, parent);
            return entity
        } catch (error) {
            console.log(error)
        }
    }

    async getParent(parent, args, context) {
        try {
            let parentId = parent.parent_component_id;
            let myParent = await this.entityService.getById(parentId);
            return myParent
        } catch (error) {
            console.log(error)
        }
    }


    async getChildren(parent, args, context) {
        try {
            let thisId = parent.id;
            let myParent = await this.entityService.getChildren(thisId);
            return myParent
        } catch (error) {
            console.log(error)
        }
    }

    async getCloneSource(parent, args, context) {
        try {
            let cloneId = parent.clone_component_id;
            let myParent = await this.entityService.getById(cloneId);
            return myParent
        } catch (error) {
            console.log(error)
        }
    }


    async getClones(parent, args, context) {
        try {
            let thisId = parent.id;
            let myParent = await this.entityService.getClones(thisId);
            return myParent
        } catch (error) {
            console.log(error)
        }
    }

    async getTagsByComponent(parent, args, context) {
        try {
            const entity = await this.entityService.getTagsByComponent(args, parent);
            return entity
        } catch (error) {
            console.log(error)
        }
    }

    async getFollowers(parent, args, context) {
        try {
            const entity = await this.entityService.getFollowers(args, parent);
            return entity
        } catch (error) {
            console.log(error)
        }
    }

    async getFollowees(parent, args, context) {
        try {
            const entity = await this.entityService.getFollowees(args, parent);
            return entity
        } catch (error) {
            console.log(error)
        }
    }

    async getByIdentifierSpecial(parent, args, context) {
        try {
            const entity = await this.entityService.getByIdentifierSpecial(args, parent);
            return entity
        } catch (error) {
            console.log(error)
        }
    }

    async getByUserIdSpecial(parent, args, context) {
        try {
            const entity = await this.entityService.getByUserIdSpecial(args, parent);
            return entity
        } catch (error) {
            console.log(error)
        }
    }

    async createNew(parent, args, context) {
        try {
            const entity = await this.entityService.createNew(args);
            return entity
        } catch (error) {
            if (error.message.startsWith("MISSING ")) throw new Error(`Incomplete Information: MISSING ${error.message.split(' ')[1]}`)
            console.log(error)
        }
    }

    async update(parent, args, context) {
        try {
            let authenticatedUserId = context.authenticatedUserId;
            const entity = await this.entityService.update(args, authenticatedUserId)
            return entity
        } catch (error) {
        }
    }

    async delete(parent, args, context) {
        try {
            //TODO authenticate
            let authenticatedUserId = context.authenticatedUserId
            const entity = await this.entityService.delete(args, authenticatedUserId);
            return entity
        } catch(error) {
            console.log(error)
        }
    }

}

module.exports = EntityResolver;