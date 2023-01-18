// Fecha del año siguiente, para la cookie de entradas.
let fechaExpire = new Date();
fechaExpire.setYear(fechaExpire.getFullYear() + 1);


function alertaCookie() {

    if (!document.cookie.includes("aceptarCookies")) { // No hay una cookie que indica si se pueden almacenar cookies o no.

        if (window.confirm("Aceptar cookies")) { // Se han aceptado las cookies.

            // La cookie se crea sin expires, porque queremos que se "reinicie" cuando se cierra la sesión.
            document.cookie = `aceptarCookies=true;`;
        } else { // Se han rechazado las cookies

            document.cookie = `aceptarCookies=false;`;
        }
    }

    if (document.cookie.includes("aceptarCookies=true")) {

        contadorVisitas();
    }
}


function contadorVisitas() { // Crea el bloque de visitas y va aumentando su valor conforme se añaden visitas.

    let valorContador; // Valor del contador de visitas.
    let divContador = document.createElement("div"); // Bloque en el que se almacenan las visitas.
    divContador.setAttribute("id", "divContador");

    if (!document.cookie.includes("contadorVisita")) { // No ha entrado nadie en un año, lo siento.

        document.cookie = `contadorVisita=0;expires=${fechaExpire.toUTCString};path=/`;
    }

    valorContador = getCookie("contadorVisita");
    valorContador = parseInt(valorContador) + 1;
    document.cookie = `contadorVisita=${valorContador};expires=${fechaExpire.toUTCString};path=/`;
    divContador.innerHTML = `Visitas: ${valorContador}`;
    document.getElementsByTagName("body")[0].appendChild(divContador);
}

function getCookie(cname) { // Devuelve el valor de una Cookie, cuyo nombre se le envía, que se encuentre en document.cookie.

    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/***************************************************************
**************************AMPLIACIÓN************************
***************************************************************/

function alertaCookieWebStorage() {

    if (sessionStorage.getItem("aceptarCookiesWebStorage") == null || !sessionStorage.getItem("aceptarCookiesWebStorage")) { // No hay una cookie que indica si se pueden almacenar cookies o no.

        if (window.confirm("Aceptar cookies Web Storage")) { // Se han aceptado las cookies.

            // La cookie se crea sin expires, porque queremos que se "reinicie" cuando se cierra la sesión.
            sessionStorage.setItem("aceptarCookiesWebStorage", "true");
        } else { // Se han rechazado las cookies

            sessionStorage.setItem("aceptarCookiesWebStorage", "false");
        }
    }

    if (sessionStorage.getItem("aceptarCookiesWebStorage") == "true") {

        contadorVisitasWebStorage();
    }
}

function contadorVisitasWebStorage() {

    let valorContador; // Valor del contador de visitas.
    let divContador = document.createElement("div"); // Bloque en el que se almacenan las visitas.
    divContador.setAttribute("id", "divContadorWebStorage");

    if (localStorage.getItem("contadorVisitaWebStorage") == null) { // No ha entrado nadie en un año, lo siento.

        localStorage.setItem("contadorVisitaWebStorage", 0);
    }

    valorContador = localStorage.getItem("contadorVisitaWebStorage");
    valorContador = parseInt(valorContador) + 1;
    localStorage.setItem("contadorVisitaWebStorage", valorContador);
    divContador.innerHTML = `Visitas: ${valorContador}`;
    document.getElementsByTagName("body")[0].appendChild(divContador);
}

export {fechaExpire, alertaCookie, contadorVisitas, alertaCookieWebStorage, contadorVisitasWebStorage};