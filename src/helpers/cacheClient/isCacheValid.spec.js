import isCacheValid from './isCacheValid';

describe('IsCacheValid', () => {
	describe('IsCacheValid function', () => {
		it('Should check if cache is valid', () => {
			expect(isCacheValid()).toBeFalsy();

			expect(
				isCacheValid({ date: new Date(), response: {} }, new Date()),
			).toBeFalsy();
		});
	});
});
