const { Database } = require("../database/database");

class NumeroService {
  constructor() {
    this.db = new Database();
  }

  adicionar(numero) {
    if (typeof numero !== "number") {
      throw new Error("Valor inválido");
    }

    return this.db.salvar(numero);
  }

  listar() {
    return this.db.listar();
  }

  somar() {
    return this.db.listar().reduce((total, n) => total + n, 0);
  }

  media() {
    const numeros = this.db.listar();
    if (numeros.length === 0) return 0;

    return this.somar() / numeros.length;
  }
}

module.exports = { NumeroService };