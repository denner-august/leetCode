console.clear();

function replaceElements(arr: number[]): number[] {
  let arrfinal = 0;
  let maior: number[] = [];

  for (let index = arr.length; index > 0; index--) {
    if (arrfinal === 0) {
      arrfinal = arr[index - 1];
      maior.push(-1);
      continue;
    }

    if (arr[index] > arrfinal) {
      arrfinal = arr[index];
      maior.push(arrfinal);
      continue;
    }

    maior.push(arrfinal);
  }

  return maior.reverse();
}

/*
for (let index = arr.length; index > 0; index--) {
    if (arrfinal.length === 0) {
      arrfinal.push(arr[index - 1]);
      maior.push(-1);
      continue;
    }

    arrfinal.push(arr[index]);
    maior.push(Math.max(...arrfinal));
  }

*/

/*
maior.push(Math.max(...arrfinal));

arrfinal.push(arr[index]);
maior.push(Math.max(...arrfinal));



console.log(Math.max(...arr));

Input: arr =  [17,18,5,4,6,1]
Output:       [18,6,6,6,1,-1]


Input: arr = [400]
Output: [-1]
 */
