// # Loops, Arrays, and Concatenation Checkpoint
// Create a function that takes two parameters. The first parameter is an array, the second parameter will be a number.

// Your function should return a string that combines all of the values starting at
//  the index of the number passed in through the end of the array.

// ## Examples:

// ### Example 1

// ```js
// let result = yourFunction(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3);
// console.log(result);
// ```

// should log

// ```
// Hi There!
// ```

// ### Example 2

// ```js
// let result = yourFunction(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 2);
// console.log(result);
// ```

// should log

// ```
// Oh! Hi There!
// ```

function loopsArrConcatCheckpoint(arr, index) {
	for (let i = index; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

let testLoop = loopsArrConcatCheckpoint(["good", "golly", "miss", "molly"], 2);
console.log(testLoop);
let testLoop1 = loopsArrConcatCheckpoint(["good", "golly", "miss", "molly"], 1);
console.log(testLoop1);
let testLoop2 = loopsArrConcatCheckpoint(["good", "golly", "miss", "molly"], 0);
console.log(testLoop2);
