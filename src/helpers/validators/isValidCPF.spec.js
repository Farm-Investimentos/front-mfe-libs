import { isValidCPF } from '.';

describe('Is Valid CPF', () => {
    it('Should validate CPF', () => {
        expect(isValidCPF('50706202074')).toBeTruthy();
    });

    it('Should validate invalid CPF', () => {
        expect(isValidCPF('50706202074')).toBeFalsy;
    });
});