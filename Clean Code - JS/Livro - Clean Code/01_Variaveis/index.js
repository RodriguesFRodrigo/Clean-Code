// ----- Use nomes de variáveis que tenham significado e sejam pronunciáveis ----- //

// Ruim
const yyyymmdstr = moment().format('YYYY/MM/DD');

// Bom
const currentDate = moment().format('YYYY/MM/DD');

// ----- Nomenclatura consistente ----- //

const isEditable = true;
const canEdited = true;
const isExcludable = false;
const canDeleted = false;

const hasEducationalInstitution = true;

// ----- Nomenclatura descritiva ----- //

const age = 27;
const amount = 2;
const price = 69.00;


// ----- Use nomes pesquisáveis ----- //

// Ruim
// Para que serve 86400000?
setTimeout(blastOff, 86400000);

// Bom
// Declare-as como const global em letras maiúsculas.
const MILLISECONDS_IN_A_DAY = 86400000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);

// ----- Evite mapeamento mental ----- //

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
  dispatch(location);
})

// ----- Contextos desnecessários ----- //

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

// Argumentos padrões //

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