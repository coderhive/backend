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
        this.getActivity = this.getActivity.bind(this);
        this.getComment = this.getComment.bind(this);
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
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getById(parent, args, context) {
        try {
            const entity = await this.entityService.getById(args.id);
            return entity
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getOwnerByParentComponentId(parent, args, context) {
        try {
            const entity = await this.entityService.getById(parent.owner_user_id);
            return entity
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getByIdentifier(parent, args, context) {
        try {
            const entity = await this.entityService.getByIdentifier(args, parent);
            return entity
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getByUserId(parent, args, context) {
        try {
            const entity = await this.entityService.getByUserId(args, parent);
            return entity
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getParent(parent, args, context) {
        try {
            let parentId = parent.parent_component_id;
            let myParent = await this.entityService.getById(parentId);
            return myParent
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getChildren(parent, args, context) {
        try {
            let thisId = parent.id;
            let myParent = await this.entityService.getChildren(thisId);
            return myParent
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getCloneSource(parent, args, context) {
        try {
            let cloneId = parent.clone_component_id;
            let myParent = await this.entityService.getById(cloneId);
            return myParent
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getClones(parent, args, context) {
        try {
            let thisId = parent.id;
            let myParent = await this.entityService.getClones(thisId);
            return myParent
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getTagsByComponent(parent, args, context) {
        try {
            const entity = await this.entityService.getTagsByComponent(args, parent);
            return entity
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getFollowers(parent, args, context) {
        try {
            const entity = await this.entityService.getFollowers(args, parent);
            return entity
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getFollowees(parent, args, context) {
        try {
            const entity = await this.entityService.getFollowees(args, parent);
            return entity
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getByIdentifierSpecial(parent, args, context) {
        try {
            const entity = await this.entityService.getByIdentifierSpecial(args, parent);
            return entity
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getByUserIdSpecial(parent, args, context) {
        try {
            const entity = await this.entityService.getByUserIdSpecial(args, parent);
            return entity
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getActivity(parent, args, context) {
        try {
            console.log(args)
            const activities = await this.entityService.getActivity(args.userId);
            return activities
        }
        catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async getComment(parent, args, context) {
        try {
            const comment = await this.entityService.getComment(parent.comment_id);
            return comment
        }
        catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }


    async createNew(parent, args, context) {
        try {
            let authenticatedUserId = context.authenticatedUserId;
            const entity = await this.entityService.createNew(args, authenticatedUserId);
            return entity
        } catch (error) {
            if (error.message.startsWith("MISSING ")) throw new Error(`Incomplete Information: MISSING ${error.message.split(' ')[1]}`)
            if (error.message.startsWith("DUPLICATE: ")) throw error;
            throw new Error('Error occurred. Please try again.')
        }
    }

    async update(parent, args, context) {
        try {
            let authenticatedUserId = context.authenticatedUserId;
            const entity = await this.entityService.update(args, authenticatedUserId)
            return entity
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

    async delete(parent, args, context) {
        try {
            //TODO authenticate
            let authenticatedUserId = context.authenticatedUserId
            const entity = await this.entityService.delete(args, authenticatedUserId);
            return entity
        } catch (error) {
            throw new Error('Error occurred. Please try again.')
        }
    }

}

module.exports = EntityResolver;