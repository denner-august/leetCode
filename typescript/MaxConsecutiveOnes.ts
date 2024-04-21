console.clear();

function MaxConsecutiveOnes(nums: number[]): Number {
  let soma = 0;
  let total: number[] = [];

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 1) {
      soma++;
    } else {
      total.push(soma);
      soma = 0;
    }
  }

  total.push(soma);

  return Math.max(...total);
}

MaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
MaxConsecutiveOnes([1, 0, 1, 1, 0, 1]);

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

/*

Example 1:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 

Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

*/
