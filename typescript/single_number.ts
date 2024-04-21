console.clear();
function singleNumber(nums: number[]): number {
  console.log(nums.reduce((prev, val) => prev ^ val, 0));

  return 0;
}

singleNumber([1, 2, 1, 4, 2]);

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/
