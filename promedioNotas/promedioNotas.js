calcularPromedioNotas = function(){
    let numero1=recuperarFlotante("txt1")
    let numero2=recuperarFlotante("txt2")
    let numero3=recuperarFlotante("txt3")
    let promedio=calcularPromedio(numero1, numero2, numero3)
    let promedioRedondeado=promedio.toFixed(2);
    cambiarTexto("lblResultado",promedioRedondeado)
   
     if(promedioRedondeado>0 && promedioRedondeado<5){
        cambiarTexto("lblNotas","REPROBADO XD")
        cambiarImagen("imgOK","fracaso.jpg");

    }else if(promedioRedondeado>=5 && promedioRedondeado<=8){
        cambiarTexto("lblNotas","BUEN TRABAJO");
        cambiarImagen("imgOK", "bien.jpg");
    
    }else if(promedioRedondeado>8 && promedioRedondeado<=10){
        cambiarTexto("lblNotas","EXCELENTE TRABAJO");
        cambiarImagen("imgOK", "excel.jpg");
    }else{
        cambiarTexto("lblNotas","DATOS INCORRECTOS");
        cambiarImagen("imgOK", "error.jpg");
    } 

}