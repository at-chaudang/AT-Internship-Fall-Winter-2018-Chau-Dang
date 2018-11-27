let total = document.getElementById('total-items');
let productIds = sessionStorage.getItem('productIds') ? JSON.parse(sessionStorage.getItem('productIds')) : [];
let listCart = [];
let btnRemove = document.getElementsByClassName('ic-remove');
let tableBody = document.getElementById('listCart');
let child;
let sum = 0;
total.innerHTML = productIds.length;
function showListProducts() {
  for (let i = 0; i < productIds.length; i++) {
    listCart[i] = '<tr data-id="' + productIds[i] + '" id="product-' + i + '"><td class="product-td">' +
    '<a><img class="product-image" src="' + db_products[productIds[i]].image + '"></a>' +
    '<div class="float-right"><h3 class="product-name">' + db_products[productIds[i]].nameP + '</h3>' +
    '<p class="product-description">' + db_products[productIds[i]].description + '</p></div></td>' +
    '<td><span>' + 1 + '</span></td>' +
    '<td><span>$' + db_products[productIds[i]].price + '</span></td>' +
    '<td><a><img src="images/ic_remove.png" class="ic-remove"></a></td></tr>';
    sum += db_products[productIds[i]].price;
  }
  return listCart.join('') + '<tr><td><b>Total: </b></td><td colspan="3"><span id="total">$' + sum + '</span></td></tr>';
}

document.getElementById('listCart').innerHTML = showListProducts();

(function removeCart() {
  for (let i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener('click', function(r) {
      if (confirm("Remove out Cart!")) {
        child = document.getElementById('product-' + i);
        tableBody.removeChild(child);
        sum -= +db_products[productIds[i]].price;
        document.getElementById('total').innerHTML = sum;
        productIds.splice(i, 1);
        sessionStorage.setItem('productIds', JSON.stringify(productIds));       
        total.innerHTML = productIds.length;
      };
    });
  }
})();
