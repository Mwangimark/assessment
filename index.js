
let a = Number(prompt("Enter first number"))
let b = Number(prompt("Enter Second number"))

function checkEight(num1, num2) {
  if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
console.log(checkEight(a, b)); // true

