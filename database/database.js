class Database {
  constructor() {
    this.data = [];
  }

  salvar(numero) {
    this.data.push(numero);
    return numero;
  }

  listar() {
    return this.data;
  }

  limpar() {
    this.data = [];
  }
}

module.exports = { Database };