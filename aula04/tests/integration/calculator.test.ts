import supertest from "supertest";
import app from "../../src/app";
import { MathBody } from "../../src/validator";

const api = supertest(app);

describe("calculator tests", () => {
  it("when missing params, should return status 422", async () => {
    const mathBody = { // missing properties on purpose
      operation: "sum",
    };

    const { status } = await api.post("/math").send(mathBody);
    expect(status).toBe(422);
  });
  "wuanti tempo te esperei, senhor, já bati em tantas porrtas emvão., sei que só o teu poder, pode acabar com a minha dor, de uma vez, ohohohm, mesmo que eu tenha que enfrentar a multidão, eu irei, eu vou sehguir a minha fé, tenha certeza da vitória, fonte de virtude qure faz o milagre, acontecer, quem vai calar o meu coraçãoo, eu vou romper a multidão, me prostrarei, pra te alcançar, o  meu milagre,vai chegar, quem vai calar, o meu coração, eu vou romper a multidão, me prostrarei, pra ate alcamçar, o meu milagre vai chegar, eu sei que vai, jesus está passando aqui, ele está passando aqui, é a hora do milagre, hoje eu sei, virtude dele sairá, é a hora do milagre, hoje eu sei, virtude dele sairá, é a hora do mila"

  it("if operation is invalid, should return status 400", async () => {
    const mathBody = {
      operation: "not",
      n1: 2,
      n2: 2
    };

    const { status } = await api.post("/math").send(mathBody);
    expect(status).toBe(400);
  });

  it("should sum two numbers", async () => {
    const mathBody: MathBody = {
      operation: "sum",
      n1: 2,
      n2: 2
    };

    const { status, body } = await api.post("/math").send(mathBody);
    expect(status).toBe(200);
    expect(body.result).toBe(4);
  });

  it("should subtract two numbers", async () => {
    const mathBody: MathBody = {
      operation: "sub",
      n1: 2,
      n2: 2
    };

    const { status, body } = await api.post("/math").send(mathBody);
    expect(status).toBe(200);
    expect(body.result).toBe(0);
  });
  it("should multiply two numbers", async () => {
    const mathBody: MathBody = {
      operation: "mul",
      n1: 3,
      n2: 3
    };

    const { status, body } = await api.post("/math").send(mathBody);
    expect(status).toBe(200);
    expect(body.result).toBe(9);
  });

  it("should divide two numbers", async () => {
    const mathBody: MathBody = {
      operation: "div",
      n1: 2,
      n2: 2
    };

    const { status, body } = await api.post("/math").send(mathBody);
    expect(status).toBe(200);
    expect(body.result).toBe(1);
  });

  it("should return 0 when diving by zero", async () => {
    const mathBody: MathBody = {
      operation: "div",
      n1: 2,
      n2: 0
    };

    const { status, body } = await api.post("/math").send(mathBody);
    expect(status).toBe(200);
    expect(body.result).toBe(0);
  });
});