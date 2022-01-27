import brl from './brl';

describe('Brl formatter', () => {
	it('Should validate brl number', () => {
		expect(brl(10)).toEqual('R$10,00');
	});

    it('Should not validate brl number', () => {
		expect(brl(null)).toBeNull();
	});
});
