//Item Array Removal


const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
/*const nameToRemove = names.splice(1, 1);

console.log(nameToRemove);
console.log(names);*/

function removeItem(item, index) {
  index = names.indexOf(item);
  names.splice(index, 1);
  return nameToRemove = item;

}
removeItem('Ahmad');
console.log(names);
console.log(nameToRemove);

