function verificarSequenciaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let resultado = 0;

    if (numero === 0 || numero === 1) {
        return true;
    }

    while (resultado < numero) {
        resultado = a + b;
        a = b;
        b = resultado;
    }

    if (resultado === numero) {
        return true;
    } else {
        return false;
    }
}

const numero = 28;
const pertenceSequencia = verificarSequenciaFibonacci(numero);

if (pertenceSequencia) {
    console.log(numero + " pertence à sequência");
} else {
    console.log(numero + " não pertence à sequência");
}
