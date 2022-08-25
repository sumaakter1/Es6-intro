// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
// Print the result.
const num1 = [1, 2];
const num2 = [3, 4];
const maxNumber = (arr1, arr2)=>{
    const max = [...arr1,...arr2];
    return Math.max(...max)

}
console.log(maxNumber(num1, num2))
