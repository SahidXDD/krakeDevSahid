 esProductoValido=function(producto) {
    if (producto == "") {
        alert("CAMPO OBLIGATORIO");
        return false;
    }
    if (producto.length > 10) {
        alert("El nombre no puede tener más de 10 caracteres");
        return false;
    }
    return true;
}

 esCantidadValida=function(cantidad) {
    if (cantidad == "") {
        alert("CAMPO OBLIGATORIO");
        return false;
    }
    cantidad = Number(cantidad);

    if (isNaN(cantidad) || cantidad < 1 || cantidad > 100) {
        alert("La cantidad debe ser entre 1 y 100");
        return false;
    }
    return true;
}

esPrecioValido=function(precio) {
    if (precio == "") {
        alert("CAMPO OBLIGATORIO");
        return false;
    }
    precio = Number(precio);

    if (isNaN(precio) || precio < 0.5 || precio > 50) {
        alert("El precio debe ser entre 0.5 y 50");
        return false;
    }
    return true;
}

function calcular() {
    let producto = recuperarTexto("txtProducto");
    let cantidad = recuperarInt("txtCantidad");
    let precio = recuperarFloat("txtPrecio");

    if (!esProductoValido(producto)) return;
    if (!esCantidadValida(cantidad)) return;
    if (!esPrecioValido(precio)) return;

    let subtotal = calcularSubtotal(precio, cantidad);
    mostrarTexto("lblSubtotal", subtotal);

    let descuento = calcularDescuentoPorVolumen(subtotal, cantidad);
    mostrarTexto("lblDescuento", descuento);

    let iva = calcularIva(subtotal, descuento);
    mostrarTexto("lblValorIVA", iva);

    let total = calcularTotal(subtotal, descuento, iva);
    mostrarTexto("lblTotal", total);
}

function limpiar() {
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTextoEnCaja("txtPrecio", "");

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
}
