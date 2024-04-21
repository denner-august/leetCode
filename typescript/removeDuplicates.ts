console.clear();
function removeDuplicates(nums: number[]): number {
  for (let index = 0; index < nums.length; index++) {
    if (nums.findIndex((i) => i === nums[index]) !== index) {
      nums.splice(index, 1);
      removeDuplicates(nums);
    }
  }

  console.log(nums);

  return nums.length;
}

// removeDuplicates([0, 0, 0, 0, 0]);
// removeDuplicates([1, 1, 2]);
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]);

/*
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).


*/
