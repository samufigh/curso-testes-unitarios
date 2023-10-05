import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "../../src/protocols-generator";

jest.mock("uuid", () => {
  return {
    v4: () => {return "valor simulado no mock"}
  }
})

describe("generate protocol  for pacient", () => {
  it("test", async () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    const protocol = generateProtocolForPacient(firstName, lastName, false)
    //console.log(protocol)
    expect(protocol).toEqual({
      priority: false,
      date: protocol.date,
      pacient: `${firstName} ${lastName}`,
      protocol: expect.any(String)
    });
  });
});