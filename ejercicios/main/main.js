// Variables

var contador = 1;
var temporizador;
  // Inicia el temporizador, llamando a la función 'rotarImagenes' cada 3 segundos.
function iniciar(){
    temporizador = setInterval(rotarImagenes, 3000);
    temporizador = setInterval(parar, 0)
}

function rotarImagenes(){
    if (contador >= 10) {
        contador = 0;
    }
    var img = document.getElementById('imgSlide');
    img.src = './images/img' + ++contador + '.jpg'
}