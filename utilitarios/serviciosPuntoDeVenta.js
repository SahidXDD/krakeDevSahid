calcularValorDescuento = function(precio,cantidad,porcentajeDescuento){
    let descuento=(precio*cantidad)*(porcentajeDescuento)/100;
    return descuento;
}

calcularIva=function(subtotal,descuento){
    let valorIva=(subtotal-descuento)*0.12
    return valorIva;
}

calcularSubtotal= function(precio, cantidad){
    let subtotal=(precio*cantidad);
    return subtotal;
}

calcularTotal=function(subtotal,descuento,valorIva){
    let valorTotal=(subtotal-descuento)+valorIva;
    return valorTotal;
}