import { email, cpfOrCnpj } from '.';

describe('email', () => {
  it('Should validate email', () => {
    expect(email('teste@teste.com')).toBeTruthy();
  });

  it('Should validate invalid email', () => {
    expect(email('teste.com')).toBeFalsy;
  });
});

describe('CPF or CNPJ', () => {
  it('should check valid cpf', () => {
    expect(cpfOrCnpj('220.555.278-35')).toBeTruthy();
  });

  it('should check invalid cpf', () => {
    expect(cpfOrCnpj('000.000')).toBeFalsy();
  });

  it('should check valid cnpj', () => {
    expect(cpfOrCnpj('42.747.415/0001-73')).toBeTruthy();
  });
});
