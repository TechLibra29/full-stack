// Q1.
const square = (num) => num * num;
const number = 20;

const squaredBumber = square(number);
console.log("square:",squaredNumber);

//Q2.
const ages = [19,22,19,24,29,25,26,24,25,24];
ages.sort((a,b)=>a-b);
const minAge = ages[0];

const maxAge = ages[ages.length-1];
let medianAge;
if (ages.length % 2 === 0) {
  const mid1 = ages[Math.floor(ages.length / 2) - 1];
  const mid2 = ages[Math.floor(ages.length / 2)];
  medianAge = (mid1 + mid2) / 2;
} else {
  medianAge = ages[Math.floor(ages.length / 2)];
}

const sumAges = ages.reduce((sum, age) => sum + age, 0);
const averageAge = sumAges / ages.length;

const ageRange = maxAge - minAge;

const minDifference = Math.abs(minAge - averageAge);
const maxDifference = Math.abs(maxAge - averageAge);
console.log('Sorted Ages:', ages);
console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Age Range:', ageRange);
console.log('Min - Average Difference:', minDifference);
console.log('Max - Average Difference:', maxDifference);


//Q3.
const contactMap = new Map();

contactMap.set("John", {
age: 30,
email: "john@example.com",
location: "Banglore",
});
contactMap.set("Alice", {
age: 25,
email: "alice@example.com",
location: "Kolkata",
});
contactMap.set("Bob", {
age: 35,
email: "bob@example.com",
location: "UP",
});

function getContact(name) {
return contactMap.get(name);
}
console.log(getContact("John"));

//Q4.
JavaScript
const person1 = { name: "Alice", age: 25};
const person2 = { name: "Bob", age: 30};
function introduce() {
        // console.log('Hello, I'm ${this.name}, and I'm ${this.age} years old.');
}
introduce.call(person2);



//Q5.
let uniqueNumbers = new Set ([3, 7, 5, 7, 2, 3, 8]); // Replace with your unique
numbers
let numberSquareMap = new Map();
uniqueNumbers.forEach(number => {
numberSquareMap.set(number, number * number);
});
console.log("Unique Numbers:");
console.log(Array.from(uniqueNumbers).join(', '));
console.log("\nNumber-Square Map:");
numberSquareMap.forEach((square, number) => {
console.log(`${number} : ${square}`);
});

//Q6.
// Task 1: Create the displayInfo function
function displayInfo(name, role) {
  console.log('Name: ${name}, Role: ${role}');
}
// Task 2: Use call to invoke displayInfo with specific arguments
displayInfo.call(null, "Prabir", "Developer");
// Task 3: Use apply to invoke displayInfo with arguments as an array
displayInfo.apply(null, ["Mithun", "SDE"]);
// Task 4: Create the greet function
function greet() {
  console.log('Hello, ${this.name}!');
}
// Task 5: Use bind to create a new function with a specific context
const user = { name: "PK" };
const boundGreet = greet.bind(user);
boundGreet();

//Q7.
// Task 1: Create the calculator object
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  calculate: function (operation, a, b) {
    if (operation === 'add') {
      return this.add(a, b);
    } else if (operation === 'subtract') {
      return this.subtract(a, b);
    } else if (operation === 'multiply') {
      return this.multiply(a, b);
    }
  },
};

const additionResult = calculator.calculate.call(calculator, 'add', 5, 3);
console.log('Addition Result: ' + additionResult); // Addition Result: 8

const multiplicationResult = calculator.calculate.apply(calculator, ['multiply',
  4, 2]);
  console.log(`Multiplication Result: ${multiplicationResult}`); //Multiplication
  Result: 8
  // Task 5: Create the discountCalculator object
  const discountCalculator = {
  discountPercentage: 10,
  applyDiscount: function (amount) {
  return amount - (amount * this.discountPercentage) / 100;
  },
  };
  // Task 6: Use bind to create a new function bound to discountCalculator
  const calculateDiscount =
  discountCalculator.applyDiscount.bind(discountCalculator);
  const discountedAmount = calculateDiscount(100);
  console.log('Discounted Amount: ${discountedAmount}'); // Discounted Amount: 90