console.clear();
// não resolvido
function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3 || arr.length === 1 || arr[0] < arr[1]) {
    return false;
  }
  // Inicializando variáveis para fases crescente e decrescente
  let increasing = true;
  let i = 0;

  // Percorrendo o array, verificando as fases crescente e decrescente
  while (i < arr.length - 1) {
    if (increasing) {
      // Verificando se o elemento atual está em estrita ascensão
      if (arr[i] >= arr[i + 1]) {
        increasing = false; // Mudar para fase decrescente
      } else {
        i++; // Mover para o próximo elemento na fase crescente
      }
    } else {
      // Verificando se o elemento atual está em estrita descida
      if (arr[i] <= arr[i + 1]) {
        return false; // Array de montanha inválido se não estiver decrescendo
      } else {
        i++; // Mover para o próximo elemento na fase decrescente
      }
    }
  }

  // Verificando se todo o array foi percorrido nas fases crescente e decrescente
  return !increasing;
}

console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // true
// console.log(validMountainArray([0, 3, 2, 1])); // true
// console.log(validMountainArray([0, 2, 3, 4, 5, 2, 1, 0])); // true
// console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // false
// console.log(validMountainArray([2, 1])); // false

// console.log(validMountainArray([3, 5, 5])); // false
// console.log(validMountainArray([0, 2, 3, 3, 5, 2, 1, 0])); // false
