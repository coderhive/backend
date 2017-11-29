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

    //TODO GENERALIZE THIS TO WORK WITH OTHER IDENTIFIERS, so that it works for other entity types (likely with ID)
    async getByEmail(email) {
        try {
            let entity = await this._db(this._entityName).where({ email });
            return entity[0];
        } catch (error) {
            throw error
        }
    }

    async createNew(args){
        try {
            let [entity] = await this._db(this._entityName).insert(args, '*');
            return entity;
        } catch (error) {
            throw error
        }
    }

    // async createNew()
}

module.exports = EntityRepository;