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

  if (params !== null) { // Funcionalidade 2: verificar se existem params
    params = params.map((param) => param.replaceAll("@@", "")); // Funcionalidade 3: Retirar @@
    obj = Object.fromEntries(
      params.map((param) => [ // Funcionalidade 4: Construir inputs
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

  obj["date"] = {
    classes: ["col - span - 6"],
    type: "date - picker",
    label: "Data Limite",
    value: dayjs().format("YYYY - MM - DD"),
  },

    obj["sendEmail"] = {
      classes: ["col-span-6"],
      type: "radios",
      label: "Enviar e-mail com notificação",
      value: 1,
      options: [
        { name: "Sim", value: 1 },
        { name: "Não", value: 0 },
      ],
      identifiers: ["name", "value"],
    },

    self.fields = {
      ...self.fields,
      ...obj,
    };

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
