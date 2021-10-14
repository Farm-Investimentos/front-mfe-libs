import { brl, brlPlain } from './';

describe('Helper brl', () => {
	describe('brl', () => {
		it('should return value for R$10', () => {
			expect(brl(10.0)).toEqual('R$10,00');
		});

		it('should format 0', () => {
			expect(brl(0)).toEqual('R$0,00');
		});

		it('should check null value', () => {
			expect(brl(null)).toBeNull();
		});

		it('should return value without decimals', () => {
			expect(brl(10.0, 0)).toEqual('R$10');
		});
	});

	describe('brlPlain', () => {
		it('should format 0', () => {
			expect(brlPlain(0)).toEqual('0,00');
		});

		it('should check null value', () => {
			expect(brlPlain(null)).toBeNull();
		});

		it('should return value', () => {
			expect(brlPlain(10.0)).toEqual('10,00');
		});

		it('should return value without decimals', () => {
			expect(brlPlain(10.0, 0)).toEqual('10');
		});
	});
});
