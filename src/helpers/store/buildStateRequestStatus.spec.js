import buildStateRequestStatus from './buildStateRequestStatus';

describe('buildStateRequestStatus', () => {
	it('should create object for state list', () => {
		const r = buildStateRequestStatus(['someKey']);
		expect(r).toBeDefined();
		expect(r.someKey).toEqual('IDLE');
	});
});
