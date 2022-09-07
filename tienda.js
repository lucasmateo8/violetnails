let agregandoProductos = 1;
const productos = [
    { id: 1, nombre: "Esmaltes", precio: 150 },
    { id: 2, nombre: "Alicate", precio: 70 },
    { id: 3, nombre: "Resina", precio: 100 },
    { id: 4, nombre: "Pincel", precio: 60 },
];
let carrito = [];
let productoSeleccionado ;
let cantidadProductoSeleccionado;
let seleccion;
let totalEnCarrito = 0;

while (agregandoProductos === 1) {
    while ((seleccion != "si") & (seleccion != "no")) {
        seleccion = prompt("¿Desea agregar algún producto al carro? Escriba si o no");
        if ((seleccion != "si") & (seleccion != "no")) {
            alert("Por favor ingresa si o no");
        }
    }

    if (seleccion == "si") {
        let todoslosProductos = productos.map(
            (producto) =>
                "(" +
                producto.id +
                ") " +
                producto.nombre +
                " " +
                "$" +
                producto.precio
        );
        productoSeleccionado = prompt(
            "A continuación nuestra lista de precios - Elija el número de producto \n" +
                todoslosProductos.join(" \n")  ); 
         if (productoSeleccionado > 4 ) {
            alert("El producto seleccionado no es correcto");
        }
        
        if (productoSeleccionado)
            cantidadProductoSeleccionado = prompt(
                "Ingresar cantidad de " +
                    productos[productoSeleccionado - 1].nombre
            );
        totalEnCarrito +=
            productos[productoSeleccionado - 1].precio *
            cantidadProductoSeleccionado;
        carrito.push({
            nombre: productos[productoSeleccionado - 1].nombre,
            cantidad: cantidadProductoSeleccionado,
            total:
                productos[productoSeleccionado - 1].precio *
                cantidadProductoSeleccionado,
        });
    }
    if (seleccion == "no") {
        agregandoProductos = 0;
    }
    seleccion = "";
}

let todoslosProductosEnCarrito = carrito.map(
    (producto) =>
        producto.cantidad + " Unidades de " + producto.nombre + ": " + "$" + producto.total
);
alert(
    todoslosProductosEnCarrito.join(" \n") +
        "\nTotal a pagar: $" +
        totalEnCarrito
);

