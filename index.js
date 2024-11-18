// Function to find even numbers in an array
function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Function to find odd numbers in an array
function findOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// Function to print a simple pattern


// Sample array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Call the functions
console.log("Even Numbers:", findEvenNumbers(numbers));
console.log("Odd Numbers:", findOddNumbers(numbers));
printPattern(5);  // Print a pattern of 5 rows