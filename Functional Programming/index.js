// ----- Functional Programming ----- //

// A programação funcional exige que escrevamos funções determinísticas puras,
// retornam sempre o mesmo resultado com um conjunto específico de valores de entrada.

// Funções puras

const add = (a, b) => a + b;
console.log(add(5, 5)); // O valor de saída é sempre o mesmo com um conjunto específico de valores de entrada.

// Funções não puras

let SECRET = 42;
const getId = (a) => SECRET * a; // Usar um valor global para computar o id.
console.log(getId(1)); // 42
SECRET = 84;
console.log(getId(1)); // 84, o valor mudou com o mesmo conjunto específico por causa do valor global.

let id_count = 0;
const getIdCount = () => ++id_count; // usa uma valor global para computar o id e cria um efeito colateral, mudar id_count no mundo.

// ----- Os Princípios da Programação Funcional ----- //

// Até agora, aprendemos que a programação funcional depende de algumas regras.Eles são os seguintes.

// Não modifique os dados.
// Use funções puras: saída fixa para entradas fixas e sem efeitos colaterais.
// Usar expressões e declarações.

// ----- Array.prototype.filter() ----- //
// Não modifica o array original.
// Cria um novo array.

const statusCodes = [200, 400, 500, 422];
const filterUnprocessableEntity = (status) => status === 422; // Função pura.
const newStatusCode = statusCodes.filter(filterUnprocessableEntity);
console.log("old: ", statusCodes);
console.log("new: ", newStatusCode);

// ----- Array.prototype.map() ----- //
// Não modifica o array original.
// Cria um novo array.

const double = (x) => x * 2;
const numbers = [2, 4, 6, 8];
const newNumbers = numbers.map(double);
console.log("old: ", numbers);
console.log("new: ", newNumbers);

// ----- Array.prototype.reduce() ----- //
const sum = (acc, item) => acc + item;
const total = numbers.reduce(sum);
console.log(total);

// ----- Concat ----- //
const arrayA = [2, 4, 6, 8];
const arrayB = [1, 3, 5, 7, 9];
const arrayAB = arrayA.concat(arrayB);
console.log("arrayA", arrayA); // Não modifica ArrayA.
console.log("arrayB", arrayB); // Não modifica ArrayB.
console.log("arrayAB", arrayAB);

// ----- Criar estruturas imutáveis ----- //
const soccerPlayer = {
  name: "Wanderson Maciel Sousa Campos",
  age: 28,
};

const imutavelSoccerPlayer = { ...soccerPlayer };
imutavelSoccerPlayer.age++; // Altera somente em imutavelSoccerPlayer.
console.log("soccerPlayer: ", soccerPlayer);
console.log("imutavelSoccerPlayer: ", imutavelSoccerPlayer);
