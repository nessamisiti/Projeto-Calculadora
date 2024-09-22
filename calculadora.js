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
    if(naoEhNumero === true) {
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

//Teste R1
rl.question('Digite o primeiro número: ', (num1) => {
    console.log('número inserido: ', num1)
});