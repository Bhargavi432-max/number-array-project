// Function to find even numbers in an array
function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Function to find odd numbers in an array
function findOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// Sample array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Even Numbers:", findEvenNumbers(numbers));
console.log("Odd Numbers:", findOddNumbers(numbers));
// Function to print a simple pattern
function printPattern(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += '* '.repeat(i) + '\n';
    }
    console.log(result);
}

// Print a pattern of 5 rows
printPattern(5);
