console.clear();

function runningSum(nums) {
  let array: number[] = [];

  nums.reduce((preve, next) => {
    array.push(preve + next);
    return (preve += next);
  }, 0);

  return array;
}

runningSum([1, 2, 3, 4]);

/*

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

*/
