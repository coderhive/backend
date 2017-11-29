class EntityResolver {
    constructor({entityName, entityService}) {
        this.entityName = entityName;
        this.entityService = entityService;
        this.getAll = this.getAll.bind(this)
        this.getByIdentifier = this.getByIdentifier.bind(this)
        this.createNew = this.createNew.bind(this)
    }

    async getAll(parent, args, context) {
        try {
            console.log(context)
            const allEntities = await this.entityService.getAll();
            return allEntities
        } catch (error) {
            console.log(error)
        }
    }

    async getByIdentifier(parent, args, context) {
        try {
            const entity = await this.entityService.getByIdentifier(args);
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
            if(error.message.startsWith("MISSING ")) throw new Error (`Incomplete Information: MISSING ${error.message.split(' ')[1]}`)
            console.log(error)
        }
    }

}

module.exports = EntityResolver;