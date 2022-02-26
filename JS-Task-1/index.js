// Make a calculator that can add, subtract, multiply and divide two numbers. take input from prompt and display result using alert

var a = prompt("Enter first number");
var b = prompt("Enter second number");
var c = prompt(
  "Enter operator(+ for addition, - for difference, * for multiplication and / for division ) "
);

switch (c) {
  case "+":
    alert("Sum = " + (parseInt(a) + parseInt(b)));
    break;
  case "-":
    alert("Difference = " + (parseInt(a) - parseInt(b)));
    break;
  case "*":
    alert("Product = " + parseInt(a) * parseInt(b));
    break;
  case "/":
    alert("Quotient = " + parseInt(a) / parseInt(b));
    break;
  default:
    alert("Invalid operator");
}
