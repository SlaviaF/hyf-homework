const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const lengthArr = [];
let min;
let shortestWord;

function findShortestWord() {

    for (let i = 0; i < danishWords.length; i++) {
        lengthItem = danishWords[i].length;
        lengthArr.push(lengthItem);
        lengthArr.sort((a, b) => a - b)
        min = lengthArr[0];
        if (danishWords[i].length == min) {

            shortestWord = danishWords[i];
        }

    }
    return shortestWord;
}

shortestWord = findShortestWord();
console.log(shortestWord);




/*Find and count the Danish letters
Find the individual number and the total number of Danish letters in a string.

const danishString = "Jeg har en blå bil";
notThisFunctionName(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}*/

const danishLetters = ['å', 'ø', 'æ',]
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function findDanishLetters(string) {
    const resultObj = {};
    let sum = 0;
    string = string.split('');
    console.log(string);
    for (i = 0; i < string.length; i++) {
        if (danishLetters.includes(string[i])) {

            resultObj[string[i]];

            if (string[i] in resultObj) {

                resultObj[string[i]] += 1

            } else {
                resultObj[string[i]] = 1;
            }
            sum++
        }

    }

    resultObj.total = sum;
    return resultObj;

}

console.log(findDanishLetters(danishString2));
console.log(findDanishLetters(danishString));




//SPIRIT ANIMAL GENERATOr
const spiritAnimal = ['The fullmoon Wolf', 'The fierce Lion', 'The Louzy Cat', 'The Cunning Fox', 'The Spiky Hedgehog', 'The Squirmy Worm', 'The Smiling Hyena', 'The Bouncy Hare', 'The Lazy Sloth', 'The Loyal Dog']

const newBtn = document.querySelector('#getSpiritAnimal')
let input = document.querySelector('#spirit_animal');
let randomAnimal = spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];

let display = document.querySelector('#displayAnimal')


newBtn.addEventListener('click', function () {

    input = input.value;
    if (input == null || input == " ") {
        display.innerHTML = `Please enter your name`;
    } else {
        display.innerHTML = `${input} : ${input} - ${randomAnimal}`
    }
})

input.addEventListener('mouseover', function () {
    window.location.reload();
})






