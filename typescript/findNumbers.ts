console.clear();

function findNumbers(nums: number[]): number {
  let total = 0;
  let stringArr = String(nums);

  stringArr
    .split(",")
    .forEach((value) => (value.length % 2 === 0 ? total++ : null));

  return total;
}

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));

/*
Given an array nums of integers, return how many of them contain an even number of digits.


Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.

*/
