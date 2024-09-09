let juegos = [
    { bandera: "pa.svg", opciones: ["PANAMA", "SINGAPORE", "SOUTH AFRICA"], respuestaCorrecta: 0 },
    { bandera: "bo.svg", opciones: ["PERU", "ITALY", "BOLIVIA"], respuestaCorrecta: 2 },
    { bandera: "ad.svg", opciones: ["TUNISIA", "ANDORRA", "ANTIGUA AND BARBUDA"], respuestaCorrecta: 1 },
    { bandera: "gb.svg", opciones: ["UKRAINE", "UNITED KINGDOM", "MADAGASCAR"], respuestaCorrecta: 1 },
    { bandera: "na.svg", opciones: ["NAMIBIA", "OMAN", "ETHIOPIA"], respuestaCorrecta: 0 },
    { bandera: "am.svg", opciones: ["ARMENIA", "OMAN", "SINGAPORE"], respuestaCorrecta: 0 },
    { bandera: "hr.svg", opciones: ["LITHUANIA", "NAMIBIA", "CROATIA"], respuestaCorrecta: 2 },
    { bandera: "eg.svg", opciones: ["IRAQ", "EGYPT", "SINGAPORE"], respuestaCorrecta: 1 },
    { bandera: "gt.svg", opciones: ["HONDURAS", "EL SALVADOR", "GUATEMALA"], respuestaCorrecta: 2 },
    { bandera: "id.svg", opciones: ["MONACO", "SINGAPORE", "INDONESIA"], respuestaCorrecta: 2 },
    { bandera: "it.svg", opciones: ["ITALY", "MALTA", "MEXICO"], respuestaCorrecta: 0 },
    { bandera: "lr.svg", opciones: ["IVORY COAST", "LIBERIA", "MALTA"], respuestaCorrecta: 1 },
    { bandera: "lt.svg", opciones: ["LITHUANIA", "LATVIA", "NORWAY"], respuestaCorrecta: 0 },
    { bandera: "ma.svg", opciones: ["TUNISIA", "ALGERIA", "MOROCCO"], respuestaCorrecta: 2 },
    { bandera: "mx.svg", opciones: ["MEXICO", "SLOVAKIA", "ITALY"], respuestaCorrecta: 0 },
    { bandera: "md.svg", opciones: ["ROMANIA", "MOLDOVA", "BULGARIA"], respuestaCorrecta: 1 },
    { bandera: "mc.svg", opciones: ["POLAND", "INDONESIA", "MONACO"], respuestaCorrecta: 2 },
    { bandera: "nz.svg", opciones: ["AUSTRIA", "FIJI", "NEW ZEALAND"], respuestaCorrecta: 2 },
    { bandera: "sm.svg", opciones: ["SAN MARINO", "ARMENIA", "SINGAPORE"], respuestaCorrecta: 0 },
    { bandera: "sy.svg", opciones: ["LEBANON", "SERBIA", "SYRIA"], respuestaCorrecta: 2 },
    { bandera: "za.svg", opciones: ["ZIMBABWE", "SOUTH AFRICA", "NAMIBIA"], respuestaCorrecta: 1 },
    { bandera: "sd.svg", opciones: ["ETHIOPIA", "SUDAN", "ERITREA"], respuestaCorrecta: 1 },
    { bandera: "tn.svg", opciones: ["MOROCCO", "TUNISIA", "ALGERIA"], respuestaCorrecta: 1 },
    { bandera: "vu.svg", opciones: ["VANUATU", "TONGA", "KIRIBATI"], respuestaCorrecta: 0 },
    { bandera: "pw.svg", opciones: ["MICRONESIA", "NAURU", "PALAU"], respuestaCorrecta: 2 }
];

// Variable para el índice actual del juego
let posActual = 0;
// Variable para contar la cantidad de aciertos
let cantidadAcertadas = 0;
// Variable para almacenar los juegos aleatorios seleccionados
let juegosAleatorios = [];

function comenzarJuego() {
    // Reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    juegosAleatorios = [];

    // Seleccionamos aleatoriamente 10 juegos del arreglo 'juegos'
    let indices = [];

    while (indices.length < 10) {
        let randomIndex = Math.floor(Math.random() * juegos.length);
        if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
            juegosAleatorios.push(juegos[randomIndex]);
        }
    }

    // Activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();
}

function cargarBandera() {
    // Controlamos si se acabaron los juegos
    if (juegosAleatorios.length <= posActual) {
        terminarJuego();
    } else { // Cargamos las opciones
        // Limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/" + juegosAleatorios[posActual].bandera;
        document.getElementById("n0").innerHTML = juegosAleatorios[posActual].opciones[0];
        document.getElementById("n1").innerHTML = juegosAleatorios[posActual].opciones[1];
        document.getElementById("n2").innerHTML = juegosAleatorios[posActual].opciones[2];
    }
}

function limpiarOpciones() {
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida) {
    if (opElegida == juegosAleatorios[posActual].respuestaCorrecta) { // Acertó
        // Agregamos las clases para colocar el color verde a la opción elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else { // No acertó
        // Agregamos las clases para colocar en rojo la opción elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        // Opción que era correcta
        document.getElementById("n" + juegosAleatorios[posActual].respuestaCorrecta).className = "nombre nombreAcertada";
        document.getElementById("l" + juegosAleatorios[posActual].respuestaCorrecta).className = "letra letraAcertada";
    }
    posActual++;
    // Esperamos 1 segundo y pasamos a mostrar la siguiente bandera y sus opciones
    setTimeout(cargarBandera, 1000);
}

function terminarJuego() {
    // Ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    // Agregamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = juegosAleatorios.length - cantidadAcertadas;
}

function volverAlInicio() {
    // Ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}
