//Age-ify (A future age calculator)
const yearOfBirth = 1984;
const yearFuture = 2027;

const age = yearFuture - yearOfBirth;

console.log('You will be ', age, ' years old in', yearFuture);

//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
const shouldShowResultInDogYears = "yes";

if (shouldShowResultInDogYears === "yes") {
    console.log('Your dog will be ', dogYear, 'years old in ', dogYearFuture);
} else {
    console.log('Your dog will be ', (dogYearFuture - dogYearOfBirth), 'human years old in', dogYearFuture);

}

//Housey pricey (A house price estimator)

let houseWidth = 5;
let houseDepth = 11;
let houseHeight = 18;
let gardenSizeInM2 = 70;
let houseCost = 1000000;
const volumeInMeters = houseWidth * houseDepth * houseHeight;
const housePrice = (volumeInMeters * 2.5 * 1000) + (gardenSizeInM2 * 300);
if (houseCost > housePrice) {
    console.log('You are paying too much for your dream house. I\'m sorry');
} else {
    console.log('You are paying too little for your dream house. Congratulations!!!');
}

//Ez Namey (Startup name generator)

let firstWords = ["Awe-spiring", "Easy", "Quick", "Awesome", "Next", "Smart", "Innovative", "Cubic", "Cryptic", "Aspire"];
let secondWords = ["Solution", "IT", "Tech", "Skills", "Web", "Ideas", "Information", "Software", "Data", "Systems"];
let startupName = firstWords[Math.floor(Math.random() * 10) + 0] + secondWords[Math.floor(Math.random() * 10) + 0];

console.log('The startup: "', startupName, '" contains', startupName.length, 'characters');
