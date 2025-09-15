// Type Conversions

// String to Number
const inputYear = "1996";
console.log(Number(inputYear), inputYear); 
console.log(Number(inputYear) + 5); 

// Number to String
const num = 20;
console.log(String(num), num);

// Boolean conversion
console.log(Boolean(0)); 
console.log(Boolean("")); 
console.log(Boolean("Hello")); 
console.log(Boolean(123));

// Automatic coercion
console.log("23" - "10" - 3); 

// Functions-Basics

// Function Declaration
function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("Ramadan"));

// Function Expression
const square = function (num) {
  return num * num;
};
console.log(square(5));

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4, 6));

// Logical Operators
const hasLaptop = true;
const hasInternet = false;

console.log(hasLaptop && hasInternet); 
console.log(hasLaptop || hasInternet);
console.log(!hasLaptop);

if (hasLaptop && !hasInternet) {
  console.log("You have a laptop but no internet.");
} else if (hasLaptop && hasInternet) {
  console.log("You can code online!");
}

// While-for
// while loop

let i = 1;
while (i <= 5) {
  console.log(`While Loop Count: ${i}`);
  i++;
}

// for loop


for (let i = 1; i <= 5; i++) {
  console.log(`For Loop Count: ${i}`);
}

const bestFriends = ["Natasha", "Ngozi", "Aishat"];
for (let i = 0; i < bestFriends.length; i++) {
  console.log(`Friend ${i + 1}: ${bestFriends[i]}`);
}
