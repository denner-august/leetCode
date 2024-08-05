console.clear();

function removeDuplicates(nums: number[]): number {
  let dupli: number[] = [];
  let q = 0;

  nums.reverse();

  for (let index = 0; index < nums.length; index++) {
    if (dupli.includes(nums[index])) {
      continue;
    }

    dupli.push(nums[index]);
    nums.unshift(nums[index]);
    q++;
  }

  return q;
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

/*
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}



Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/
