const redBox = document.querySelector('ul.marks li:nth-child(1)')
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
console.log(redBox.style.left)
const redCircle = { x: 20 - parseInt(redBox.style.left), y: 300 - parseInt(redBox.style.top) }
const blueCircle = { x: 400 - parseInt(blueBox.style.left), y: 300 - parseInt(blueBox.style.top) }
const greenCircle = { x: 400 - parseInt(greenBox.style.left), y: 20 - parseInt(greenBox.style.top) }

//translate one by one

async function translateOneByOne() {
    try {

        const awaitRedBox = await moveElement(redBox, redCircle);
        console.log(`red box moved`)
        const awaitBlueBox = await moveElement(blueBox, blueCircle);
        console.log(`blue box moved`)
        const awaitGreenBox = await moveElement(greenBox, greenCircle);
        console.log(`green box moved`)
    } catch (error) {
        console.log(error.message)
    }

}
//translateOneByOne();

//translate all at once
function translateAllAtOnce() {
    let RedBox = moveElement(redBox, redCircle);
    let BlueBox = moveElement(blueBox, blueCircle);
    let GreenBox = moveElement(greenBox, greenCircle);
    Promise.all([RedBox, BlueBox, GreenBox])
        .then(() => { console.log(`All the circles moved together`) })
        .catch(err => console.log(err))
}


translateAllAtOnce()