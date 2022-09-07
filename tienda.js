let agregandoProductos = 1;
const productos = [
    { id: 1, nombre: "esmaltes", precio: 150 },
    { id: 2, nombre: "alicate", precio: 70 },
    { id: 3, nombre: "resina", precio: 100 },
    { id: 4, nombre: "pincel", precio: 60 },
];
let carrito = [];
let productoSeleccionado;
let cantidadProductoSeleccionado;
let seleccion;
let totalEnCarrito = 0;

while (agregandoProductos === 1) {
    while ((seleccion != "si") & (seleccion != "no")) {
        seleccion = prompt("¿Desea agregar algun producto al carro? si o no");
        if ((seleccion != "si") & (seleccion != "no")) {
            alert("Por favor ingtesa si o no");
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
            "A continuación nuestra lista de productos\n" +
                todoslosProductos.join(" \n")
        );
        // VALIDAR QUE EL PRODUCTO EXISTA
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

// MOSTRAR RESULTADO
let todoslosProductosEnCarrito = carrito.map(
    (producto) =>
        producto.cantidad + " " + producto.nombre + " " + "$" + producto.total
);
alert(
    todoslosProductosEnCarrito.join(" \n") +
        "\nTotal a pagar: $" +
        totalEnCarrito
);

