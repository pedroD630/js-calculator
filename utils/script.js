// ouvir cliques
// receber valor do botão clicado
// ao clicar em numero adicionar valor ao campo de exibição
// ao selecionar um operador, armazenar o valor atual e o operador selecionado (usar função atualizaOperador)
// ao clicar em igual, calcular o resultado e exibir no campo de exibição. A função que será chamada depende do operador selecionado
// ao clicar em limpar, limpar o campo de exibição e os valores armazenados
// ao clicar em ponto, adicionar ponto ao campo de exibição se não houver ponto

document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('calculator-display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = null;
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value >= '0' && value <= '9') {
                currentInput += value;
                display.value = currentInput;
            } else if (value === '.') {
                if (!currentInput.includes('.')) {
                    currentInput += value;
                    display.value = currentInput;
                }
            } else if (value === 'C') {
                currentInput = '';
                operator = null;
                firstOperand = null;
                display.value = '';
            } else if (value === '=') {
                if (operator && firstOperand !== null) {
                    const secondOperand = parseFloat(currentInput);
                    const result = calculate(firstOperand, secondOperand, operator);
                    display.value = result;
                    currentInput = result.toString();
                    operator = null;
                    firstOperand = null;
                }
            } else {
                if (currentInput) {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
            }
        });
    });

    function calculate(first, second, op) {
        switch (op) {
            case '+':
                return first + second;
            case '-':
                return first - second;
            case '*':
                return first * second;
            case '/':
                return first / second;
            default:
                return second;
        }
    }
});
