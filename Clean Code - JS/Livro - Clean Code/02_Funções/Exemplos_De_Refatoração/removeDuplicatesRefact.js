// Ruim
function removeDuplicates(arr) {
  const uniqueArr = [];
  arr.forEach((element) => {
    if (!uniqueArr.includes(element)) { // Funcionalidade 1: verificar se o elemento não existe no array
      uniqueArr.push(element);
    }
  });
  return uniqueArr; // Funcionalidade 2: Retornar o array sem elementos duplicados
}
console.log(`Array without duplicates ${removeDuplicates([1, 2, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9])}`);

// Bom
function createSet(arr) {
  return new Set(arr);
}

function convertSetToArr(set) {
  return [...set];
}

function removeDuplicates(arr) {
  const set = createSet(arr);
  const uniqueArr = convertSetToArr(set);
  return uniqueArr;
}
console.log(`Array without duplicates ${removeDuplicates([1, 2, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9])}`);
