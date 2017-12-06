const EntityResolver = require('./EntityResolver')

describe.only('EntityResolver Tests', () => {
    const entityService = {
        getAll: jest.fn(),
        getById: jest.fn(),
        getByIdentifier: jest.fn(),
        getOwnerByParentComponentId: jest.fn(),
        getByUserId: jest.fn(),
        getParent: jest.fn(),
        getChildren: jest.fn(),
        getCloneSource: jest.fn(),
        getClones: jest.fn(),
        getTagsByComponent: jest.fn(),
        getFollowers: jest.fn(),
        getFollowees: jest.fn(),
        getActivity: jest.fn(),
        getComment: jest.fn(),
        getByIdentifierSpecial: jest.fn(),
        getByUserIdSpecial: jest.fn(),
        createNew: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    };

    const entityResolver = new EntityResolver({
        entityName: 'Entity',
        entityService
    });

    describe('getAll method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return all entries from entity', async () => {
            const expectedEntity = [{id: 1}];
            entityService.getAll.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getAll(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getAll.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getAll(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getById method', () => {
        const expectedEntity = {id: 1};
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};


        it('should return single entry from entity', async () => {
            const parent = {};
            entityService.getById.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getById(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getById.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getById(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getOwnerByParentComponentId method', () => {
        const args = {id: 1};
        const parent = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return single entry from entity', async () => {
            const expectedEntity = {id: 1};
            entityService.getById.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getOwnerByParentComponentId(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getById.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getOwnerByParentComponentId(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getByIdentifier method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return single entry from entity', async () => {
            const expectedEntity = {id: 1};
            entityService.getByIdentifier.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getByIdentifier(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getByIdentifier.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getByIdentifier(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getByUserId method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return single entry from entity', async () => {
            const expectedEntity = {id: 1};
            entityService.getByUserId.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getByUserId(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getByUserId.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getByUserId(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getParent method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return single entry from entity', async () => {
            const expectedEntity = {id: 1};
            entityService.getById.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getParent(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getById.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getParent(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getChildren method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return array of entries from entity', async () => {
            const expectedEntity = [{id: 1}, {id: 1}];
            entityService.getChildren.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getChildren(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getChildren.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getChildren(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getCloneSource method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return array of entries from entity', async () => {
            const expectedEntity = [{id: 1}, {id: 1}];
            entityService.getById.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getCloneSource(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getById.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getCloneSource(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getClones method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return array of entries from entity', async () => {
            const expectedEntity = [{id: 1}, {id: 1}];
            entityService.getClones.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getClones(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getClones.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getClones(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getTagsByComponent method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return array of entries from entity', async () => {
            const expectedEntity = [{id: 1}, {id: 1}];
            entityService.getTagsByComponent.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getTagsByComponent(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getTagsByComponent.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getTagsByComponent(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getFollowers method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return array of entries from entity', async () => {
            const expectedEntity = [{id: 1}, {id: 1}];
            entityService.getFollowers.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getFollowers(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getFollowers.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getFollowers(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getFollowers method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return array of entries from entity', async () => {
            const expectedEntity = [{id: 1}, {id: 1}];
            entityService.getFollowees.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getFollowees(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getFollowees.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getFollowees(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getByIdentifierSpecial method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return array of entries from entity', async () => {
            const expectedEntity = [{id: 1}, {id: 1}];
            entityService.getByIdentifierSpecial.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getByIdentifierSpecial(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getByIdentifierSpecial.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getByIdentifierSpecial(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getByUserIdSpecial method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return specific entry from entity', async () => {
            const expectedEntity = {id: 2};
            entityService.getByUserIdSpecial.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getByUserIdSpecial(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getByUserIdSpecial.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getByUserIdSpecial(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getActivity method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return array of activities from activity entity', async () => {
            const expectedEntity = [{id: 1}, {id: 1}];
            entityService.getActivity.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getActivity(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getActivity.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getActivity(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('getComment method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};

        it('should return specific comment', async () => {
            const expectedEntity = {id: 2};
            entityService.getComment.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.getComment(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.getComment.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.getComment(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });

    describe('createNew method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};
        it('should return specific created entity', async () => {
            const expectedEntity = {id: 2};
            entityService.createNew.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.createNew(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.createNew.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.createNew(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
        it('should deal with MISSING errors when they occur', async () => {
            try {
                const expectedEntity = new Error('MISSING DATA');
                entityService.createNew.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.createNew(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Incomplete Information: MISSING DATA');
            }
        });
        it('should deal with DUPLICATE errors when they occur', async () => {
            try {
                const expectedEntity = new Error('DUPLICATE: EMAIL ADDRESS');
                entityService.createNew.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.createNew(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('DUPLICATE: EMAIL ADDRESS');
            }
        });
    });

    describe('update method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};
        it('should return specific updated entity', async () => {
            const expectedEntity = {id: 2};
            entityService.update.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.update(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.update.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.update(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });


    describe('delete method', () => {
        const parent = {id: 1};
        const args = {id: 1};
        const context = {authenticatedUserId: 1};
        it('should return specific deleted entity', async () => {
            const expectedEntity = {id: 2};
            entityService.delete.mockReturnValueOnce(Promise.resolve(expectedEntity));
            const actualEntity = await entityResolver.delete(parent, args, context);
            expect(actualEntity).toEqual(expectedEntity);
        });
        it('should deal with errors when they occur', async () => {
            try {
                const expectedEntity = new Error('Arbitrary error bubbling up from SERVICE');
                entityService.delete.mockReturnValueOnce(Promise.reject(expectedEntity));
                const actualEntity = await entityResolver.delete(parent, args, context);
                return actualEntity
            }
            catch (error) {
                expect(error.message).toEqual('Error occurred. Please try again.');
            }
        });
    });


});