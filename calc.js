function Calcular(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Divisão por zero inválido!';
        default:
            return 'Operador inválido';
    }
}

module.exports = Calcular;
