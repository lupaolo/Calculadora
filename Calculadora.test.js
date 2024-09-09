const Calculadora = require('./Calculadora');

describe('Calculadora', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculadora();
  });

  test('deve somar dois números', () => {
    expect(calc.somar(1, 2)).toBe(3);
  });

  test('deve subtrair dois números', () => {
    expect(calc.subtrair(5, 3)).toBe(2);
  });

  test('deve multiplicar dois números', () => {
    expect(calc.multiplicar(2, 3)).toBe(6);
  });

  test('deve dividir dois números', () => {
    expect(calc.dividir(6, 2)).toBe(3);
  });

  test('deve lançar erro ao dividir por zero', () => {
    expect(() => calc.dividir(6, 0)).toThrow('Não é possível dividir por zero');
  });
});
