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
    //Returns single item, like single user, for example
    async getByIdentifier(identifier, idType) {
        try {
            let entity = await this._db(this._entityName).where({ [idType]: identifier });
            return entity[0];
        } catch (error) {
            throw error
        }
    }

    //Returns multiple items in array, like all components for a single user for example
    async getCollectionByIdentifier(identifier, idType) {
        try {
            let entity = await this._db(this._entityName).where({ [idType]: identifier });
            return entity;
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

    async update(args) {
        let id = args.id
        delete args.id
        try {
            let [entity] = await this._db(this._entityName).where({id}).update(args, "*")
            return Object.assign({}, entity)
        } catch (error) {
            console.log(error)
        }
    }

    async delete(args) {
        let id = args.id
        delete args.id
        try {
            let [entity] = await this._db(this._entityName).where({id}).update({status: 'Dead Bee', hashed_password: 'deletedaccount'}, "*")
            return Object.assign({}, entity)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = EntityRepository;