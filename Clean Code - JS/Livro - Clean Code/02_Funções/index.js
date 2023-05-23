// ----- Argumentos ----- //

// Ruim
function createMenu(title, body, buttonText, cancellabe) {
  console.log(title, body, buttonText, cancellabe);
}
createMenu("Foo", "Bar", "Baz", true);

// Ruim
// Ao olhar para assinatura da função não fica claro quais propriedades são usadas.
function createMenu(menu) {
  console.log(menu.title, menu.body, menu.buttonText, menu.cancellabe);
}

// Bom
// Ao usar desestruturação:
// fica imediatamente claro quais propriedades são usadas
// clona os valores primitivos específicos do objeto passado como argumento para a função.
function createMenu({ title, body, buttonText, cancellabe }) {
  console.log(title, body, buttonText, cancellabe);
}
createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true,
});

// ----- Funções devem fazer apenas uma coisa ----- //
// Tópico mais importante da Engenharia de Software

function emailClients(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      // Funcionalidade 1: Verifica se o cliente está ativo
      email(client); // Funcionalidade 2: Dispara um email para o cliente
    }
  });
}

function emailActiveClients(clients) {
  // Funcionalidade: Disparar um email para o cliente
  clients.filter(isActiveClient).forEach(email);
}
function isActiveClient(client) {
  // Funcionalidade: Verificar se o cliente está ativo
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}

// ----- Nomes de funções devem dizer o que elas fazem ----- //

// Ruim
// É difícil dizer pelo nome da função o que é adicionado, dias? , meses? anos?
function addToDate(date, month) { }

// Bom
function addDayToDate(date, month) { }
function addMonthToDate(date, month) { }
function addYearToDate(date, month) { }

// ----- Funções devem ter apenas um nível de abstração ----- //

// Ruim
function createInputFromBody(self, body) {
  let obj = {};
  let params = body.match(/@@((\w+)\b)@@/gi); // Funcionalidade 1: Obter params

  if (params !== null) {
    // Funcionalidade 2: verificar se existem params
    params = params.map((param) => param.replaceAll("@@", "")); // Funcionalidade 3: Retirar @@
    obj = Object.fromEntries(
      params.map((param) => [
        // Funcionalidade 4: Construir inputs
        param,
        {
          classes: ["col-span-12"],
          type: "text-field",
          label: param,
          value: null,
          maxlength: 4000,
          error: null,
          identifiers: ["name", "id"],
          loading: false,
        },
      ])
    );
  }

  (obj["date"] = {
    classes: ["col - span - 6"],
    type: "date - picker",
    label: "Data Limite",
    value: dayjs().format("YYYY - MM - DD"),
  }),
    (obj["sendEmail"] = {
      classes: ["col-span-6"],
      type: "radios",
      label: "Enviar e-mail com notificação",
      value: 1,
      options: [
        { name: "Sim", value: 1 },
        { name: "Não", value: 0 },
      ],
      identifiers: ["name", "value"],
    }),
    (self.fields = {
      ...self.fields,
      ...obj,
    });

  return self;
}

// Bom
function extractInputParams(body) {
  const paramsRegex = /@@((\w+)\b)@@/gi;
  const paramsMatch = body.match(paramsRegex);

  if (paramsMatch === null) return null;

  return params.map((param) => param.replaceAll("@@", ""));
}

function buildInputFields(params) {
  const inputFuilds = {};
  for (const param in params) {
    inputFuilds[param] = {
      classes: ["col-span-12"],
      type: "text-field",
      label: param,
      value: null,
      maxlength: 4000,
      error: null,
      identifiers: ["name", "id"],
      loading: false,
    };
  }

  inputFields.date = {
    classes: ["col-span-6"],
    type: "date-picker",
    label: "Data Limite",
    value: dayjs().format("YYYY-MM-DD"),
  };

  inputFields.sendEmail = {
    classes: ["col-span-6"],
    type: "radios",
    label: "Enviar e-mail com notificação",
    value: 1,
    options: [
      { name: "Sim", value: 1 },
      { name: "Não", value: 0 },
    ],
    identifiers: ["name", "value"],
  };
}

function createInputFromBody(self, body) {
  let inputParams = extractInputParams(body);
  let inputFuilds = buildInputFields(inputParams);

  self.fields = {
    ...self.fields,
    ...inputFuilds,
  };

  return self;
}

// ----- Remover Código Duplicado ----- //

// Função 1
// Ruim
function calcularAreaRetangulo(largura, altura) {
  const area = largura * altura; // Código duplicado
  console.log(`A área do retângulo é ${area}`);
}

function calcularPerimetroRetangulo(largura, altura) {
  const perimetro = 2 * (largura + altura); // Código duplicado
  console.log(`O perímetro do retângulo é ${perimetro}`);
}

// Bom
function calcularArea(largura, altura) {
  // Alterações são realizadas dentro da função calcularArea
  return largura * altura;
}

function calcularAreaRetangulo(largura, altura) {
  const area = calcularArea(largura, altura);
  console.log(`A área do retângulo é ${area}`);
}

function calcularPerimetroRetangulo(largura, altura) {
  const perimetro = 2 * calcularArea(largura, altura);
  console.log(`O perímetro do retângulo é ${perimetro}`);
}

// Função 2
// Ruim
function showDeveloperList(developers) {
  developers.forEach((developer) => {
    // Código duplicado inicio
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink,
    };
    render(data);
    // Código duplicado fim
  });
}

function showManagerList(managers) {
  managers.forEach((manager) => {
    // Código duplicado inicio
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio,
    };
    render(data);
    // Código duplicado fim
  });
}

function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();
    const data = {
      expectedSalary,
      experience,
    };
    switch (employee.type) {
      case "manager":
        data.portfolio = employee.getMBAProjects();
        break;
      case "developer":
        data.githubLink = employee.getGithubLink();
        break;
    }
    render(data);
  });
}

// ----- Defina (set) objetos padrões com Object.assign ----- //

// Bom
const initialObject = {
  type: "input",
  classes: ["gap-4"],
  value: null,
};

const beforeObject = {
  value: 141,
  disabled: true,
  error: null,
};

const finalObject = Object.assign(initialObject, beforeObject);
// {type: 'input', classes: Array(1), value: 141, disabled: true, error: null}

// ----- Não use flags como parâmetros de funções ----- //

// Ruim
function createFile(name, temp) {
  if (temp) {
    // Flag que cria bifurcação
    fs.create(`./temp/${name}`); // Funcionalidade 1: criar arquivo no dir ./temp
  } else {
    fs.create(name); // Funcionalidade 2: criar arquivo
  }
}

// Bom
function createTmpFile(name) {
  fs.create(`./temp/${name}`);
}

function createFile() {
  fs.create(name);
}

// ----- Evite efeitos colaterais I ----- //

// Ruim
let fullName = "Ryan McDermott"; // String

// Variável global referenciada pela função seguinte
// Se tivéssemos outra função que usa esse nome, então seria
// um vetor (array) e poderia quebrar seu código
function splitIntoFirstAndLastName() {
  fullName = fullName.split(" "); // fullName virou array
}
splitIntoFirstAndLastName();
console.log(toUppercase(fullName)); // Quebra o código, pois fullName não é mais String.

// Bom
function splitIntoFirstAndLastName(name) {
  return name.split(" ");
}

const fullName = "Ryan McDermott";
const newFullName = splitIntoFirstAndLastName(name);
console.log(toUppercase(fullName)); // Não quebra o código
console.log(newFullName); // ['Ryan', 'McDermott'];

// ----- Evite efeitos colaterais II ----- //

// Ruim
const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() }); // Modifica o array cart
};

const addItemToCart = (cart, item) => {
  return [...cart, { item, date: Date.now() }]; // Clona / Retorna um array com outra ref
};

// ----- Favoreça programação funcional sobre programação imperativa ----- //
// São mais limpas e faceis de testar

// Ruim
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  },
  {
    name: 'Suzie Q',
    linesOfCode: 1500
  },
  {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  },
  {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  }
];
let totalOutput = 0;
for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}

// Bom
const INITIAL_VALUE = 0;
const totalOutput = programmerOutput
  .map((programmer) => programmer.linesOfCode)
  .reduce((acc, linesOfCode) => acc + linesOfCode,
    INITIAL_VALUE)

// ----- Encapsule condicionais ----- //

// Ruim
if ((v_treinamento.numero_de_voucher === null && v_treinamento.numero_de_voucher_inscritos === null)
  && (v_treinamento.numero_de_voucher = v_treinamento.numero_de_voucher_inscritos)) {
  // ...
}

// Bom
function registrationNotAllowed(numero_de_voucher, numero_de_voucher_inscritos) {
  return (numero_de_voucher === null && numero_de_voucher_inscritos === null)
    && (numero_de_voucher = numero_de_voucher_inscritos)
}
if (registrationNotAllowed(v_treinamento.numero_de_voucher, v_treinamento.numero_de_voucher_inscritos)) {
  // ...
}
