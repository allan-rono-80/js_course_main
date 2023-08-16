// var, let, and const

var x = 1;

//let y = 2;

//const z = 3;

// local scope

function myFunc()

const z = 5;

console.log(z);

// local scope

let y = 4;

console.log(y);

}


myFunc();


console.log(`global: ${x}');

console.log(global: ${y}'); console.log(global: ${z}`);

function myFunc() {

var x = 10;

const z = 5;

{

var x =

// function scoped

const z = 6;

console.log('block: ${x}`);

console.log('block: ${y}');

console.log('block: ${z}`);

}

console.log(function: ${x}');

console.log( function: ${y}`);

console.log( function: ${z}`);

}

myFunc();