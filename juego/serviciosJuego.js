function obtenerAleatorio() {
    return Math.floor(Math.random() * 3) + 1;
}

function generarElemento() {
    let aleatorio = obtenerAleatorio();
    if (aleatorio === 1) return "piedra";
    if (aleatorio === 2) return "papel";
    return "tijera";
}

function determinarGanador(eleccionJugador, eleccionComputador) {
    if (eleccionJugador === eleccionComputador) return 0;
    if (
        (eleccionJugador === "piedra" && eleccionComputador === "tijera") ||
        (eleccionJugador === "papel" && eleccionComputador === "piedra") ||
        (eleccionJugador === "tijera" && eleccionComputador === "papel")
    ) return 1;
    return 2;
}

function generarRuta(nombre) {
    return "imagenes/" + nombre + ".png";
}