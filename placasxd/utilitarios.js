recuperarTexto= function(idComponente){
    let componente=document.getElementById(idComponente)
    return componente.value;
}
recuperarInt = function(idComponente){
    return parseInt(recuperarTexto(idComponente));
}
recuperarFloat = function(idComponente){
    return parseFloat(recuperarTexto(idComponente));
}
mostrarTexto = function (idComponente, mensaje) {
    document.getElementById(idComponente).innerText = mensaje;
}
mostrarImagen = function (idComponente, rutaImagen) {
    document.getElementById(idComponente).src = rutaImagen;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    document.getElementById(idComponente).value = mensaje;
}