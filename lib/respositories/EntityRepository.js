class EntityRepository {
    constructor({entityName, db}) {
        this._entityName = entityName;
        this._db = db;
    }

    async getAll() {
        try {
            let allEntities = await this._db(this._entityName);
            return allEntities;
        } catch (error) {
            throw error
        }
    }
}

module.exports = EntityRepository;