console.clear();

/**
 Do not return anything, modify arr in-place instead.
 */

function duplicateZeros(arr: number[]): void {
  for (let index = 0; index < arr.length; index++) {
    let proximo = arr[index + 1];
    let atual = arr[index];
    let anterior = arr[index - 1];

    if (atual === 0 && proximo !== undefined && anterior !== 0) {
      proximo = atual;
    }
  }
  // console.log(arr);
}

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]); //8
// duplicateZeros([1, 2, 3]);

/*
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything. 

Example 1:
Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]

*/
