// # Conditional Checkpoint
// Create a function that takes two numbers.

// If the first number is bigger than the second number, return `"The first number was bigger!"`.
// If the second number is bigger than the first number, return `"The second number was bigger!"`.
// If the numbers are the same, return `"The numbers are the same!"`.

// ## Examples:

// ### Example 1

// ```js
// let result = yourFunction(3, 2)
// console.log(result);
// ```

// should log

// ```
// The first number was bigger!
// ```

// ### Example 3

// ```js
// let result = yourFunction(2, 7)
// console.log(result);
// ```

// should log


// ```
// The second number was bigger!
// ```

// ### Example 2

// ```js
// let result = yourFunction(7, 7);
// console.log(result);
// ```

// should log


// ```
// The numbers are the same!
// ```

function conditionalCheckpoint(num1,num2){
    if(num1>num2){
        return 'The first number was bigger!';
    }else if(num1<num2){
        return "The second number was bigger!";
    }else{
        return "The numbers are the same!";

    }
}

let checkForFirst = conditionalCheckpoint(5, 4);
let checkForSecond = conditionalCheckpoint(6, 7);
let checkForEqual = conditionalCheckpoint(8, 8);

console.log(checkForFirst);
console.log(checkForSecond);
console.log(checkForEqual);