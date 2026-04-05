const { NumeroService } = require("../services/numeroService");

const service = new NumeroService();

class NumeroController {
  adicionar(req) {
    return service.adicionar(req.numero);
  }

  listar() {
    return service.listar();
  }

  somar() {
    return service.somar();
  }

  media() {
    return service.media();
  }
}

module.exports = { NumeroController };