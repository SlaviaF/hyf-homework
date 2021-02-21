console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

let body = document.querySelector('body');;
let unorderedLi = document.createElement('ul');
let productList;
let title;
let pices;
let ratings;







function renderProducts(products) {


    products.forEach(element => {
        productList = document.createElement('li');
        title = document.createElement('h1');
        prices = document.createElement('p');
        ratings = document.createElement('p');

        title.innerHTML = element.name;
        prices.innerHTML = `Price : ${element.price}`;
        ratings.innerHTML = `Rating : ${element.rating}`;

        productList.appendChild(title);
        productList.appendChild(prices);
        productList.appendChild(ratings);


        unorderedLi.appendChild(productList);

    });

    body.appendChild(unorderedLi);
}
renderProducts(products);
