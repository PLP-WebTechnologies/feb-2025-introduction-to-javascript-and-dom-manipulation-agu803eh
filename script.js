1. //Variables - 

//1. Var - to declare a variable that can be changed later
//keyword var = variable name = value
var name = "John Doe";
console.log(name); // Output: John Doe

//2. Let - to declare a variable that can be changed later, but is block-scoped (Modern Way)
//keyword let = variable name = value
let age = 30
console.log(age); // Output: 30
age = 31; // Changing the value of age
name = "Jane Doe"; // Changing the value of name
console.log(name); // Output: Jane Doe
console.log(age); // Output: 31

//3. Const - to declare a variable that cannot be changed later (Modern Way)
//keyword const = variable name = value
//const = variable name = value
const pi = 3.14; // Declaring a constant variable
console.log(pi); // Output: 3.14
pi = 3.14159; // Error: Assignment to constant variable
//console.log(pi); // Output: 3.14159

//4. Data Types - to define the type of data a variable can hold
//keyword = variable name = value
//string = "Hello World" (text) -- a sequence of characters
let greeting = "Hello World"; // String
let namestring = "John Doe"; // String
console.log(greeting); // Output: Hello World
console.log(namestring); // Output: John Doe
//number = 42 (number)
let ageNumber = 42; // Number
console.log(ageNumber); // Output: 42
//boolean = true or false (true/false)
let isStudent = true; // Boolean
console.log(isStudent); // Output: true
//Null - to define a variable with no value (null)
let emptyValue = null; // Null
console.log(emptyValue); // Output: null
//Undefined - to define a variable that has not been assigned a value (undefined)
let notAssigned; // Undefined
console.log(notAssigned); // Output: undefined
//Non Primitive Data Types - to define a variable that can hold multiple values
//keyword = variable name = value   
//object = {key: value} (object) -- a collection of key-value pairs
let person = { name: "John Doe", age: 30, isStudent: true }; // 
console.log(person); // Output: { name: 'John Doe', age: 30, isStudent: true }

let car= {brand: "Toyota", model: "Camry", year: 2020}; // Object
console.log(car); // Output: { brand: 'Toyota', model: 'Camry', year: 2020 }
console.log(car.model); // Output: Camry

let fruit = { name: "Apple", color: "Red", weight: 0.5 }; // Object
console.log(fruit); // Output: { name: 'Apple', color: 'Red', weight: 0.5 }

//array = [1, 2, 3] (array) -- a collection of values, an ordered list of elements (can be of diffeerent data tyopes)
let numbers = [1, 2, 3]; // Array
console.log(numbers); // Output: [ 1, 2, 3 ]
let colors = ["Red", "Green", "Blue"]; // Array
console.log(colors); // Output: [ 'Red', 'Green', 'Blue' ]
let mixedArray = [1, "Hello", true]; // Array
console.log(mixedArray); // Output: [ 1, 'Hello', true ]
let emptyArray = []; // Empty Array
console.log(emptyArray); // Output: []
let cars = ["Toyota", "Honda", "Ford"]; // Array
console.log(cars[1]); // Output: Honda

//Functions - to define a block of code that can be reused
//keyword = function name = (parameters) => {code block}
//keyword = function name = (parameters) {code block}
/*function name(parameters) {
    // code block
}*/
function greet(name) { // Function Declaration
    return("Hello, " + name + "!"); // Code block
}
greet("John"); // Calling the function with an argument
console.log(greet("John")); // Output: Hello, John!

function greet(name,email)
{ // Function Declaration
    return("Hello My name is " + name + "! My email is " + email); // Code block
}
console.log(greet("Agu","Agu803eh@gmail.com"))

//Operators - to perform operations on variables and values
//keyword = variable name = value
// + (addition), - (subtraction), * (multiplication), / (division), % (modulus), ++ (increment), -- (decrement)

let a = 50; // Variable Declaration
let b = 20; // Variable Declaration
let c = a % b; // Addition
console.log(c); //

//Assignment Operators - to assign values to variables
//keyword = variable name = value
let x = 10; // Variable Declaration
let y = 5; // Variable Declaration
x+=y; // Addition Assignment
console.log(x); // Output: 15
//x-=y; // Subtraction Assignment
//console.log(x); // Output: 10
//x*=y; // Multiplication Assignment
//console.log(x); // Output: 50
//x/=y; // Division Assignment
//console.log(x); // Output: 2
//x%=y; // Modulus Assignment
//console.log(x); // Output: 0
//x**=y; // Exponentiation Assignment
//console.log(x); // Output: 100000
//x&=y; // Bitwise AND Assignment
//console.log(x); // Output: 0
//x|=y; // Bitwise OR Assignment
//console.log(x); // Output: 15
//x^=y; // Bitwise XOR Assignment
//console.log(x); // Output: 15
//x<<=y; // Left Shift Assignment
//console.log(x); // Output: 320
//x>>=y; // Right Shift Assignment
//console.log(x); // Output: 0
//x>>>=y; // Unsigned Right Shift Assignment
//console.log(x); // Output: 0
//x&&=y; // Logical AND Assignment
//console.log(x); // Output: 0
//x||=y; // Logical OR Assignment
//console.log(x); // Output: 15

// Comparison Operators - to compare two values
//keyword = variable name = value
// == (equal to), === (strict equal to), != (not equal to), !== (strict not equal to), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to)
let d=100
let e=200
console.log(d==e) // Output: false
console.log(d===e) // Output: false
console.log(d!=e) // Output: true
console.log(d!==e) // Output: true
console.log(d>e) // Output: false
console.log(d<e) // Output: true
console.log(d>=e) // Output: false
console.log(d<=e) // Output: true
// Logical Operators - to combine multiple conditions
//keyword = variable name = value
console.log(d==e && d!=e) // Output: false
console.log(d==e || d!=e) // Output: true
console.log(!(d==e)) // Output: true
console.log(!(d!=e)) // Output: false

let myage =25
let islearner = true

console.log(myage<25 && islearner==true) // Output: false
console.log(myage==25 || islearner==false) // Output: true


if (5 > 3) { console.log("Yes"); } else { console.log("No"); } // Output: Yes

