
saludar=function(){
    let nombre;
    nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    console.log("Hola" + nombre + apellido);
}


recuperarTexto= function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente)
    valorIngresado=componente.value;
    return valorIngresado;
}