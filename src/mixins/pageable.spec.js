import pageable from './pageable';

describe('pageable', () => {
	it('should have methods', () => {
		expect(pageable.methods).toBeDefined();
	});

	it('should have redoSearchFirstPage method', () => {
		expect(pageable.methods.redoSearchFirstPage).toBeDefined();
	});
});
