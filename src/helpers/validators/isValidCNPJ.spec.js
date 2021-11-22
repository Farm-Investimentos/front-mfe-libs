import { isValidCNPJ } from ".";

describe('Is Valid CNPJ', () => {
    it('Should validate CNPJ', () => {
        expect(isValidCNPJ('89864014000167')).toBeTruthy();
    });

    it('Should validate invalid CNPJ', () => {
        expect(isValidCNPJ('89864014000169')).toBeFalsy;
    });
});