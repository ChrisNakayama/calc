function add(number1, number2) {
  return number1 + number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

alert(add(number1, number2));

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number) {
    return number1 / number2;
}

//fahrenheit = C * 1.80 + 32
//celcius = (f-32)/1.8

function convertFToC(number1) {
    return (number1 - 32)/ 1.8;
}

const fahrenheit = parseInt(prompt("Enter a temperature in Fahrenheit: "));

alert(convertFToC(fahrenheit));