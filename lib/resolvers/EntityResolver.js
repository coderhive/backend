class EntityResolver {
    constructor({entityName, entityService}) {
        this.entityName = entityName;
        this.entityService = entityService;
        this.getAll = this.getAll.bind(this)
    }

    async getAll(parent, args, context) {
        try {
            const allEntities = await this.entityService.getAll();
            return allEntities
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = EntityResolver;