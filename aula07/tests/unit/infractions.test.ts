import { faker } from "@faker-js/faker";
import { getInfractionsFrom } from "../../src/infractions-service";
import * as infractionsRepository from '../../src/infractions-repository';
import * as usersRepository from "../../src/users-repository";

describe("Infractions Service Tests", () => {
  it("should get infractions from user", async () => {
    const liscenceId = faker.string.numeric()

    const user = {
      id: expect.any(Number),
      firstName: expect.any(String),
      lastName: expect.any(String),
      licenseId: expect.any(String)
    }

    const infraction = [{
      id: expect.any(Number),
      date: expect.any(String),
      description: expect.any(String),
      cost: expect.any(Number),
      level: expect.any(String),
      userId: expect.any(String)
    }]

    jest.spyOn(usersRepository, "getUserByDocument").mockImplementationOnce( () :any => {
      return user
    })

    jest.spyOn(infractionsRepository, "getInfractionsFrom").mockImplementationOnce( () :any => {
      return infraction
    })
    const infractions = await getInfractionsFrom(liscenceId)
    expect(infractions).toEqual({
      ...user,
      infractions: infraction
    }
    );
  });

  it("should throw an error when driver license does not exists", () => {
    const liscenceId = faker.string.numeric()

    jest.spyOn(usersRepository, "getUserByDocument").mockImplementationOnce( () :any => {
      return undefined
    })

    const promise = getInfractionsFrom(liscenceId)

    expect(promise).rejects.toEqual({
      message: "Driver not found.",
      type: "NOT_FOUND"
    });
  })
});