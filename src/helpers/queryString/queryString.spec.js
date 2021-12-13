import queryString from './';

describe('queryString', () => {
	it('Should return a query string', () => {
		const filters = {
			testea: 1,
			b: 2,
			c: 3,
		};
		const mappings = {
			testea: 'alterado',
		};
		const m = queryString(filters, mappings);
		expect(m).toContain('alterado');
	});
});
