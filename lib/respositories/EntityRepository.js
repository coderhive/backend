class EntityRepository {
    constructor({entityName, db}) {
        this._entityName = entityName;
        this._db = db;
    }

    async getAll(orderFactor) {
        try {
            let allEntities = await this._db(this._entityName).orderBy(orderFactor, 'desc')
            return allEntities;
        } catch (error) {
            throw new Error('Error at DB')
        }
    }

    async getById(id) {
        try {
            let [entity] = await this._db(this._entityName).where({id});
            return entity;
        } catch (error) {
            throw new Error('Error at DB')
        }
    }

    async getByEmail(email) {
        try {
            let [entity] = await this._db(this._entityName).where({email});
            return entity;
        } catch (error) {
            throw new Error('Error at DB')
        }
    }

    //Returns single item, like single user, for example
    async getByIdentifier(identifier, idType) {
        try {
            let [entity] = await this._db(this._entityName).where({[idType]: identifier});
            return entity;
        } catch (error) {
            throw new Error('Error at DB')
        }
    }


    //Returns multiple items in array, like all components for a single user for example
    async getCollectionByIdentifier(identifier, idType, sort) {
        try {
            let entity = await this._db(this._entityName).where({[idType]: identifier}).orderBy('created_at', 'desc').limit(30);
            return entity;
        } catch (error) {
            throw new Error('Error at DB')
        }
    }

    async getTagsByComponent(component_id) {
        try {
            let entity = await this._db(this._entityName)
                .join('Tag', `${this._entityName}.tag_id`, 'Tag.id')
                .where({component_id: component_id})
                .select(
                    `${this._entityName}.id`,
                    'name',
                    `${this._entityName}.created_at`,
                    `${this._entityName}.updated_at`,
                );
            return entity;
        } catch (error) {
            throw new Error('Error at DB')
        }
    }

    async getFollowers(userId) {
        try {
            let followers = await this._db(this._entityName)
                .join('User', `${this._entityName}.follower`, 'User.id')
                .where({[`${this._entityName}.followee`]: userId});
            return followers
        }
        catch (error) {
            throw new Error('Error at DB')
        }
    }

    async getFollowerIds(userId) {
        try {
            let followerIds = await this._db(this._entityName)
                .where({[`${this._entityName}.followee`]: userId});
            return followerIds
        }
        catch (error) {
            throw new Error('Error at DB')
        }
    }

    async getFollowees(userId) {
        try {
            let followers = await this._db(this._entityName)
                .join('User', `${this._entityName}.followee`, 'User.id')
                .where({[`${this._entityName}.follower`]: userId});
            return followers
        }
        catch (error) {
            throw new Error('Error at DB')
        }
    }

    async getCollectionByIdentifierSpecial(identifier, idType, specialValue) {
        try {
            if (specialValue) {
                let entity = await this._db(this._entityName)
                    .join('User', 'User.id', '=', `${this._entityName}.user_id`)
                    .join('Component', 'Component.id', '=', `${this._entityName}.component_id`)
                    .where({[idType]: identifier})
                    .select(
                        `${this._entityName}.id`,
                        `${this._entityName}.user_id`,
                        'User.display_name',
                        'User.profile_picture',
                        `${this._entityName}.component_id`,
                        'Component.title',
                        'Component.component_picture',
                        'Component.description',
                        `${this._entityName}.created_at`,
                        `${this._entityName}.updated_at`,
                        `${this._entityName}.${specialValue}`,
                    );
                return entity;
            } else {
                let entity = await this._db(this._entityName)
                    .join('User', 'User.id', '=', `${this._entityName}.user_id`)
                    .join('Component', 'Component.id', '=', `${this._entityName}.component_id`)
                    .where({[idType]: identifier})
                    .select(
                        `${this._entityName}.id`,
                        `${this._entityName}.user_id`,
                        'User.display_name',
                        'User.profile_picture',
                        `${this._entityName}.component_id`,
                        'Component.title',
                        'Component.component_picture',
                        'Component.description',
                        `${this._entityName}.created_at`,
                        `${this._entityName}.updated_at`,
                    );
                return entity;
            }
        } catch (error) {
            throw new Error('Error at DB')
        }
    }

    async getFansByComponent(component_id){
        try{
            let fans = await this._db(this._entityName).where({component_id})
            return fans
        }
        catch(error){
            throw new Error('Error at DB')
        }
    }

    async checkForDuplicateRelation(user_id, component_id) {
        try {
            let match = await this._db(this._entityName)
                .where({ user_id, component_id });
            return match
        }
        catch (error) {
            throw new Error('Error at DB')
        }
    }

    async checkForDuplicateTag(tag_id, component_id) {
        try {
            let match = await this._db(this._entityName)
                .where({ tag_id, component_id });
            return match
        }
        catch (error) {
            throw new Error('Error at DB')
        }
    }

    async checkForDuplicateFollow(follower, followee) {
        try {
            let match = await this._db(this._entityName)
                .where({ follower, followee });
            return match
        }
        catch (error) {
            throw new Error('Error at DB')
        }
    }


    async createNew(args) {
        try {
            let [entity] = await this._db(this._entityName).insert(args, '*');
            return entity;
        } catch (error) {
            throw new Error('Error at DB')
        }
    }

    async update(args) {
        let id = args.id;
        delete args.id;
        try {
            let [entity] = await this._db(this._entityName).where({id}).update(args, "*");
            return Object.assign({}, entity)
        } catch (error) {
            console.log(error)
            throw new Error('Error at DB')
        }
    }

    //Todo Replace the below delete by using UPDATE(above) with the specified props. And do the same for all soft del's
    async delete(args) {
        let id = args.id;
        delete args.id;
        try {
            let [entity] = await this._db(this._entityName).update({
                status: 'deleted',
                hashed_password: 'deletedaccount'
            }, "*").where({id});
            return Object.assign({}, entity)
        } catch (error) {
            throw new Error('Error at DB')
        }
    }

    async deleteComponent(id) {
        try {
            let [entity] =  await this._db(this._entityName).update({
                status: 'deleted'
            }, '*').where({ id })
            return entity;
        } catch (error) {
            throw new Error('Error at DB')
        }
    }

    async hardDelete(id) {
        try {
            let [entity] = await this._db(this._entityName).del('*').where({id});
            return entity;
        }
        catch (error) {
            throw new Error('Error at DB')
        }
    }

    async hardDeleteByUser(user_id, component_id) {
        try {
            let [entity] = await this._db(this._entityName).del('*').where({user_id, component_id});
            return entity;
        }
        catch (error) {
            throw new Error('Error at DB')
        }
    }

    async hardDeleteByTag(tag_id, component_id) {
        try {
            let [entity] = await this._db(this._entityName).del('*').where({tag_id, component_id});
            return entity;
        }
        catch (error) {
            throw new Error('Error at DB')
        }
    }

    async hardDeleteFollow(follower, followee) {
        try {
            let [entity] = await this._db(this._entityName).del('*').where({follower, followee});
            return entity;
        }
        catch (error){
            throw new Error('Error at DB')
        }
    }

}

module.exports = EntityRepository;