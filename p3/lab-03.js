// TODO Part 11: Import reverseString() and concatenateString()
// functions from lab-03-module.js module using require()
// Declare a specific car object
let car = {
  make: "Ford",
  model: "Mustang",
  vin: "4S3BMHB68B3286050",
  color: "Red",
  year: 2019,
  mileage: 1234,
  used: true,
  owners: [
    { last: "Last1", first: "First1" },
    { last: "Last2", first: "First2" },
  ],
};
// Assign car VIN number and year to constant variables
// const vin = car.vin;
// const year = car.year;

const {vin, year} = car;
console.log("part 2:", vin, year);
// TODO Part 2: Create vin and year variables using object destructuring
// Comment out the original code using single line comments
/*
 Important: The instructions and the following code mix vin/year and
 make/model. You can replace car.make and car.model in the following code
 with either vin and year or make and model.
*/

// Declare a normal function that returns formatted car info
console.log("part 3-5");

function getCarMakeModel(car) {
  return car.make + " " + car.model;
}
console.log(0, getCarMakeModel(car));

// part 3
const getCarMakeModelImplicit = (car) => car.make + " " + car.model;
console.log(1, getCarMakeModelImplicit(car));
// TODO Part 3: Create arrow function expression getCarMakeModelImplicit
// and template literal that returns the same formatted car info as
// getCarMakeModel(). The arrow function MUST NOT use a return
// statement (use implicit return)
// Include a console.log statement similar to getCarMakeModel,
// but increment the number from 0 to 1.

const getCarMakeModelExplicit = car =>{
    return car.make + " " + car.model;
}
let makeModel = getCarMakeModelExplicit(car);
console.log(2, getCarMakeModelExplicit(car))
// TODO Part 4: Create arrow function expression getCarMakeModelExplicit
// and template literal that returns the same formatted car info as
// getCarMakeModel(). The arrow function MUST use a return
// statement (use explicit return)
// Include a console.log statement similar to getCarMakeModel,
// but increment the number from 0 to 2.


const getCarMakeModelDestructure = car =>{
    // create make and model by destructuring car 
    let {make, model} = car;
    return make + " " + model;
}

console.log(3, getCarMakeModelDestructure(car))
// TODO Part 5: Create arrow function expression getCarMakeModelDestructure
// and template literal that returns the same formatted car info as
// getCarMakeModel(). The arrow function MUST destructure the
// car properties, which will also require using an explicit return.
// Include a console.log statement similar to getCarMakeModel,
// but increment the number from 0 to 3.



// TODO Part 6: Study the following code that will list all
// properties of an object using for..in syntax. The
// listing will include inherited properties, so the
// hasOwnProperty() method is used to only list properties
// defined in the current object
console.log("part 6");

for (let prop in car) {
  if (car.hasOwnProperty(prop)) {
    console.log(prop);
  }
}
console.log("part 7");

// Display all values of an array
const primes = [2, 3, 5, 7, 11];
// for (let index = 0; index < primes.length; index++) {
//   console.log(primes[index]);
// }
for( let item of primes){
    console.log(item);
}


// TODO Part 7: Display all array values using for..of syntax
// Comment out the original for loop code using single line comments

// TODO Part 12: Import and use reverseString() and concatenateString() in
// a single line of code to produce the following output to the console: cbacba
const {reverseString, concatenateString} = require("./lab-03-modules.js")

console.log("part 8-12:", concatenateString(reverseString("abc")));