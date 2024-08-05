console.clear();

function twoSum(nums: number[], target: number): number[] {
  let obj = new Map();

  for (let t = 0; t < nums.length; t++) {
    let valor = target - nums[t];
    if (obj.has(valor)) {
      return [obj.get(valor), t];
    }

    obj.set(nums[t], t);
  }

  return [];
}

const case1 = [2, 7, 11, 15];
const case2 = [3, 2, 4];
const case3 = [3, 3];

console.log(twoSum(case1, 9));
console.log(twoSum(case2, 6));
console.log(twoSum(case3, 6));

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] */
