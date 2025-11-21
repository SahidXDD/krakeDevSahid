let puntosUsuario = 0;
let puntosComputador = 0;

function jugar(seleccionado) {
    let eleccionComputador = generarElemento();
    mostrarImagen("imgComputador", generarRuta(eleccionComputador));
    mostrarImagen("imgJugador", generarRuta(seleccionado));

    let resultado = determinarGanador(seleccionado, eleccionComputador);

    if (resultado === 0) {
        mostrarTexto("mensaje", "EMPATE");
    } else if (resultado === 1) {
        mostrarTexto("mensaje", "¡GANASTE LA PARTIDA!");
        puntosUsuario++;
    } else {
        mostrarTexto("mensaje", "PERDISTE LA PARTIDA");
        puntosComputador++;
    }

    mostrarTexto("puntajeJugador", puntosUsuario);
    mostrarTexto("puntajeComputador", puntosComputador);

    if (puntosUsuario === 5) mostrarTexto("mensajeFinal", "🎉 ¡HAS GANADO EL JUEGO! 🎉");
    if (puntosComputador === 5) mostrarTexto("mensajeFinal", "💀 EL COMPUTADOR TE HA VENCIDO 💀");
}

function limpiar() {
    puntosUsuario = 0;
    puntosComputador = 0;
    mostrarTexto("puntajeJugador", "0");
    mostrarTexto("puntajeComputador", "0");
    mostrarTexto("mensaje", "");
    mostrarTexto("mensajeFinal", "");
    mostrarImagen("imgJugador", "imagenes/piedra.png");
    mostrarImagen("imgComputador", "imagenes/piedra.png");
}