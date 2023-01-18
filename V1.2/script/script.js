import * as galletas from "./modules/cookies.js";
import {creaPagina} from "./modules/pageCreation.js";
import * as datos from "./modules/datos.js";

// La ventana se carga e inicia los eventos.
window.addEventListener("load", carga);

function carga() {

    // Definimos variables.
    let carga = 0; // Estado de carga actual de la aplicación.
    let progreso; // Estado de carga actual (en porcentaje) de la aplicación.
    let contador = document.getElementsByClassName("contador")[0]; // Etiqueta HTML donde se escribe el progreso de la carga.
    let final = 500; // Tamaño final de la carga.
    let barraProgreso = document.getElementsByClassName("barraFront")[0];
    let intervalo = setInterval(() => { // Intervalo para cargar la pantalla.

        carga++;
        progreso = (carga / final) * 100;
        progreso = Math.floor(progreso);
        contador.innerHTML = `Loading...\n${progreso}%`;
        barraProgreso.style.width = `${progreso}%`;

        // Si la carga llega al final.
        if (carga >= final) {

            // Cerramos el intervalo.
            clearInterval(intervalo);
            let bloque = document.getElementsByClassName("contenedor")[0];
            bloque.style.display = "none"; // Eliminamos el bloque que es la pantalla de carga.

            // Iniciamos el programa.
            inicio();
        }
    }, 10);
}

function inicio() {

    // Estas tres lineas indican si la página web en la que nos encontramos es el pasado, presente(normal) o futuro, y creará la página web dinámicamente mediante JS dependiendo de esto.
    let tipo = window.location.pathname;
    tipo = tipo.split("/").pop();
    tipo = tipo.split(".").shift();

    // Se crea la página web.
    creaPagina(tipo);

    // Se agregan los event Listener.
    document.addEventListener("scroll", cambiaFixed, false); // Controla los bloques que se encuentran en los bordes izquierdo y derecho para que se convierta en fixed o en absolute.
    let arraySection = document.getElementsByClassName("pkm_img");

    for (let i = 0; i < arraySection.length; i++) {

        // Controlamos que si el ratón pase por encima de un bloque se añada una sombra, y cuando el ratón salga del bloque se quite la sombra.
        arraySection[i].addEventListener("mouseover", agregaSombra);
        arraySection[i].addEventListener("mouseout", quitaSombra);

        // Controlamos el cambio de las imagenes al pasar el ratón por encima o al quitar el ratón de ellas.
        arraySection[i].firstElementChild.addEventListener("mouseover", fotoShiny);
        arraySection[i].firstElementChild.addEventListener("mouseout", quitaShiny);
    }

    // Menú de selección de página actual.
    let boton = document.getElementsByClassName("fa-circle-up")[0];
    boton.addEventListener("click", abreMenu);

    let opciones = document.getElementsByTagName("li");

    // Añadimos un evento para elegir la página actual dentro del menú.
    for (let i = 0; i < opciones.length; i++) {

        opciones[i].addEventListener("click", selecciona);
    }

    galletas.alertaCookie();
    galletas.alertaCookieWebStorage();
}

function cambiaFixed() { // Cambia de manera dinámica la posición de las imagenes que se encuentran a la izquierda y derecha de la pantalla. 
    // De esta forma, conseguimos que dichas imagenes no bloqueen parte de la imagen de entrada de la página web, ya que designamos su posición como absoluta al principio de la página web
    // Y controlamos la posición de la barra de Scroll para convertir la posición de la imagen en fixed al bajar desde cierto punto.

    // Definimos variables.
    let tiraIzquierda = document.getElementById("izqui");
    let tiraDerecha = document.getElementById("dere");
    let imagen = document.getElementById("imagen"); // Imagen que aparece al principio de la página web.
    let tamRelativoImg = imagen.offsetHeight; // Tamaño de la imagen en píxeles, para controlar de manera más dinámica el píxel en el que la imagen "desaparece" de pantalla.

    if (window.scrollY > tamRelativoImg && window.innerHeight >= tamRelativoImg) { // Controlamos que la página sea tan grande como el tamaño de la imagen, y que la
        // barra de scroll se encuentre en una posición concreta.

        tiraIzquierda.style.top = "0";
        tiraDerecha.style.top = "0";
        tiraIzquierda.style.position = "fixed";
        tiraDerecha.style.position = "fixed";
    } else {

        // Si la barra de Scroll se encuentra debajo de cierto punto, el estilo de las imagenes se cambiará.
        tiraIzquierda.style.top = "unset";
        tiraDerecha.style.top = "unset";
        tiraIzquierda.style.position = "absolute";
        tiraDerecha.style.position = "absolute";
    }

    // Controlamos la opacidad de la imagen principal dependiendo de cuánto baje la barra de Scroll.
    if (window.scrollY == 0) {
        imagen.style.opacity = "100%";
    } else if (window.scrollY > 100 && window.scrollY < 200) {
        imagen.style.opacity = "90%";
    } else if (window.scrollY > 200 && window.scrollY < 300) {
        imagen.style.opacity = "80%";
    } else if (window.scrollY > 300 && window.scrollY < 400) {
        imagen.style.opacity = "70%";
    } else if (window.scrollY > 400 && window.scrollY < 500) {
        imagen.style.opacity = "60%";
    } else if (window.scrollY > 500 && window.scrollY < 600) {
        imagen.style.opacity = "50%";
    } else if (window.scrollY > 600 && window.scrollY < 700) {
        imagen.style.opacity = "40%";
    } else if (window.scrollY > 700 && window.scrollY < 800) {
        imagen.style.opacity = "30%";
    } else if (window.scrollY > 800 && window.scrollY < 900) {
        imagen.style.opacity = "20%";
    } else if (window.scrollY > 900 && window.scrollY < 1000) {
        imagen.style.opacity = "10%";
    }
}

function agregaSombra(evento) { // Añade una sombra más oscura a los elementos indicados cuando se pasa el ratón por encima.

    if (evento.currentTarget == evento.target) {

        evento.target.style.boxShadow = "10px 10px 10px 10px gray";
    } else if (evento.currentTarget == evento.target.parentElement) { // En caso de que se pase por el hijo del elemento indicado, cambiará la sombra del padre.

        evento.target.parentElement.style.boxShadow = "10px 10px 10px 10px gray"
    } else evento.target.parentElement.parentElement.style.boxShadow = "10px 10px 10px 10px gray"

}

function quitaSombra(evento) { // Devuelve la sombra original a los elementos indicados cuando el ratón sale del elemento.

    if (evento.currentTarget == evento.target) {

        evento.target.style.boxShadow = "10px 10px 10px 10px lightgray";
    } else if (evento.currentTarget == evento.target.parentElement) { // En caso de que se pase por el hijo del elemento indicado, cambiará la sombra del padre.

        evento.target.parentElement.style.boxShadow = "10px 10px 10px 10px lightgray";
    } else evento.target.parentElement.parentElement.style.boxShadow = "10px 10px 10px 10px lightgray";
}

function fotoShiny(evento) { // Cambia la imagen de una etiqueta cuando se pasa el ratón por encima.

    let tipo = window.location.pathname;
    tipo = tipo.split("/").pop();
    tipo = tipo.split(".").shift();

    // Buscamos la imagen "Shiny", basándonos en el tipo.
    let arrImgS = datos.eligeArrayImg(tipo + "/shiny");
    let posicionImg;

    // Recuperamos la "id" de la imagen sobre la que se pasa el ratón por encima, en el caso de hacerlo con la tercera imagen, la id sería 3 (Nombre de la imagen).
    if (evento.currentTarget == evento.target) { // Controlamos si se posiciona sobre el hijo de la etiqueta objetivo.

        posicionImg = evento.target.getAttribute("src");
    } else if (evento.currentTarget == evento.target.parentElement) {

        posicionImg = evento.target.parentElement.getAttribute("src");
    } else {

        posicionImg = evento.target.parentElement.parentElement.getAttribute("src");
    }

    // Recogemos solamente la parte de la id de la imagen.
    let prueba1 = posicionImg.substr(posicionImg.length - 6, posicionImg.length);

    let prueba2 = prueba1.substr(0, 2);

    // Confirmamos que el ratón pasa solamente por encima de la imagen.
    if (evento.target == evento.currentTarget) {

        // Utilizamos el array con las posiciones de todas las imagenes para cambiar la imagen previa.
        evento.target.setAttribute("src", arrImgS[parseInt(prueba2) - 1]);
    }
}

function quitaShiny(evento) { // Repite el proceso de la función fotoShiny para devolver la imagen original al bloque.

    let tipo = window.location.pathname;
    tipo = tipo.split("/").pop();
    tipo = tipo.split(".").shift();

    let arrImg = datos.eligeArrayImg(tipo);
    let posicionImg;
    if (evento.currentTarget == evento.target) {

        posicionImg = evento.target.getAttribute("src");
    } else if (evento.currentTarget == evento.target.parentElement) {

        posicionImg = evento.target.parentElement.getAttribute("src");
    } else {

        posicionImg = evento.target.parentElement.parentElement.getAttribute("src");
    }

    let prueba1 = posicionImg.substr(posicionImg.length - 6, posicionImg.length);

    let prueba2 = prueba1.substr(0, 2);

    if (evento.target == evento.currentTarget) {

        evento.target.setAttribute("src", arrImg[parseInt(prueba2) - 1]);
    }
}

function abreMenu(evento) { // Abre el menú de elección de página web al pulsar la flecha.

    // Recogemos la lista y el botón en una variable.
    let menu = document.getElementsByTagName("ul")[0];
    let boton = document.getElementsByClassName("combo")[0];

    // Si el menú se mantuviera siempre en posición absolute se vería un hueco en el lugar donde se supone que está. De esta forma aseguramos que el hueco aparezca cuando la lista aparezca.
    if (menu.style.position == "relative") {

        menu.style.position = "absolute";
    } else menu.style.position = "relative";

    // Quitamos las clases gira, que gira en 180º el botón de la flecha, y la clase oculto, que pone el display en none.
    boton.classList.toggle("gira");
    menu.classList.toggle("oculto");
}

function selecciona(evento) { // Crea las consecuencias de elegir una opción de la lista previa.

    let menu = document.getElementsByTagName("ul")[0];
    let textoSeleccionado = document.getElementsByTagName("p")[0];
    let eleccion = evento.target.innerHTML;
    textoSeleccionado.innerHTML = eleccion;

    // Dependiendo de si se pulsa en el bloque, en el texto o en la imagen el elemento elección cambia. De esta forma aseguramos que si se clica en el bloque el resultado sea el mismo que clicar en el texto.
    if (eleccion.length > 7) {

        eleccion = eleccion.substr(eleccion.length - 10, 6);
    }

    // Al clicar en la imagen, se recoge un valor nulo, de esta forma devolverá siempre a la página inicial.
    if (eleccion == "") eleccion = "normal";

    // Ocultamos el menu de nuevo, ya que se ha cerrado por elegir una opción.
    menu.classList.toggle("oculto");

    // Repetimos el mismo proceso que en la función abreMenu.
    if (menu.style.position == "relative") {

        menu.style.position = "absolute";
    } else menu.style.position = "relative";

    // Redirecciona al usuario a la página que se ha elegido.
    window.location.replace(`./${eleccion}.html`);
}