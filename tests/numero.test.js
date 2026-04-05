const { NumeroService } = require("../services/numeroService");

let service;

beforeEach(() => {
  service = new NumeroService();
  service.db.limpar();
});

test("Adicionar número", () => {
  expect(service.adicionar(5)).toBe(5);
});

test("Erro ao adicionar inválido", () => {
  expect(() => service.adicionar("x")).toThrow();
});

test("Listar números", () => {
  service.adicionar(1);
  service.adicionar(2);

  expect(service.listar().length).toBe(2);
});

test("Banco começa vazio", () => {
  expect(service.listar()).toEqual([]);
});

test("Somar números", () => {
  service.adicionar(2);
  service.adicionar(3);

  expect(service.somar()).toBe(5);
});

test("Soma vazia", () => {
  expect(service.somar()).toBe(0);
});

test("Calcular média", () => {
  service.adicionar(4);
  service.adicionar(6);

  expect(service.media()).toBe(5);
});

test("Média vazia", () => {
  expect(service.media()).toBe(0);
});

test("Deve conter número", () => {
  service.adicionar(10);

  expect(service.listar()).toContain(10);
});

test("Valores diferentes", () => {
  service.adicionar(1);
  service.adicionar(2);

  expect(service.listar()[0]).not.toBe(service.listar()[1]);
});