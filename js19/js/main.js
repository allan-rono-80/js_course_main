// JSON: JavaScript Object Notation
JSON is used to send and receive data.

JSON is a text format that is completely language indepen

Meaning JSON is used to send & receive data in many languages...not just in JavaScript.

 //

const myObj = {

name: "Dave",

hobbies: ["eat", "sleep", "code"],

hello: function () {

console.log("Hello!");

} };

console.log(myObj);

console.log(myObj.name);

myObj.hello();

console.log(typeof myobj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);