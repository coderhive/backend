class EntityResolver {
    constructor({entityName, entityService}) {
        this.entityName = entityName;
        this.entityService = entityService;
        this.getAll = this.getAll.bind(this)
        this.getByEmail = this.getByEmail.bind(this)
    }

    async getAll(parent, args, context) {
        try {
            const allEntities = await this.entityService.getAll();
            return allEntities
        } catch (error) {
            console.log(error)
        }
    }

    async getByEmail(parent, args, context) {
        try {
            const entity = await this.entityService.getByEmail(args.email);
            return entity
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = EntityResolver;