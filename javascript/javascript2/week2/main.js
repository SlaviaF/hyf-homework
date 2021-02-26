const products = getAvailableProducts();
console.log(products);

let body = document.querySelector('body');;
let unorderedLi = document.createElement('ul');
let productList;
let names;
let prices;
let ratings;
let productDisplayList = document.querySelector(".productDisplayList");
let btn;
let breakLine;
let memberPrice;

function renderProducts(products) {

    products.forEach(element => {
        productList = document.createElement('li');
        names = document.createElement('h1');
        prices = document.createElement('p');
        ratings = document.createElement('p');
        memberPrice = document.createElement('p')
        /*btn = document.createElement('button')
        btn.innerHTML = "Add to Cart"
        btn.setAttribute("id", "addToCart")*/



        names.innerHTML = element.name;
        prices.innerHTML = `Price : ${element.price}`;
        ratings.innerHTML = `Rating : ${element.rating}`;
        memberPrice.innerHTML = `Member Price: ${Math.round(element.price * 95 / 100)}`

        productList.appendChild(names).style.color = "#800000";
        productList.appendChild(prices).style.paddingTop = "5px";
        productList.appendChild(ratings);
        productList.appendChild(memberPrice).style.paddingBottom = '5px';
        //productList.appendChild(btn).style.marginBottom = "10px";


        unorderedLi.appendChild(productList);

    });

    productDisplayList.appendChild(unorderedLi);
}
renderProducts(products);
console.log(productList);
console.log(unorderedLi);
console.log(productDisplayList);



searchInput.addEventListener('click', function () {
    this.style.background = "lightgrey";

});



searchInput.addEventListener('input', searchProducts);
function searchProducts() {

    productDisplayUl = document.getElementsByClassName('productDisplayList');
    value = searchInput.value.toUpperCase();
    let getProducts = products.filter(product => product.name.toUpperCase().includes(value));
    console.log(getProducts);
    unorderedLi.innerHTML = "";
    renderProducts(getProducts);

}


maxPrice.addEventListener('input', getProductsWithinMaxPrice);

function getProductsWithinMaxPrice() {
    priceInput = document.getElementById("maxPrice");
    priceInputValue = priceInput.value;
    let getMaxPrice = products.filter(product => product.price < priceInputValue)
    unorderedLi.innerHTML = "";
    renderProducts(getMaxPrice);
}
console.log(products);


