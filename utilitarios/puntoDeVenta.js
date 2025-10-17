calcularValorTotal = function (){
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto = recuperarTexto("txtProducto");
    let precioProducto=recuperarFloat("txtPrecio");
    // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad=recuperarInt("txtCantidad");
    // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");

    //variables para almacenar los retornos de las funciones
   

    let valorSubtotal=calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal);
    let valorDescuento=calcularValorDescuento(precioProducto,cantidad, porcentajeDescuento);
    mostrarTexto("lblDescuento", valorDescuento);
    let valorIVA=calcularIva(valorSubtotal,valorDescuento);
    mostrarTexto("lblValorIVA",valorIVA);
    let valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    mostrarTexto("lblTotal", valorTotal);



      let resultado="Valor a pagar por "+cantidad+ " " +nombreProducto+ " con "+valorDescuento+ " % "+ ": USD "+valorTotal
      mostrarTexto("lblResultado", resultado);

}

limpiar = function () {
    
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtPrecio","");
    mostrarTextoEnCaja("txtCantidad","");
    mostrarTextoEnCaja("txtPorcentajeDescuento","");

    


    mostrarTexto("lblResultado", "0.0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblTotal", "0.0");

}
/* SI TODO FUNCIONA, HACER UN PUSH */