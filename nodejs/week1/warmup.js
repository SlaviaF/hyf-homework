const { get } = require("superagent");

console.log("inside warmup file");

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        const diameter = this.radius * 2;
        return diameter;
    }

    getCircumference() {
        return 3.1415 * (this.radius * 2);
    }

    getArea() {
        return 3.1415 * (Math.pow(this.radius, 2))

    }
}

const circle1 = new Circle(3);
const circle2 = new Circle(7);
console.log(circle1.getDiameter());
console.log(circle1.getCircumference());
console.log(circle1.getArea());

