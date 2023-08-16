// Arrays

const myArray = [];

// add elements to an array myArray[0] = "Dave";

myArray[1] = 1001;

myArray[2] = false;

myArray.push("school");

console.log(myArray);

const lastItem =

myArray.pop();

console.log(lastItem);

// Arrays


const equipShelfA ["baseball", "football", "volleyball"]; 

const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];

const clothesShelf8 = ["sweat tops", "sweat pants", "hoodies"]; 


console.log(equipShelfA[1]);

//or

console.log(clothesShelf8[0]);

const equipDept = [equipShelfA, equipShelfB];

const clothesDept = [clothesShelfA, clothesShelf8];

console.log(equipDept[0][1]);

console.log(clothesDept[1][0]);