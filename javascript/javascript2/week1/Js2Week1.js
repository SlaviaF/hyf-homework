const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];


function getShortestWord() {
    let shortestWord = danishWords[0].length;
    for (i = 0; i < danishWords.length; i++) {
        if (danishWords[i].length < shortestWord) {
            shortestWord = danishWords[i];
        }
    }
    return shortestWord;
}


console.log(getShortestWord());






//Find and count the Danish letters


const danishLetters = ['å', 'ø', 'æ',]
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function getDanishLetters(danishSentence) {
    const resultObj = {};
    let sum = 0;
    danishLetterArray = danishSentence.split('');
    console.log(danishLetterArray);
    for (i = 0; i < danishLetterArray.length; i++) {
        if (danishLetters.includes(danishLetterArray[i])) {

            if (danishLetterArray[i] in resultObj) {

                resultObj[danishLetterArray[i]] += 1

            } else {
                resultObj[danishLetterArray[i]] = 1;
            }
            sum++
        }

    }

    resultObj.total = sum;
    return resultObj;

}

console.log(getDanishLetters(danishString2));
console.log(getDanishLetters(danishString));




//SPIRIT ANIMAL GENERATOr
const spiritAnimal = ['The fullmoon Wolf', 'The fierce Lion', 'The Louzy Cat', 'The Cunning Fox', 'The Spiky Hedgehog', 'The Squirmy Worm', 'The Smiling Hyena', 'The Bouncy Hare', 'The Lazy Sloth', 'The Loyal Dog']

const newBtn = document.querySelector('#getSpiritAnimal')
let input = document.querySelector('#spirit_animal');
let display = document.querySelector('#displayAnimal')
let randomAnimal = spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
newBtn.addEventListener('click', function () {
    let randomAnimal = spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
    let enteredInput = input.value;
    if (enteredInput === "") {
        display.innerHTML = `Please enter your name`;
    } else {
        display.innerHTML = `${enteredInput} : ${enteredInput} - ${randomAnimal}`
    }
})


