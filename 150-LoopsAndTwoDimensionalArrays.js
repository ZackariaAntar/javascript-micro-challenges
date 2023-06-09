// # Loops and Two Dimensional Arrays Checkpoint

// Create a function that takes in an array of arrays. Add up all of the numbers in all of the arrays and return the value.

// ## Examples:

// ### Example 1

// ```js
// let result = yourFunction([ [1, 2], [3, 4, 5] ]);
// console.log(result);
// ```

// should log

// ```
// 15
// ```

// ### Example 2

// ```js
// let result = yourFunction([ [1, 2], [3, 4, 5], [6] ]);
// console.log(result);
// ```

// should log

// ```
// 21
// ```

function loops2DArrayCheckpoint(arr) {
	let findingValues = 0;
	for (entries of arr) {
		for (item of entries) {
			findingValues += item;
		}
	}
	return findingValues;
}

let testingLoops2DArrayCheckpoint = loops2DArrayCheckpoint([
	[1, 2],
	[3, 4, 5],
	[6],
]);
console.log(testingLoops2DArrayCheckpoint);

let testingLoops2DArrayCheckpoint2 = loops2DArrayCheckpoint([
	[1, 2],
	[3, 4, 5],
]);
console.log(testingLoops2DArrayCheckpoint2);
