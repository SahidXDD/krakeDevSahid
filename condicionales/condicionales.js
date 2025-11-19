calcularTasaInteres=function(ingresoAnual) {
    ingresoAnual=parseFloat(ingresoAnual);
    let tasa;

    if (ingresoAnual<300000) {
        tasa = 16;
    } else if (ingresoAnual>=300000 && ingresoAnual<500000) {
        tasa = 15;
    } else if (ingresoAnual>=500000 && ingresoAnual<1000000) {
        tasa = 14;
    } else if (ingresoAnual>=1000000 && ingresoAnual<2000000) {
        tasa = 13;
    } else if ( ingresoAnual>=2000000) {
        tasa = 12;
    } 

    return tasa;
}


calcularCapacidadPago=function(edad,ingresos, egresos){
    edad=parseInt(edad)
    ingresos=parseFloat(ingresos);
    egresos=parseFloat(egresos);
    let resultado= ingresos-egresos;
    let capacidad;
    if (edad>50){
        capacidad = resultado*0.30;
        
    }else {
        capacidad  = resultado*0.40;
    }

    return capacidad;
}

calcularDescuento=function(precio, cantidad){
    let descuento=0
    let total = precio * cantidad;
    let totalConDescuento = total - (total * descuento);
    if(cantidad>3){
        descuento
    } else if (cantidad >= 3 && cantidad <= 5) {

        descuento = 0.02; 

    } else if (cantidad >= 6 && cantidad <= 11) {

        descuento = 0.03; 
    } else if (cantidad >= 12) {

        descuento = 0.04; 
    }

    

    return totalConDescuento;
}

determinarColesterolLDL= function (nivelColesterol) {
    if (nivelColesterol < 100) {
        return "Óptimo";
    } else if (nivelColesterol >= 100 && nivelColesterol <= 129) {
        return "Cerca de óptimo / por encima del óptimo";
    } else if (nivelColesterol >= 130 && nivelColesterol <= 159) {
        return "Límite alto";
    } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {
        return "Alto";
    } else if (nivelColesterol >= 190) {
        return "Muy alto";
    } else {
        return "Valor no válido";
    }
}

 validarClave= function(clave) {

  if (clave.length >= 8 && clave.length <= 16){
    return true;
}else {
    return false;
}



 }

esMayuscula= function(caracter) {
let codigoLetra=caracter.charCodeAt(0);
  if ( codigoLetra >= 65 && codigoLetra <= 90){
    return true;
  }else{
    return false;
  }
}

esMinuscula= function(caracter) {
let codigoLetra=caracter.charCodeAt(0);
  if ( codigoLetra >= 97 && codigoLetra <= 122 || codigoLetra==130 &&
     codigoLetra >= 160 && codigoLetra <= 163){
    return true;
  }else{
    return false;
  }
}

esDigito= function(digito) {
let codigoDigito=digito.charCodeAt(0);
  if ( codigoDigito >= 48 && codigoDigito <= 57){
    return true;
  }else{
    return false;
  }
}

 darPermiso= function(notaMatematica, notaFisica, notaGeometria) {
 if (notaMatematica > 90.0 || notaFisica > 90.0 || notaGeometria > 90.0){
    return true;
 }else{
    return false;
 }
}

otorgarPermiso= function(notaMatematica, notaFisica, notaGeometria) {
 if (notaMatematica > 90.0 || notaFisica > 90.0 && notaGeometria > 80.0){
    return true;
 }else{
    return false;
 }
}


darPermiso= function(notaMatematica, notaFisica, notaGeometria) {
 if (notaMatematica > 90.0 || notaFisica > 90.0 || notaGeometria > 90.0 && notaFisica>notaMatematica){
    return true;
 }else{
    return false;
 }
}
_