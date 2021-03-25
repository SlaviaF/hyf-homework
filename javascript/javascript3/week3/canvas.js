const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d')


//Paint a circle to a Canvas element
function animateCircle() {
    requestAnimationFrame(animateCircle);
    c.beginPath();
    c.arc(500, 200, 50, 0, Math.PI * 2, false);
    c.fillStyle = "green";
    c.strokeStyle = c.fillStyle;
    c.stroke();
    c.fill();
}
animateCircle();

//Class creation time

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, this.startAngle, this.endAngle)
        c.strokeStyle = this.fillColor;
        c.fillStyle = c.strokeStyle;
        c.stroke();
        c.fill();
    }

}
const circle = new Circle(400, 400, 50, 0, Math.PI * 2, "yellow");
console.log(circle)

console.log(circle.draw());
