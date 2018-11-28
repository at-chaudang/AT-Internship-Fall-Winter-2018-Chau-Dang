let total = document.getElementById('total-items');
let productIds = sessionStorage.getItem('productIds') ? JSON.parse(sessionStorage.getItem('productIds')) : [];
let listCart = [];
let btnRemove = document.getElementsByClassName('ic-remove');
let tableBody = document.getElementById('listCart');
let child;
let sum = 0;
let tableTemp = [];

total.innerHTML = productIds.length;

function renderView() {
  getTableTemp();
  document.getElementById('listCart').innerHTML = showListProducts();
  total.innerHTML = productIds.length;
  removeCart();
}

function showListProducts() {
  sum = 0;
  listCart.length = 0;
  for (let i = 0; i < tableTemp.length; i++) {
    listCart[i] = '<tr data-id="' + tableTemp[i].idP + '"><td class="product-td">' +
    '<a><img class="product-image" src="' + tableTemp[i].image + '"></a>' +
    '<div class="float-right"><h3 class="product-name">' + tableTemp[i].nameP + '</h3>' +
    '<p class="product-description">' + tableTemp[i].description + '</p></div></td>' +
    '<td><span>' + 1 + '</span></td>' +
    '<td><span>$' + tableTemp[i].price + '</span></td>' +
    '<td><a><img src="images/ic_remove.png" class="ic-remove"></a></td></tr>';
    sum += tableTemp[i].price;
  }
  return listCart.join('') + '<tr><td><b>Total: </b></td><td colspan="3"><span id="total">$' + sum + '</span></td></tr>';
}

function getTableTemp() {
  tableTemp.length = 0;
  for (let i = 0; i < db_products.length; i++) {
    for (let j = 0; j < productIds.length; j++) {
      if (+db_products[i].idP === +productIds[j]) {
        tableTemp.push(db_products[i]);
      }
    }
  }
  console.log(tableTemp);
  // tableTemp = productIds.map(u => db_products.filter(v => v.idP === u));
};

function removeCart() {
  for (let i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener('click', function() {
      if (confirm("Remove out Cart!")) {
        // child = document.getElementById('product-' + i);
        // check again data ? ko check lai van ok ma? thoi thi khoi check
        productIds = sessionStorage.getItem('productIds') ? JSON.parse(sessionStorage.getItem('productIds')) : [];
        child = this.parentElement.parentElement.parentElement;
        console.log(child);
        tableBody.removeChild(child);
        var idP = +child.getAttribute('data-id');
        productIds = productIds.filter(function(value){
          return idP !== +value ;
        });
        // productIds.splice(i, 1);
        console.log(productIds);
        sessionStorage.setItem('productIds', JSON.stringify(productIds));       
        renderView();
      };
    });
  }
};

renderView();
