// Q1.
const marks =95;
let grade;

if(marks>=90){
    grade= "A Grade";
}

else if(marks >=70 && marks<=90){
    grade= "B Grade";
}

else if(marks>=50 && marks<=70){
    grade = "C Grade";
}

else{
    grade = "F Grade"
}

console.log("Grade is ",grade)

// Q2.
const num1 = 10;
const num2 = 25;
for(let i = num1+1; i<=num2; i++){
    console.log(i);
}

// Q3.
number = 23;

if(number>0){
      console.log(" Number is Positive")
}

else if(number<0){
    console.log("Number is Negative")
}

else{
    console.log(" Number is zero")
}

// Q4.
// JavaScript Comma Operator mainly evaluates its operands from left to right sequentially 
// and returns the value of the rightmost operand. It is used as a separator for multiple 
// expressions at a place that requires a single expression.

Example - 
function Func1() {
    console.log('one');
    return 'one';
}
function Func2() {
    console.log('two');
    return 'two';
}
function Func3() {
    console.log('three');
    return 'three';
}

let x = (Func1(), Func2(), Func3());

console.log(x);

// Q5.
let username = "admin";
let password = "12345";

if(username=="admin" && password == "12345"){
    console.log("Login Successfully");
}

else{
    console.log("Invalid Credentials");
}

// Q6.
let payment = "paypal";

switch(payement){
    case "credit":
        console.log("Processing fee is 2%");
    break;

    case "debit":
        console.log("Processing fee is 1.5%");
    break;

    case "paypal":
        console.log("Processing fee is 3%");
    break;

    default:
        console.log("case invalid")
}

// Q7.
let temperature = 25;
let weather = temperature>30 ? "Hot":"Moderate";

console.log("Current Condition",weather);

// Q8.
let number = 10;
let sum = 0;
let currentNum = 1;

do{
    sum += currentNum;
    currentNum++;
}while(currentNum <= number);

console.log(`Sum from 1 to ${number}:${sum}`);