// 1. Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.
const multiple = (a, b, c)=> a * b * c;
const value = multiple(2, 2, 2);
console.log(value)

// 2. Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.
const multipleLine = `I am a developer.
I love to cope.
I love to eat biryani.`
console.log(multipleLine)

// 3. Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.

/* function defaultAdd (num1, num2=0){
return num1 + num2
}
const numbers =defaultAdd (4);
console.log (numbers) */

const add = (a, b=6)=> a + b;
console.log(add(4));