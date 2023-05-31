// ----- Use getters e setters ----- //

// Bom
soccerPlayer = {
  name: 'Pedro Henrique',
  getName() {
    return this.name;
  },
  setName(name) {
    this.name = name;
  }
}


// ----- Faça objetos terem membros privados ----- //

// ----- Prefira classes do ES2015/ES6 ao invés de funções simples do ES5 ----- //

// ----- Use encadeamento de métodos ----- //

class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }
  setMake(make) {
    this.make = make;
    // NOTA: Retorne this para encadear
    return this;
  }
  setModel(model) {
    this.model = model;
    // NOTA: Retorne this para encadear
    return this;
  }
  setColor(color) {
    this.color = color;
    // NOTA: Retorne this para encadear
    return this;
  }
  save() {
    console.log(this.make, this.model, this.color);
    // NOTA: Retorne this para encadear
    return this;
  }
}
const car = new Car('Ford', 'F-150', 'red')
  // Encadeamento
  .setColor('pink') // this -> car
  .save(); // this -> car