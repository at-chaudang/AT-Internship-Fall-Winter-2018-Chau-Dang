let total = document.getElementById('total-items');
let listP = [];
let productIds = sessionStorage.getItem('productIds') ? JSON.parse(sessionStorage.getItem('productIds')) : [];
let btnAddCart = document.getElementsByClassName('add-to-cart');
function showListProducts() {
  for (let i = 0; i < db_products.length; i++) {
    listP[i] = '<li class="products-item" data-id="' + db_products[i].idP + '">'
    + '<img class="product-image" src="' + db_products[i].image + '">'
    + '<h3 class="product-name">' + db_products[i].nameP + '</h3>'
    + '<p class="product-description">' + db_products[i].description + '</p>'
    + '<p class="product-price">$' + db_products[i].price + '</p>'
    + '<button class="add-to-cart">Add to Cart</button></li>';
  }
  return listP.join('');
}

document.getElementById('listProduct').innerHTML = showListProducts();

(function addToCart() {
  for (let i = 0; i < btnAddCart.length; i++) {
    btnAddCart[i].addEventListener('click', function() {
      this.disabled = true;
      this.innerHTML = "Added to Cart!";
      productIds.push(+this.parentElement.getAttribute('data-id'));
      sessionStorage.setItem('productIds', JSON.stringify(productIds));
      total.innerHTML = productIds.length;
    });
  }
})();

window.onload = function() {
  let productItem = document.getElementsByClassName('products-item');
  if (productIds) {
    total.innerHTML = productIds.length;
    for (let i = 0; i < productItem.length; i++){
      for (let j = 0; j < productIds.length; j++) {
        if (+productItem[i].getAttribute('data-id') === +productIds[j]) {
          btnAddCart[i].disabled = true;
          btnAddCart[i].innerHTML = "Added to Cart!";
        }
      }
    }
  }
}
