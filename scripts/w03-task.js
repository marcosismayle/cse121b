/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2) {
    return num1 + num2;
}

function addNumber() {
    //read from input
    let num1 = Number(document.getElementById('add1').value);
    let num2 = Number(document.querySelector('#add2').value);

    document.getElementById('sum').value = add(num1, num2);
}

document.getElementById('addNumbers').addEventListener('click', addNumber);

/* Function Expression - Subtract Numbers */
function subtract (num1, num2) {
    return num1 - num2;
}

const subtractNumbers = function () {
    let num1 = Number(document.querySelector('#subtract1').value);
    let num2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(num1, num2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (num1, num2) => num1 / num2;

const divideNumbers = function() {
    let num1 = Number(document.querySelector('#dividend').value);
    let num2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(num1, num2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
// Add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#getTotal').addEventListener('click', calculateTotalDue);
});

function calculateTotalDue() {
    // Get user input
    const subtotal = document.querySelector('#subtotal').value;
    
    // Membership checkbox
    const checkbox = document.querySelector('#member');
    const member = checkbox.checked;

    // Apply discount
    const percentage = member ? 0.15 : 0;
    const discountedSubtotal = subtotal - (subtotal * percentage);

    // Output the total
    const totalSpan = document.querySelector('#total');
    totalSpan.textContent = `$${discountedSubtotal.toFixed(2)}`;
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const array = document.querySelector('#array');
array.textContent = numArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
const multiplied = numArray.map(number => number * 2);

document.querySelector('#sumOfMultiplied').innerHTML = multiplied.reduce((sum, number) => sum + number);
