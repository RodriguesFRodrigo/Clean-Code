/*
  Use nomes de variáveis que tenham significado e sejam
  pronunciáveis.
*/

// Ruim
const yyyymmdstr = moment().format('YYYY/MM/DD');

// Bom
const currentDate = moment().format('YYYY/MM/DD');

/* ------------------------------ */

/*
  A nomenclatura consistente significa que cada tipo de variável deve ter um nome que reflita sua finalidade e significado. 
  Por exemplo, as variáveis ​​que armazenam valores booleanos devem ser nomeadas com um prefixo que indique que são valores 
  booleanos, como "is_", "has_", "can_", etc. 
  Por outro lado, as variáveis ​​que armazenam valores numéricos podem ser nomeadas de forma mais descritiva,
  como "idade","quantidade", "preço", etc.
*/

const isEditable = true; // Função / Método para obter o valor booleano.
const canEdited = true;
const isExcludable = false;
const canDeleted = false;

const hasEducationalInstitution = true; // Função / Método para obter o valor booleano.

/*
  Por outro lado, as variáveis ​​que armazenam valores numéricos podem ser nomeadas de forma mais descritiva,
  como "idade", "quantidade", "preço", etc.
*/

const age = 27;
const amount = 2;
const price = 69.00;

/* ------------------------------ */

/*
  Use nomes pesquisáveis.
*/

// Ruim
// Para que serve 86400000?
setTimeout(blastOff, 86400000);

// Declare-as como const global em letras maiúsculas.
const MILLISECONDS_IN_A_DAY = 86400000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);

/* ------------------------------ */

/*
  Evite mapeamento mental
*/

// Ruim
const locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((l) => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // Espera, para que serve o `l` mesmo?
  dispatch(l);
})

// Bom
const locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((location) => {
  doStuff();
  doSomeOtherStuff();
  // ...
  dispatch(locationl);
})

/* ------------------------------ */

/*
  Não adicione contextos desnecessários
  Se o nome de sua classe/objeto já lhe diz alguma coisa, não as repita nos nomes de suas variáveis.
*/

// Ruim
const car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Black",
  paintCar(carColor) {
    this.carColor = carColor;
  }
}

// Bom
const car = {
  make: "Honda",
  model: "Accord",
  color: "Black",
  paint(color) {
    this.color = color;
  }
}

/* ------------------------------ */

/*
  Use argumentos padrões ao invés de curto circuitar ou
  usar condicionais
  Esteja ciente que se você usá-los, sua função apenas irá
  fornecer valores padrões para argumentos undefined . Outros valores
  "falsos" como '' , "" , false , null , 0 , e NaN , não serão
  substituídos por valores padrões.
*/

// Ruim
function createMicrobrewery(name) {
  const breweryName = name || 'Hipster Brew Co.';
  // ...
}

// Bom
function createMicrobrewery(name = 'Hipster Brew Co.') {
  console.log(name)
  // ...
}

createMicrobrewery('Rodrigo') // Rodrigo
createMicrobrewery('') //
createMicrobrewery("") //
createMicrobrewery(false) // false
createMicrobrewery(null) // null
createMicrobrewery(NaN) // NaN
createMicrobrewery(undefined) // Hipster Brew Co.
createMicrobrewery() // Hipster Brew Co.

/* ------------------------------ */