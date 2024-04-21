console.clear();
function fizzBuzz(n: number) {
  let arr: string[] = [];

  for (let index = 1; index <= n; index++) {
    const strIndex = String(index);
    if (index % 3 === 0 && index % 5 === 0) {
      arr.push("fizz buzz");
    } else if (index % 3 === 0) {
      arr.push("fizz");
    } else if (index % 5 === 0) {
      arr.push("buzz");
    } else arr.push(strIndex);
  }
  return arr;
}

console.log(fizzBuzz(3));
// fizzBuzz(5)
// fizzBuzz(15)
/*
Example 1:

Input: n = 3
Output: ["1","2","Fizz"]

Example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

*/
