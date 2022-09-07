const productos = [
{id:1, nombre: "esmaltes", precio: 150},
{id:2, nombre: "alicate", precio: 70},
{id:3, nombre: "resina", precio: 100},
{id:4, nombre: "pincel", precio: 60},
];
let carrito = []

let seleccion = prompt ("Hola! ¿Desea comprar algun producto? Si o No")

while(seleccion != "si" & seleccion != "no"){
    alert("Por favor ingtesa si o no")
}

if (seleccion == "si"){
    alert("A continuación nuestra lista de productos")
    let todoslosProductos = productos.map(
        (producto) => "(" + producto.id + ") " +  producto.nombre + " " + "$" + producto.precio 
        );
    alert (todoslosProductos.join(" \n "))
} else if (seleccion == "no"){
    alert ("Gracias por venir!")
}


