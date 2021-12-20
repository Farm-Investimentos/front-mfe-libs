import RequestStatusEnum from './RequestStatusEnum';

describe('RequestStatusEnum', () => {
	it('should have values for the request status', () => {
		expect(RequestStatusEnum.START).toEqual('START');
		expect(RequestStatusEnum.IDLE).toEqual('IDLE');
		expect(RequestStatusEnum.SUCCESS).toEqual('SUCCESS');
		expect(RequestStatusEnum.ERROR).toEqual('ERROR');
	});
});
