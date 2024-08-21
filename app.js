
// Función que copia el texto de la respuesta al portapapeles
function copiarTexto() {
    var texto = document.querySelector('.respuesta p').innerText;
    navigator.clipboard.writeText(texto);

    return;
}

// Función que muestra el botón de copiar
function habilitarCopia() {
    let botonCopia = document.getElementById('boton-copia');        
    botonCopia.style.display = 'inline-block';
   
    return;
}

// Función que crea la respuesta en la página
function crearRespuesta(texto) {
    let cajaRespuesta = document.querySelector('.respuesta');
    let p = document.createElement('p');

    p.textContent = texto;
    cajaRespuesta.insertBefore(p, cajaRespuesta.firstChild);
    
    return;
}

// Función que modifica el texto para decodificar
function modificarDecodificar(texto) {
    switch (texto) {
        case 'enter':
            return 'e';
        case 'imes':
            return 'i';    
        case 'ai':
            return 'a';
        case 'ober':
            return 'o';
        case 'ufat':
            return 'u';
        default:
            return texto;
    }
}

// Función que modifica el texto para codificar
function modificarCodificar(texto) {
    switch (texto) {
        case 'e':
            return 'enter';
        case 'i':
            return 'imes';    
        case 'a':
            return 'ai';
        case 'o':
            return 'ober';
        case 'u':
            return 'ufat';
        default:
            return texto;
    }
}

// Función que decodifica el texto de entrada
function decodificar() {
    let elementoHTMLTextarea = document.querySelector('.entrada-texto textarea');
    let texto = elementoHTMLTextarea.value;

    texto = texto.replace(/enter|imes|ai|ober|ufat/g, modificarDecodificar);

    return texto;
}

// Función que codifica el texto de entrada
function codificar() {
    let elementoHTMLTextarea = document.querySelector('.entrada-texto textarea');
    let texto = elementoHTMLTextarea.value;
    
    texto = texto.replace(/[aeiou]/g, modificarCodificar);

    return texto;
}

// Función que vacía la caja de respuesta
function vaciarCajaRespuesta() {
    let imagenHTML = document.querySelector('.respuesta img');
    if (imagenHTML) {
        imagenHTML.remove();
    }

    let h1HTML = document.querySelector('.respuesta h1');
    if (h1HTML) {
        h1HTML.remove();
    }

    let h2HTML = document.querySelector('.respuesta h2');
    if (h2HTML) {
        h2HTML.remove();
    }

    let pHTML = document.querySelector('.respuesta p');
    if (pHTML) {
        pHTML.remove();
    }

    return;
}

// Función que se ejecuta al hacer clic en el botón de encriptar
function botonCodificar() {
    vaciarCajaRespuesta();
    crearRespuesta(codificar());
    habilitarCopia();
    
    return;
}

// Función que se ejecuta al hacer clic en el botón de desencriptar
function botonDecodificar() {
    vaciarCajaRespuesta();
    crearRespuesta(decodificar());
    habilitarCopia(); 
    
    return;
}
