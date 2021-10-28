import unFormatDate from './unFormatDate';

describe('unFormatDate', () => {
	it('should unformat date - YYY-MM-DD', () => {
		expect(unFormatDate('10/12/2021')).toEqual('2021-12-10');
	});
});
