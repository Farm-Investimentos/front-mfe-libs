import { cpfOrCnpjRules } from '.';

describe('CPF or CNPJ valid', () => {
    it('Should validate CNPJ', () => {
        expect(cpfOrCnpjRules('89864014000167')).toBeTruthy();
    });

    it('Should validate invalid CNPJ', () => {
        expect(cpfOrCnpjRules('89864014000169')).toBeFalsy;
    });

    it('Should validate CPF', () => {
        expect(cpfOrCnpjRules('50706202074')).toBeTruthy();
    });

    it('Should validate invalid CPF', () => {
        expect(cpfOrCnpjRules('50706202079')).toBeFalsy;
    });
});