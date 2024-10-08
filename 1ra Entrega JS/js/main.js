let productoAComprar = prompt ("Ingresar articulo");
//alert ("el precio del articulo ingresado es" + productoAComprar)

let precioCamiseta = 2200
let precioShort = 1600
let precioEquipoCompleto = 3500
let precioRemera = 2200
let precioShorChicos = 1600
let precioCampera = 3500
let total=0;

if(productoAComprar=='Camiseta'){
    total=total+precioCamiseta;
    console.log('El valor de la prenda es: $'+ precioCamiseta);
    productoAComprar = prompt ("Ingresar articulo");
}
if(productoAComprar=='Short'){
    total=total+precioShort;
    console.log('El valor de la prenda es: $'+precioShort);
    productoAComprar = prompt ("Ingresar articulo");
}
if(productoAComprar=='Equipo completo'){
    total=total+precioEquipoCompleto;
    console.log('El valor de la prenda es: $'+precioEquipoCompleto);
    productoAComprar = prompt ("Ingresar articulo");
}
if(productoAComprar=='Remera'){
    total=total+precioRemera;
    console.log('El valor de la prenda es: $'+precioRemera);
    productoAComprar = prompt ("Ingresar articulo");
}
if(productoAComprar=='Short chicos'){
    total=total+precioShortChicos;
    console.log('El valor de la prenda es: $'+precioShorChicos);
    productoAComprar = prompt ("Ingresar articulo");
}
if(productoAComprar=='Campera'){
    total=total+precioCampera;
    console.log('El valor de la prenda es: $'+precioCampera);
    productoAComprar = prompt ("Ingresar articulo");
}

console.log('el total es: ' + total)