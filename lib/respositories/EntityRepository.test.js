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
        it('handles errors when they arise', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('ARBITRARY_ERROR');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getAll();
            }
            catch (error) {
                expect(error.message).toEqual(expectedEntity.message);
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
        it('handles errors when they arise', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('ARBITRARY_ERROR');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getByIdentifier(1, 'email');
            }
            catch (error) {
                expect(error.message).toEqual(expectedEntity.message);
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
        it('handles errors when they arise', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('ARBITRARY_ERROR');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('select');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.getCollectionByIdentifier(1, 'user_id');
            }
            catch (error) {
                expect(error.message).toEqual(expectedEntity.message);
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
        it('handles errors when they arise', async () => {
            let actualEntity;
            let expectedEntity;
            try {
                expectedEntity = new Error('ARBITRARY_ERROR');
                knexTracker.on('query', (query, step) => {
                    expect(query.method).toBe('insert');
                    query.reject(expectedEntity);
                });
                actualEntity = await entityRepository.createNew({'user_data': 1});
            }
            catch (error) {
                expect(error.message).toEqual(expectedEntity.message);
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