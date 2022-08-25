// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

const numbers = [2, 4, 6, 8]
const doMath = numbers =>{
    let squaredMath = [];
    let sum = 0;
    for (let i = 0; i<numbers.length ; i++){
        const squared = Math.pow(numbers[i],2);
        squaredMath.push(squared);
        sum = sum + squared;
        average = sum / squaredMath.length;
        
    }
    return average;
    
}
const averageMark =  (doMath(numbers));
console.log(averageMark);
