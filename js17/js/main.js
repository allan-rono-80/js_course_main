// Objects

// key-value pairs in curly braces

const vehicle = {

wheels: 4,

S engine: function () { return "Vrroooom!";


}  };

const truck = Object.create(vehicle);
truck.doors = 2; console.log(truck);

console.log(truck.wheels); //Inheritance console.log(truck.engine());

const car = Object.create(vehicle);

car.doors 4;

car.engine function() { return "Whoooosh!"}; console.log(car.engine());
// Objects

// key-value pairs in curly braces

 const band = { 4 vocals: "Robert Plant",

guitar: "Jimmy Page",

 bass: "John Paul Jones",

drums: "John Bonham"

}; // destructuring objects

const { guitar: myVariable, bass: myBass } = band; console.log(myVariable);

console.log(myBass);