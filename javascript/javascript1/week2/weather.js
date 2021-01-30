function whatToWear(temperature) {

    if (temperature < 0) {
        return "Wear layers and a Parka"
    } else if (temperature >= 0 && temperature < 12) {
        return " Wear a fleese jacket and that will be good"

    } else if (temperature >= 12 && temperature < 22) {
        return "Wear a cool Jumer"
    } else {
        return "Wear some cool shorts"

    }


}
const clothesToWear = whatToWear(20);
console.log(clothesToWear);