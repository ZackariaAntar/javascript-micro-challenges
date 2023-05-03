// # Array Checkpoint

// Create a function that takes in an array. Add up the first and last values in the array.

// ## Examples:

// ### Example 1

// ```js
// let result = yourFunction([1, 2, 3, 4, 5]);
// console.log(result);
// ```

// should log

// ```
// 6
// ```

// ### Example 2

// ```js
// let result = yourFunction([6, 7, 8, 9, 10, 11, 12]);
// console.log(result);
// ```

// should log

// ```
// 18
// ```

function arrayCheckpoint(arr) {
	return arr[0] + arr[arr.length - 1];
}

let addingArrayEntries = arrayCheckpoint([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(addingArrayEntries);

let testingAddingArrayEntries = arrayCheckpoint([-5, 2, 7, 3, 4]);
console.log(testingAddingArrayEntries);
