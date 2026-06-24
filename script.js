const selectorTamano = document.getElementById('selector-tamano');
const selectorFormato = document.getElementById('selector-formato');
const btnGenerar = document.getElementById('btn-generar');
const paletaContenedor = document.getElementById('paleta-valores');
const toastContainer = document.getElementById('toast-container');


function obtenerColorHex() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function obtenerColorHsl() {
    const tono = Math.floor(Math.random() * 360);
    const saturacion = Math.floor(Math.random() * 100);
    const luminosidad = Math.floor(Math.random() * 100);
    return `hsl(${tono}, ${saturacion}%, ${luminosidad}%)`;
}