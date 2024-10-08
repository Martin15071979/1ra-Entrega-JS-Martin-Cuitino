const productos = [
    new Producto("Camiseta", 2200,), 
    new Producto("Short", 1600,),
    new Producto("Equipo Completo", 3500,),
    new Producto("Remera", 2200,),
    new Producto("Short Chico", 1600,),
    new Producto("Campera", 3500,),
     
]



let productoAComprar = prompt (listaProductos() + "Ingresar articulo");
//alert ("el precio del articulo ingresado es" + productoAComprar)

 let total=0;

 let productoSolicitado

while ((productoAComprar != null) && (productoAComprar != "")) {

    productoSolicitado = existeProducto(productoAComprar)

    if (productoSolicitado) {
        total += productoSolicitado.precio
        console.log('El valor de ' + productoSolicitado.prenda + " es: $" + productoSolicitado.precio);
        
    }

    
    productoAComprar = prompt (listaProductos() + "Ingresar articulo");

}

console.log('el total es: ' + total);

