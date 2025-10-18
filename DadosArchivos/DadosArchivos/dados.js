 jugar = function(){
 let aleatorio=lanzarDado();
cambiarTexto("lblNumero", aleatorio);
    if(aleatorio>3){
        cambiarTexto("txtGanador","Es mayor a 3, Ganaste!");

    }else{
         cambiarTexto("txtPerdedor","Es menor a 3, Perdiste!");
    }
 }
 
 lanzarDado= function(){
    let aleatorio
    let numeroMultiplicado 
    let numeroEntero
    let valorDado
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*6
    numeroEntero=parseInt(numeroMultiplicado);
    valorDado=numeroEntero+1;
    return valorDado;
    
}
limpiar = function(){
    cambiarTexto("txtGanador","")
    cambiarTexto("txtPerdedor","")
    cambiarTexto("lblNumero","")
}