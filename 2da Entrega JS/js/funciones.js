const listaProductos = () => {
    let lista = ""
    for (const producto of productos) {
        lista += producto.prenda + " $" + producto.precio + "\n"
        
    }

    return lista

}

const existeProducto = prenda => productos.find(producto => prenda == producto.prenda)
    




