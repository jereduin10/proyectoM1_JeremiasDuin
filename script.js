const selectorTamano = document.getElementById('selector-tamano');
const selectorFormato = document.getElementById('selector-formato');
const btnGenerar = document.getElementById('btn-generar');
const paletaContenedor = document.getElementById('paleta-valores');
const toastContainer = document.getElementById('toast-container');

let coloresGenerados = [];

function obtenerColorRGB() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

function rgbAHex(color) {
    return "#" +
        color.r.toString(16).padStart(2, "0") +
        color.g.toString(16).padStart(2, "0") +
        color.b.toString(16).padStart(2, "0");
}

function rgbAHsl(color) {

    let r = color.r / 255;
    let g = color.g / 255;
    let b = color.b / 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);

    let h, s, l;

    l = (max + min) / 2;

    if (max === min) {

        h = s = 0;

    } else {

        let d = max - min;

        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {

            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;

            case g:
                h = (b - r) / d + 2;
                break;

            case b:
                h = (r - g) / d + 4;
                break;
        }

        h /= 6;
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

function crearPaleta() {

    coloresGenerados = [];

    const cantidadColores = parseInt(selectorTamano.value);

    for (let i = 0; i < cantidadColores; i++) {

        coloresGenerados.push(obtenerColorRGB());

    }

    mostrarPaleta();

    mostrarAviso("¡Nueva paleta generada!");
}

function mostrarPaleta() {

    paletaContenedor.innerHTML = "";

    const formato = selectorFormato.value;

    coloresGenerados.forEach(color => {

        let textoColor;

        if (formato === "HEX") {

            textoColor = rgbAHex(color);

        } else {

            textoColor = rgbAHsl(color);

        }

        const tarjeta = document.createElement("div");

        tarjeta.className = "color-card";

        tarjeta.innerHTML = `
            <div class="color-muestra" style="background: rgb(${color.r}, ${color.g}, ${color.b})"></div>
            <div class="color-info">${textoColor}</div>
        `;

        tarjeta.addEventListener("click", () => {

            navigator.clipboard.writeText(textoColor);

            mostrarAviso("Copiado: " + textoColor);

        });

        paletaContenedor.appendChild(tarjeta);

    });

}

function mostrarAviso(mensaje) {
    toastContainer.innerHTML = "";

    const aviso = document.createElement('div');
    aviso.className = 'toast';
    aviso.innerText = mensaje;

    toastContainer.appendChild(aviso);

    setTimeout(function() {
        aviso.remove();
    }, 2500);
}

selectorFormato.addEventListener("change", mostrarPaleta);
btnGenerar.addEventListener('click', crearPaleta);

crearPaleta();