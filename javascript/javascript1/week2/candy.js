let boughtCandyPrices = [];

function addCandy(candyType, weight) {

    let priceOfCandy = 0;
    if (candyType === 'sweet') { priceOfCandy = weight * 0.5 }
    else if (candyType === 'chocolate') { priceOfCandy = weight * 0.7 }
    else if (candyType === 'toffee') { priceOfCandy = weight * 1.1 }
    else { priceOfCandy = weight * 0.03 }

    return boughtCandyPrices.push(priceOfCandy);
}
addCandy('chocolate', 30);
addCandy('sweet', 20);
addCandy('toffee', 15);
addCandy('chewing-gum', 100);
console.log(boughtCandyPrices);

//CAN YOU BUY MORE

let amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
    let totalPriceOfCandy = 0;
    for (i = 0; i < boughtCandyPrices.length; i++) {
        totalPriceOfCandy = totalPriceOfCandy + boughtCandyPrices[i];

    }
    if (totalPriceOfCandy > amountToSpend) {
        console.log('Enough candy for you!')
    }
    else {

        console.log('You can buy more, so please do!')
    }

}

canBuyMoreCandy();