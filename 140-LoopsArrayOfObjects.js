// # Looping through an Array of Objects Checkpoint

// Create a function that takes in an array of employee objects. Each employee object will come in with a property called `yearsOfExperience`.
// Your function should return the total years of experience for all of the employees.

// ## Examples:

// ### Example 1

// ```js
// let result = yourFunction([
//     { name: "Tony", yearsOfExperience: 10 },
//     { name: "Carla", yearsOfExperience: 4 }
// ]);
// console.log(result);
// ```

// should log

// ```
// 14
// ```

// ### Example 2

// ```js
// let result = yourFunction([
//     { name: "Tony", yearsOfExperience: 10 },
//     { name: "Carla", yearsOfExperience: 4 },
//     { name: "Kris", yearsOfExperience: 14 }
// ]);
// console.log(result);
// ```

// should log


// ```
// 28
// ```

function loopsArrObjCheckpooint(arr){
    let foundValue = 0;
    for (obj of arr){
        foundValue += obj.yearsOfExperience
    }return foundValue
}

let testingArrObjs = loopsArrObjCheckpooint([{ name: "Tony", yearsOfExperience: 10 }, { name: "Carla", yearsOfExperience: 4 },{ name: "Kris", yearsOfExperience: 14 }])


console.log(testingArrObjs);