console.clear();
// não resolvido

function validMountainArray(arr: number[]): boolean {
  let existe = false;

  if (arr.length < 3) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    let proximo = arr[i + 1];

    if (proximo === arr[i]) {
      return false;
    }

    if (arr[0] > arr[1]) {
      return false;
    }

    if (proximo < arr[i]) {
      existe = true;
    }

    if (!existe) {
      return false;
    }
  }

  return true;
}

console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // false

// console.log(validMountainArray([0, 3, 2, 1])); // true
// console.log(validMountainArray([0, 2, 3, 4, 5, 2, 1, 0])); // true

// console.log(validMountainArray([2, 1])); // false
// console.log(validMountainArray([3, 5, 5])); // false
// console.log(validMountainArray([0, 2, 3, 3, 5, 2, 1, 0])); // false
