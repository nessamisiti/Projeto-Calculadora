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

// Função para calcular com base na operação
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