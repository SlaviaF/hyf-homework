//Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

let numbers = [1, 2, 3, 4];
//let newNumbers = [];
const oddNumbers = numbers.filter(number => number % 2 !== 0);
const newNumbers = oddNumbers.map(number => number * 2);


console.log("The doubled numbers are", newNumbers); 
