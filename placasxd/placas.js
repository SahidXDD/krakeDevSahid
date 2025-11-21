validarPlaca=function(){
 let p=recuperarTexto("txtPlaca");
 mostrarTexto("lblEstructura","");
 mostrarTexto("lblErrores","");
 mostrarTexto("lblProvincia","");
 mostrarTexto("lblTipo","");
 mostrarTexto("lblPico","");

 let r=validarEstructura(p);
 if(r==null){
   mostrarTexto("lblEstructura","ESTRUCTURA VALIDA");
   let prov=obtenerProvincia(p);
   mostrarTexto("lblProvincia","Provincia: "+(prov?prov:"No válida"));
   mostrarTexto("lblTipo","Tipo de vehiculo: "+obtenerTipoVehiculo(p));
   let dia=obtenerDiaPicoYPlaca(p);
   mostrarTexto("lblPico","Pico y placa: "+(dia?dia:"No aplica"));
 }else{
   mostrarTexto("lblEstructura","ESTRUCTURA INCORRECTA");
   mostrarTexto("lblErrores",r);
 }
}

limpiar=function(){
 mostrarTextoEnCaja("txtPlaca","");
 mostrarTexto("lblEstructura","");
 mostrarTexto("lblErrores","");
 mostrarTexto("lblProvincia","");
 mostrarTexto("lblTipo","");
 mostrarTexto("lblPico","");
}