// ----- Argumentos ----- //

// Ruim
function createMenu(title, body, buttonText, cancellabe) {
  console.log(title, body, buttonText, cancellabe);
}
createMenu('Foo', 'Bar', 'Baz', true);

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
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
});

// ----- Funções devem fazer apenas uma coisa ----- //
// Tópico mais importante da Engenharia de Software

function emailClients(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) { // Funcionalidade 1: Verifica se o cliente está ativo
      email(client); // Funcionalidade 2: Dispara um email para o cliente
    }
  });
}

function emailActiveClients(clients) { // Funcionalidade: Disparar um email para o cliente
  clients
    .filter(isActiveClient)
    .forEach(email);
}
function isActiveClient(client) { // Funcionalidade: Verificar se o cliente está ativo
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}