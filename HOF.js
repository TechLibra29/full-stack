// Q1 
const ordersList = [
    {name: "Laptop", price: 120000},
    {name: "Mobile", price: 70000},
    {name: "Mobile Charger", price: 1500},
    {name: "Laptop Charger", price: 10500 },
    ];
    let sum = 0;
    ordersList.forEach((data) => (sum += data.price));
    console.log('The total price is Rs.${sum}');

    //Q2
    JavaScript
function randomNumberGenerator() {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber)
}
function printWithInterval() {
  randomNumberGenerator();
  setInterval(randomNumberGenerator, 2000);
}
printWithInterval();

//Q3
let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    {amount: 50, category: "Entertainment" },
    ];
    let expensesWithTax = expenses.map((expense) => {
    let tax = expense.amount * 0.1;
    return {...expense, tax: tax };
    });
    console.log("Expenses with Tax:", expensesWithTax);

//Q4

let expenses1= [
    {amount: 100, category: "Utilities" },
    {amount: 200, category: "Groceries" },
    {amount: 50, category: "Entertainment" },
    ];
    
    let groceriesExpenses = expenses1.filter(
    (expense1) => expense1.category === "Groceries"
    );
    
    console.log("Groceries Expenses:", groceriesExpenses);
//Q5
let expenses2 = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

let totalExpenses = expenses2.reduce((acc, expense) => acc + expense.amount, 0);
console.log("Total Expenses:", totalExpenses);
//Q6
let expenses3 = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

function categorizeExpense(expense) {
  if (expense.amount > 100) {
    return "High Expense";
  } else {
    return "Low Expense";
  }
}

let categorizedExpenses = expenses3.map((expense) =>
  categorizeExpense(expense)
);

console.log("Categorized Expenses:", categorizedExpenses);
//Q7
let originalNumbers = [2, 5, 8, 10, 3];
originalNumbers.forEach((number, index, array) => {
array[index] = number * 2;
});
console.log("Doubled Numbers:", originalNumbers);

//Q8
let evenNumbers = [];
originalNumbers.forEach(number => {
if (number % 2 === 0) {
evenNumbers.push(number);
}
});
console.log("Even Numbers:", evenNumbers);