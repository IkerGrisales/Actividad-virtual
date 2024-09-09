function cambiarColor(color){
    document.getElementById("rojo").style.backgroundColor = color === 'rojo' ? 'red' : 'grey';
    document.getElementById("amarillo").style.backgroundColor = color === 'amarillo' ? 'yellow' : 'grey';
    document.getElementById("verde").style.backgroundColor = color === 'verde' ? 'green' : 'grey';
}


function iniciarSemaforo() {
    // Cambia a color rojo de inmediato (en 0 milisegundos).
    setTimeout(() => cambiarColor('rojo'), 0);

    // Cambia a color amarillo después de 3 segundos (3000 milisegundos).
    setTimeout(() => cambiarColor('amarillo'), 3000);

    // Cambia a color verde después de 6 segundos (6000 milisegundos).
    setTimeout(() => cambiarColor('verde'), 6000);

    // Reinicia el ciclo del semáforo después de 9 segundos (9000 milisegundos).
    setTimeout(iniciarSemaforo, 9000);
}