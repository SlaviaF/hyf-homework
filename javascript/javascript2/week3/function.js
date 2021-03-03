//FUNCTION AS VARIABLE
const fruits = () => 'banana';//return single value
const vegetables = () => ['aubergine', 'bell-peppers']; //returning multiple values
const salads = () => console.log('lettuce', 'kale')

const functionArray = [fruits, vegetables, salads];

functionArray.forEach(item => item);
console.log(functionArray);

//REGULAR FUNCTION
//with regular function it just logs out the functon name
function house() { console.log('apartment', 'villa') };
function road() { console.log('cobbled', 'cemented') };
function furniture() { console.log('sofa', 'chairs') };

const newFunctionArray = [house(), road(), furniture()];

newFunctionArray.forEach(item => item);

//function as key value
const subject = () => console.log('HTML', 'CSS', 'Javacript')
randomObject = { firstName: "Slavia", lastName: "Furtado", subjects: subject }
console.log(randomObject.subjects);
