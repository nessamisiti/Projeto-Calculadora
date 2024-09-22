//Bibliotecas
const readline = require('readline');

//Função para operação de soma
function somar(a, b) {
    return a + b;
}

//Função para operação de multiplicação
function multiplicar(a, b) {
    return a * b;
}

//Função para operação de divisão
function dividir(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

//Função para validar número inserido
function validarNumero(numero) {
    const naoEhNumero = isNaN(numero);
    if(naoEhNumero) {
        return false;
    } else {
        return true;
    }
}

//Função para calcular com base na operação
function calcular(operacao, a, b) {
    switch (operacao) {
        case '+':
            return somar(a, b);
        case '-':
            return subtrair(a, b);
        case '*':
            return multiplicar(a, b);
        case '/':
            return dividir(a, b);
        default:
            return "Operação inválida!";
    }
}

//Configuração do readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//RL para pergunta e resposta do resultado
rl.question('Digite o primeiro número: ', (num1) => {
    if(validarNumero(num1)) {
        rl.question('Digite o segundo número: ', (num2) => {
            if(validarNumero(num2)) {
                rl.question('Digite a operação (+, -, *, /): ', (op) => {
                    const a = parseFloat(num1);
                    const b = parseFloat(num2);
                    const resultado = calcular(op, a, b);
        
                    console.log(`Resultado: ${resultado}`);
                    rl.close();
                });
            } else {
                console.log('Digite um número válido ...');
                rl.close();
            }
        });
    } else {
        console.log('Digite um número válido ...');
        rl.close();
    }
});