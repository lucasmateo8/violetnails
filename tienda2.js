const botonesAgregarAlCarrito = document.querySelectorAll(".addToCart");
botonesAgregarAlCarrito.forEach((addToCartButton) => {
    addToCartButton.addEventListener("click", addToCartClicked);
});

const comprarButton = document.querySelector(".comprarButton");
comprarButton.addEventListener("click", comprarButtonClicked);

const cerrarButton = document.querySelector(".cerrarButton");
cerrarButton.addEventListener("click", cerrarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
    ".shoppingCartItemsContainer"
);

let carrito = [];
//apagado de momento
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        let carrito2 = document.getElementById("carrito");
        carrito2.removeAttribute("hidden");
        getElementsFromLocalStorage(carrito);
    }
});

function getElementsFromLocalStorage(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        addItemToShoppingCart(
            carrito[i].nombreProducto,
            carrito[i].precioProducto,
            carrito[i].itemImage
        );
    }
}

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest(".item");
    let carrito2 = document.getElementById("carrito");
    carrito2.removeAttribute("hidden");
    button.addEventListener('click', () =>{
        Toastify({
            text: "Producto Agregado",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
    })
    

    const nombreProducto = item.querySelector(".item-title").textContent;
    const precioProducto = item.querySelector(".item-price").textContent;
    const itemImage = item.querySelector(".item-image").src;

    carrito.push({
        nombreProducto: nombreProducto,
        precioProducto: precioProducto,
        itemImage: itemImage,
    });

    addItemToShoppingCart(nombreProducto, precioProducto, itemImage);
}

function addItemToShoppingCart(nombreProducto, itemPrice, itemImage) {
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
        "shoppingCartItemTitle"
    );
    for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === nombreProducto) {
            let elementQuantity = elementsTitle[
                i
            ].parentElement.parentElement.parentElement.querySelector(
                ".shoppingCartItemQuantity"
            );
            elementQuantity.value++;
            $(".toast").toast("show");
            updateShoppingCartTotal();
            return;
        }
    }

    const shoppingCartRow = document.createElement("div");
    const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${nombreProducto}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow
        .querySelector(".buttonDelete")
        .addEventListener("click", removeShoppingCartItem);
        

    shoppingCartRow
        .querySelector(".shoppingCartItemQuantity")
        .addEventListener("change", quantityChanged);

    updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
    let total = 0;

    const shoppingCartTotal = document.querySelector(".shoppingCartTotal");

    const shoppingCartItems = document.querySelectorAll(".shoppingCartItem");

    shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
            ".shoppingCartItemPrice"
        );
        const shoppingCartItemPrice = Number(
            shoppingCartItemPriceElement.textContent.replace("$", "")
        );
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
            ".shoppingCartItemQuantity"
        );
        const shoppingCartItemQuantity = Number(
            shoppingCartItemQuantityElement.value
        );
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;

    localStorage.setItem("carrito", JSON.stringify(carrito));
    if (total === 0) {
        cerrarButtonClicked();
    }
}

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest(".shoppingCartItem").remove();
    updateShoppingCartTotal();
 
}

function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();
}

function comprarButtonClicked() {
    shoppingCartItemsContainer.innerHTML = "";
    updateShoppingCartTotal();
}

function cerrarButtonClicked() {
    let carrito = document.getElementById("carrito");
    let cerrarButton = document.querySelector('.cerrarButton');
    cerrarButton.addEventListener ('click', () => {
        carrito.setAttribute("hidden", "hidden");  
    });
   

    let arrayCarrito = [] 
    localStorage.setItem("carrito", JSON.stringify(arrayCarrito));

}
