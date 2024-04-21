console.clear();

function checkIfExist(arr: number[]): boolean {
  const set = new Set<number>();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] * 2) || set.has(arr[i] / 2)) {
      return true;
    }
    set.add(arr[i]);
  }

  return false;
}

console.log(checkIfExist([-10, 12, -20, -8, 15])); //expecte true
console.log(checkIfExist([3, 1, 7, 11])); //expecte false
console.log(checkIfExist([7, 1, 14, 11])); //expecte true
console.log(
  checkIfExist([
    -778, -481, 842, 495, 44, 1000, -572, 977, 240, -116, 673, 997, -958, -539,
    -964, -187, -701, -928, 472, 965, -672, -88, 443, 36, 388, -127, 115, 704,
    -549, 1000, 998, 291, 633, 423, 57, -77, -543, 72, 328, -938, -192, 382,
    179,
  ])
); //expecte true
