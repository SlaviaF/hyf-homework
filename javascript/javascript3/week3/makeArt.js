const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d')
let numberOfCircles = 100;
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    drawCircle() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, this.startAngle, this.endAngle)
        c.strokeStyle = this.fillColor;
        c.fillStyle = c.strokeStyle;
        c.stroke();
        c.fill();
    }
}
function generateCircles() {

    const circle1 = new Circle(Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        Math.floor(Math.random() * 50),
        0,
        Math.PI * 2,
        ("#" + Math.floor(Math.random() * 16777215).toString(16)));
    circle1.drawCircle()
}

setInterval(generateCircles, 100);
