"use strict"

const cuentaAtras = (numero) => {

    // Notificamos al worker el número indicado
    postMessage(numero);

    // setTimeout fuerza un lapso de tiempo previo a la ejecución dada
    setTimeout ( () => {
        cuentaAtras (--numero);
    }, 1000);

};

cuentaAtras(10);