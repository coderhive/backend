process.env.NODE_ENV = 'test';
const knex = require('knex');
const KnexMock = require('mock-knex');
const EntityRepository = require('./EntityRepository');

describe('Test suit for entityRepository', () => {
    const db = knex({client: 'pg'});
    let entityRepository = null;
    let knexTracker = null;

    beforeAll(() => {
        KnexMock.mock(db);
        entityRepository = new EntityRepository({
            entityName: 'Entity',
            db,
            logError: console.error
        });
    });
    beforeEach(() => {
        knexTracker = KnexMock.getTracker();
        knexTracker.install();
    });

    describe('getAll method', () => {
        it('get an array of objects', async () => {
            const expectedEntity = [{object: 1}, {object: 2}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.getAll();
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Arbitrary Error');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getAll();
                return actualEntity;
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });
    
    describe('getById method', () => {
        it('get a specific entity based on id', async () => {
            const expectedEntity = [{object: 1}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.getById(1);
            expect(actualEntity).toEqual(expectedEntity[0]);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getById(1);
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('getByEmail method', () => {
        it('get a specific entity based on email', async () => {
            const expectedEntity = [{object: 1}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.getByEmail('chuck@gmail.com');
            expect(actualEntity).toEqual(expectedEntity[0]);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getByEmail('chuck@gmail.com');
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('getByIdentifier method', () => {
        it('get a single object', async () => {
            const expectedEntity = {object: 1};
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response([expectedEntity]);
            });
            const actualEntity = await entityRepository.getByIdentifier('chuckhagy@gmail.com', 'email');
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getByIdentifier(1, 'email');
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('getCollectionByIdentifier method', () => {
        it('get a single object', async () => {
            const expectedEntity = [{object: 1}, {object: 2}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.getCollectionByIdentifier(1, 'user_id');
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getCollectionByIdentifier(1, 'user_id');
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('getTagsByComponent method', () => {
        it('get array of tags for a given component', async () => {
            const expectedEntity = [{object: 1}, {object: 2}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.getTagsByComponent(1);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getTagsByComponent(1);
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('getFollowers method', () => {
        it('get an array of followers', async () => {
            const expectedEntity = [{object: 1}, {object: 2}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.getFollowers(1);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getFollowers(1);
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('getFollowerIds method', () => {
        it('get an array of user IDs', async () => {
            const expectedEntity = [1, 2];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.getFollowerIds(1);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getFollowerIds(1);
                return actualEntity

            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });


    describe('getFollowees method', () => {
        it('get an array of user IDs', async () => {
            const expectedEntity = [1, 2];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.getFollowees(1);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getFollowees(1);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });


    describe('getCollectionByIdentifierSpecial method', () => {
        it('get an array of relational objects based on identifier WITHOUT SPECIAL', async () => {
            const expectedEntity = [{object: 1}, {object: 2}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.getCollectionByIdentifierSpecial(1, 'component_id');
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('get an array of relational objects based on identifier WITH SPECIAL', async () => {
            const expectedEntity = [{object: 1}, {object: 2}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.getCollectionByIdentifierSpecial(1, 'vote_id', 'vote');
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getCollectionByIdentifierSpecial(1, 'component_id');
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('getFansByComponent method', () => {
        it('get an array of fan objects based on component id', async () => {
            const expectedEntity = [{object: 1}, {object: 2}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.getFansByComponent(1);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getFansByComponent(1);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('checkForDuplicateRelation method', () => {
        it('get an array of user-component objects based on those two ids', async () => {
            const expectedEntity = [{object: 1}, {object: 2}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.checkForDuplicateRelation(1, 1);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.checkForDuplicateRelation(1, 1);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('checkForDuplicateTag method', () => {
        it('get an array of tag-component objects based on those two ids', async () => {
            const expectedEntity = [{object: 1}, {object: 2}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.checkForDuplicateTag(1, 1);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.checkForDuplicateTag(1, 1);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('checkForDuplicateTag method', () => {
        it('get an array of follower-followee objects based on those two ids', async () => {
            const expectedEntity = [{object: 1}, {object: 2}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('select');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.checkForDuplicateFollow(1, 1);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.checkForDuplicateFollow(1, 1);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('createNew method', () => {
        it('get a single object', async () => {
            const expectedEntity = [{object: 1}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('insert');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.createNew({'user_data': 1});
            expect(actualEntity).toEqual(expectedEntity[0]);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('insert');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.createNew({'user_data': 1});
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('update entity method', () => {
        it('get a single object back based on id', async () => {
            const expectedEntity = [{object: 1}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('update');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.update({id: 1});
            expect(actualEntity).toEqual(expectedEntity[0]);
        });
        it('handles errors when they arise (no leak)', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('update');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.update({id: 1});
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('delete (actually soft del for DEAD BEE) entity method', () => {
        it('get a single object back based on id of "deleted" user', async () => {
            const expectedEntity = [{object: 1}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('update');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.delete({id: 1});
            expect(actualEntity).toEqual(expectedEntity[0]);
        });
        it('handles errors when they arise (no leak) ', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('update');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.delete({id: 1});
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('deleteComponent (actually soft del for components) entity method', () => {
        it('get a single object back based on id of "deleted" component', async () => {
            const expectedEntity = [{object: 1}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('update');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.deleteComponent(1);
            expect(actualEntity).toEqual(expectedEntity[0]);
        });
        it('handles errors when they arise (no leak) ', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('update');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.deleteComponent(1);
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });


    describe('hardDelete entity method', () => {
        it('get a single object back based on id of deleted entity', async () => {
            const expectedEntity = [{object: 1}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('del');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.hardDelete(1);
            expect(actualEntity).toEqual(expectedEntity[0]);
        });
        it('handles errors when they arise (no leak) ', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('del');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.hardDelete(1);
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('hardDeleteByUser entity method', () => {
        it('get a single object back based on id of deleted user-component relation', async () => {
            const expectedEntity = [{object: 1}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('del');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.hardDeleteByUser(1, 1);
            expect(actualEntity).toEqual(expectedEntity[0]);
        });
        it('handles errors when they arise (no leak) ', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('del');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.hardDeleteByUser(1, 1);
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('hardDeleteByTag entity method', () => {
        it('get a single object back based on id of deleted tag-component relation', async () => {
            const expectedEntity = [{object: 1}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('del');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.hardDeleteByTag(1, 1);
            expect(actualEntity).toEqual(expectedEntity[0]);
        });
        it('handles errors when they arise (no leak) ', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('del');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.hardDeleteByTag(1, 1);
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    describe('hardDeleteFollow entity method', () => {
        it('get a single object back based on id of deleted follower-followee relation', async () => {
            const expectedEntity = [{object: 1}];
            knexTracker.on('query', (query, step) => {
                expect(query.method).toBe('del');
                query.response(expectedEntity);
            });
            const actualEntity = await entityRepository.hardDeleteFollow(1, 1);
            expect(actualEntity).toEqual(expectedEntity[0]);
        });
        it('handles errors when they arise (no leak) ', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('Error at DB');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('del');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.hardDeleteFollow(1, 1);
            }
            catch (error) {
                expect(error.message).toEqual('Error at DB');
            }
        });
    });

    afterEach(() => {
        knexTracker.uninstall();
    });

    afterAll(() => {
        KnexMock.unmock(db);
    });
})