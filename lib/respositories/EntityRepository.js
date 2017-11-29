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

    async getByEmail(email) {
        try {
            let entity = await this._db(this._entityName).where({ email });
            return entity[0];
        } catch (error) {
            throw error
        }
    }
}

module.exports = EntityRepository;