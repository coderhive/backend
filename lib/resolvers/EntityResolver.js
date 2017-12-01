class EntityResolver {
    constructor({entityName, entityService}) {
        this.entityName = entityName;
        this.entityService = entityService;
        this.getAll = this.getAll.bind(this);
        this.getByIdentifier = this.getByIdentifier.bind(this);
        this.getByUserId = this.getByUserId.bind(this);
        this.getTagsByComponent = this.getTagsByComponent.bind(this);
        this.getByIdentifierSpecial = this.getByIdentifierSpecial.bind(this);
        this.getByUserIdSpecial = this.getByUserIdSpecial.bind(this);
        this.createNew = this.createNew.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this)
    }

    async getAll(parent, args, context) {
        try {
            let authenticatedUserId = context.authenticatedUserId;
            const allEntities = await this.entityService.getAll(authenticatedUserId);
            return allEntities
        } catch (error) {
            if (error.message === "UNAUTHORIZED") throw error;
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

    async getTagsByComponent(parent, args, context) {
        try {
            const entity = await this.entityService.getTagsByComponent(args, parent);
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