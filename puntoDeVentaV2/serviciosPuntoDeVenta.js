

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

 calcularDescuentoPorVolumen = function(subtotal, cantidad) {
    let descuento = 0;

    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = subtotal * 0.03;
    } else if (cantidad >= 6 && cantidad <= 10) {
        descuento = subtotal * 0.04;
    } else if (cantidad > 10) {
        descuento = subtotal * 0.05;
    }

    return descuento;
}