// Javascript arrays

            // 0        1         2

let names = ["Emma", "Freya", "Matthew"];
console.log(names);
console.log(names [1]);
console.log(names [-1]);
console.log(names [names.length - 1]);

let ages = [14, 3, 10];

let mixed = ["Emma", 14];

// bad practice to put strings and numbers together, position of column shouldn't imply anything about its relation

// arrays start with zero but you can access specific strings in a list by calling the name/number of the object in the array

// Javascript objects

let studentName = "Ruby";
let studentClass = "WDD131";


// literal objects

let student = {
    // key value pairs, can mix and match data types
    name : "Ruby",
    class : "WDD131",
    grade : "A",
    age : 24
}

console.log(student);
console.log(student.name);


// every programming language has a method to convert objects into json because it's standard


// Javascript array methods

names.forEach(() => {
    // this code executes once per each item in the array
    console.log("hi");
    console.log(name);
    // this does first item in array

    let newNames = names.map((name) => {
        return name + "Tyler";
    })

})

console.log(newNames);
function lastNameFunction(name) {
    return name + "Tyler";
}

// filter function returns a new array with filtered values from previous array

let filterArray = names.filter((name) => {

    return name[0] === "C";
    // return name.includes ("e");

})

console.log(filterArray);

// forEach accepts callback functions, anonymous function


// reduce array takes a value and processes it left to right, reduces an array to a single value

                            
const numbers = [125, 20, 5];

document.getElementById("output").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}


let num = [10, 5, 3];

let answer = num.reduce(num, 0);

const abc = ["a", "b", "c", "d", "e"]

const ABC = abc.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

console.log(ABC);

// indexOf shows where the first occurence of a value in a string is

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");

let text = ["hello there, this is the letter z"]
let result = text.indexOf("z");

console.log(result)
