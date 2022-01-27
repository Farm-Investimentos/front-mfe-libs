import brlPlain from './brlPlain';

describe('brlPlain formatter', () => {
	it('Should validate brlPlain number', () => {
		expect(brlPlain(10)).toEqual('10,00');
	});

    it('Should not validate brlPlain number', () => {
		expect(brlPlain(null)).toBeNull();
	});
});
