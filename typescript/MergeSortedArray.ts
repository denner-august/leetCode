console.clear();

/**
 Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums2.forEach((element) => {
    nums1.push(element);
  });

  while (nums1.includes(0) && nums1.length > m + n) {
    let busca = nums1.findIndex((Element) => Element === 0);
    nums1.splice(busca, 1);
  }

  nums1.sort((a, b) => a - b);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
