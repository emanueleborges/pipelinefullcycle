const calcular = require('./calc');

test('soma 1 + 2 igual a 3', () => {
    expect(calcular(1, 2, '+')).toBe(3);
});

test('subtrai 5 - 2 igual a 3', () => {
    expect(calcular(5, 2, '-')).toBe(3);
});

test('multiplica 3 * 4 igual a 12', () => {
    expect(calcular(3, 4, '*')).toBe(12);
});

test('divide 10 / 2 igual a 5', () => {
    expect(calcular(10, 2, '/')).toBe(5);
});

test('divide 5 / 0 retorna "Divisão por zero!"', () => {
    expect(calcular(5, 0, '/')).toBe('Divisão por zero!');
});

test('usa operador inválido retorna "Operador inválido"', () => {
    expect(calcular(4, 5, '?')).toBe('Operador inválido');
});
