import getFirstItemFromResponseArray from './getFirstItemFromResponseArray';

describe('getFirstItemFromResponseArray', () => {
	it('should return first item', () => {
		const r = getFirstItemFromResponseArray({ data: { content: [1, 2] } });
		expect(r).toEqual(1);
	});

	it('should return null if there is no array', () => {
		const r = getFirstItemFromResponseArray({ data: { content: 1 } });
		expect(r).toBeNull();
	});
});
