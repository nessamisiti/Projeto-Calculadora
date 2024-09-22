// Funções da calculadora
function somar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

function validarNumero(numero) {
    const naoEhNumero = isNaN(numero);
    if(naoEhNumero === true) {
        return false;
    } else {
        return true;
    }
}