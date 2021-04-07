const searchItem = document.getElementById("searchItem");
const productList = document.getElementById("productList");
const ulList = document.createElement("ul");
const total = document.createElement('p')
const currency = document.getElementById('currency')
let currencyValue;
let totalProductPrices;


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(currency) {
        if (currency == 'USD') {
            return Math.floor(this.price * 0.159045)
        }

        else if (currency == 'EUR') {
            return Math.floor(this.price * 0.134476)

        }
        else if (currency == 'DKK') {
            return this.price

        }
    }

}

class ShoppingCart {
    constructor() {
        this.products = [];
        this.searchValue = "";
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        this.products.splice(this.products.indexOf(product), 1)
    }

    searchProduct(productName) {
        const findProduct = this.products.filter(product => {

            return product.name.toUpperCase().includes(productName.toUpperCase())
        })
        return findProduct;

    }
    getTotal(totalProducts) {

        totalProductPrices = totalProducts.map(product => product.convertToCurrency(currencyValue)).reduce((total, price) => total + price, 0)
        console.log(currencyValue);
        console.log(totalProductPrices);
        total.setAttribute("class", "total")
        total.innerHTML = `<span class="pro_name">Total</span> <span class="price">${totalProductPrices}</span>`
        productList.insertAdjacentElement('afterEnd', total)

    }

    renderProducts() {
        currencyValue = currency.options[currency.selectedIndex].text;

        ulList.innerHTML = "";
        if (this.searchValue == "") {
            this.products.forEach(product => {
                console.log(`render products ${currencyValue}`);
                const productLi = document.createElement('li');
                productLi.innerHTML = `<span class="pro_name">${product.name}</span> <span class="price">${product.convertToCurrency(currencyValue)}</span>`
                ulList.setAttribute("class", "productUl")
                ulList.appendChild(productLi)
                productList.appendChild(ulList);
                this.getTotal(this.products);
            })
        } else {
            const filteredProducts = this.searchProduct(this.searchValue)
            filteredProducts.forEach(product => {
                console.log(`render products ${currencyValue}`);
                const productLi = document.createElement('li');
                productLi.innerHTML = `<span class="pro_name">${product.name}</span> <span class="price">${product.convertToCurrency(currencyValue)}</span>`
                ulList.setAttribute("class", "productUl")
                ulList.appendChild(productLi)
                productList.appendChild(ulList);
                this.getTotal(filteredProducts);
            })

        }

    }

    getUser() {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            .then(user => console.log(user))
    }
}

searchbtn.addEventListener("click", findItemFromSearchBar)
function findItemFromSearchBar() {
    shoppingCart.searchValue = searchItem.value;
    shoppingCart.renderProducts();
}
currency.addEventListener('change', getCurrency)
function getCurrency() {
    currencyValue = currency.options[currency.selectedIndex].text;
    console.log(currencyValue)
    if (currencyValue === "USD" || currencyValue === "EUR" || currencyValue === "DKK") {
        shoppingCart.renderProducts();
        //shoppingCart.getTotal();

    }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("Flat-screen", 5000);
const microwave = new Product("Hitachi microwave", 1500);
const griller = new Product("Sunny griller", 2000)
const toaster = new Product("Toasty toaster", 600)
const toaster1 = new Product("Jammie Toaster", 800)
const coffeeMachine = new Product("SoSo Coffee Machine", 1000)
const microwave2 = new Product("Kawasaki microwave", 1700)
const coffeeMachine2 = new Product("TooGood Coffee Machine", 4000)
const flatscreen2 = new Product("Way2Flat", 6000)
const griller2 = new Product("Steaksy griller", 3000)

console.log(flatscreen.price);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(microwave);
shoppingCart.addProduct(griller);
shoppingCart.addProduct(coffeeMachine);
console.log(shoppingCart);

shoppingCart.removeProduct(microwave);
shoppingCart.getUser();

console.log(shoppingCart.products)

shoppingCart.renderProducts();
//getCurrency();
