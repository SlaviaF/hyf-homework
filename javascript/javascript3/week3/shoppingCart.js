const searchItem = document.getElementById("searchItem");
const productList = document.getElementById("productList");
const ulList = document.createElement("ul");
const total = document.createElement('p')
const currency = document.getElementById('currency')
const currDisplay = document.getElementById('curr_display')

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(currency) {

        if (currency == 'USD') {
            currDisplay.innerHTML = `<p>${currency} - ${(this.price * 0.159045).toFixed(2)} </p > `


        }
        else if (currency == 'EUR') {
            currDisplay.innerHTML = `<p> ${currency} -${(this.price * 0.134476).toFixed(2)} </p > `

        }
        else if (currency == 'DKK') {
            currDisplay.innerHTML = `<p> ${currency} - ${this.price} </p > `

        }
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        this.products.splice(this.products.indexOf(product), 1)
    }

    searchProduct(productName) {
        const findProduct = this.products.filter(product => {
            ulList.innerHTML = "";//how to refresh the page 
            return product.name.toUpperCase().includes(productName.toUpperCase())
        })
        this.products = findProduct;
        this.renderProducts()
        this.getTotal();

    }
    getTotal() {
        console.log(this.products);
        const totalProductPrices = this.products.map(product => product.price).reduce((total, price) => total + price, 0)
        console.log(totalProductPrices);
        total.setAttribute("class", "total")
        total.innerHTML = `<span class="pro_name">Total</span> <span class="price">Dkk ${totalProductPrices} </span>`
        productList.insertAdjacentElement('afterEnd', total)

    }

    renderProducts() {
        console.log(this.products)
        this.products.forEach(product => {
            const productLi = document.createElement('li');
            productLi.innerHTML = `<span class="pro_name">${product.name}</span> <span class="price">DKK ${product.price}</span>`
            ulList.setAttribute("class", "productUl")
            ulList.appendChild(productLi)
            productList.appendChild(ulList);

        })
    }

    getUser() {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            .then(user => console.log(user))
    }
}

searchbtn.addEventListener("click", findItemFromSearchBar)
function findItemFromSearchBar() {
    ulList.innerHTML = "";
    total.innerText = "";
    shoppingCart.searchProduct(searchItem.value)
}

currency.addEventListener('change', () => {
    let currencyValue = currency.options[currency.selectedIndex].text;

    if (currencyValue === "USD" || currencyValue === "EUR" || currencyValue === "DKK") {
        shoppingCart.products.forEach(product => {
            product.convertToCurrency(currencyValue)
            console.log(product)
        });
    }
})

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
shoppingCart.getTotal();
shoppingCart.getUser();

shoppingCart.renderProducts();
console.log(shoppingCart.products)


