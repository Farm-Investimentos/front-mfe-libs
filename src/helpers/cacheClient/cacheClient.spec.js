import CacheClient from './cacheClient';

describe('Cache Client', () => {
	describe('CacheClient', () => {
		it('Should return Promise when request a new url', () => {
			const cacheClient = CacheClient({ get: () => {} });
			expect(cacheClient.get('/a')).toBeDefined();
		});
	});
});
