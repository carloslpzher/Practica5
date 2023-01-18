import * as datos from "./datos.js";

// Se crea la página web de manera dinámica mediante JavaScript.
function creaPagina(tipo) {

    // Creamos las variables que vamos a utilizar para generar la página web mediante javascript

    // Arrays que guardan los textos e imágenes que son necesarias según la página en la que nos encontremos.
    let arrPkmImg = datos.eligeArrayImg(tipo);
    let arrPkmEntry = datos.eligeArrayEntry(tipo);

    let body = document.getElementsByTagName("body")[0];
    let img = document.createElement("img"); // Imagen logo de la página.
    let imgPkm = document.createElement("img"); // Imagen grande que se encuentra en el principio de la página.
    let divImg = document.createElement("div"); // Div que almacena las imagenes.

    // Divs que almacenan las imagenes que se encuentran en los bordes izquierdo y derecho de la página.
    let divIzq = document.createElement("div");
    let divDer = document.createElement("div");

    // Divs que crean el Header
    let divHeaderImg = document.createElement("div");
    let divHeaderText = document.createElement("div");

    // Elementos HTML que crean conjuntamente cada entrada de la página.
    let divPkm = document.createElement("div");
    let content = document.createElement("content");
    let section = document.createElement("section");

    let header = document.createElement("header");
    let e = document.createElement("e");
    let ePkm = document.createElement("e");

    // Barra de elección de página web actual.
    let eleccion = document.createElement("div");
    let actual = document.createElement("p");
    let flecha = document.createElement("i");
    let lista = document.createElement("ul");
    let opcion = document.createElement("li");
    let imgOpc = document.createElement("i");
    let textoOpc = document.createElement("p");

    // Se añaden las clases a los elementos basados en la barra de selección.
    let pasado = document.createElement("div");
    let normal = document.createElement("div");
    let futuro = document.createElement("div");

    eleccion.classList.add("combo");
    eleccion.classList.add("gira");
    flecha.classList.add("fa-regular");
    flecha.classList.add("fa-circle-up");
    flecha.classList.add("fa-2x");
    lista.classList.add("forma_pago");
    lista.classList.add("oculto");
    imgOpc.classList.add("fa-brands");
    imgOpc.classList.add("fa-2x");

    // Enlazamos los elementos HTML entre sí.
    opcion.appendChild(imgOpc.cloneNode(true));
    opcion.appendChild(textoOpc.cloneNode(true))

    for (let i = 0; i < 3; i++) {

        lista.appendChild(opcion.cloneNode(true));
    }

    // Array con todas las opciones de la lista.
    let opcLista = lista.getElementsByTagName("li");

    // Añadimos las imagenes de cada opción.
    opcLista[0].firstElementChild.style.backgroundImage = "url('./img/koraidon_logo.png')";
    opcLista[1].firstElementChild.style.backgroundImage = "url('./img/cyclizar_logo.png')";
    opcLista[2].firstElementChild.style.backgroundImage = "url('./img/miraidon_logo.png')";
    opcLista[0].firstElementChild.style.backgroundSize = "cover";
    opcLista[1].firstElementChild.style.backgroundSize = "cover";
    opcLista[2].firstElementChild.style.backgroundSize = "cover";

    // Cambiamos estilos de las opciones de la barra de elección.
    eleccion.appendChild(actual);
    eleccion.appendChild(flecha);
    actual.innerHTML = tipo.toUpperCase();
    opcLista[0].lastElementChild.style.color = "red";
    opcLista[1].lastElementChild.style.color = "black";
    opcLista[2].lastElementChild.style.color = "purple";
    opcLista[0].lastElementChild.innerHTML = "Pasado";
    opcLista[1].lastElementChild.innerHTML = "Normal";
    opcLista[2].lastElementChild.innerHTML = "Futuro";

    // Añadimos la id a la imagen del principio de la página web.
    divImg.setAttribute("id", "imagen");

    // Creamos el header de la página.
    img.setAttribute("src", "./img/International_Pokémon_logo.svg.png");
    img.setAttribute("id", "logo");
    divHeaderImg.appendChild(img);
    header.appendChild(divHeaderImg);
    e.appendChild(pasado);
    e.appendChild(normal);
    e.appendChild(futuro);
    divHeaderText.appendChild(eleccion);
    divHeaderText.appendChild(lista);
    header.appendChild(divHeaderText);

    // Creamos el section de la página.
    divPkm.setAttribute("class", "pkm_img");
    divPkm.appendChild(imgPkm);
    divPkm.appendChild(ePkm);

    // Añadimos tantos div como entradas tenemos.
    for (let i = 0; i < arrPkmImg.length; i++) {

        section.appendChild(divPkm.cloneNode(true));
    }

    // Recogemos todas las etiquetas img dentro de Section en un array para ponerles sus respectivas imágenes.
    let arraySection = section.getElementsByClassName("pkm_img");

    // Se utiliza el array que se ha creado al principio de la función, el cual contiene las url de las imágenes.
    for (let i = 0; i < arraySection.length; i++) {

        arraySection[i].lastElementChild.innerHTML = arrPkmEntry[i];
        arraySection[i].firstElementChild.setAttribute("src", arrPkmImg[i]);
    }

    // Las dos imagenes de los lados.
    divIzq.setAttribute("id", "izqui");
    divDer.setAttribute("id", "dere");

    // Terminamos añadiendo todos los bloques generados previamente en el content, que se mete en el body.
    content.appendChild(divIzq);
    content.appendChild(divDer);
    content.appendChild(header);
    content.appendChild(section);
    body.appendChild(divImg);
    body.appendChild(content);
}

export {creaPagina};