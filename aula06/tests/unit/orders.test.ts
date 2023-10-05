import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    const order: OrderInput = {
      client: faker.person.firstName(),
      description: faker.commerce.productDescription(),
    };

    const orderProtocol :any= {
      protocol: "mocked-protocol",
      status: "IN_PREPARATION",
    };

    jest.spyOn(orderRepository, "create").mockImplementationOnce(() => orderProtocol);

    const resp = await createOrder(order);

    expect(resp).toEqual(orderProtocol);
  });

  it("should return an order based on the protocol", async () => {
    const orderProtocol :any= {
      protocol: "mocked-protocol",
      status: "IN_PREPARATION",
    };

    const protocol = faker.string.uuid();

    jest.spyOn(orderRepository, "getByProtocol").mockImplementationOnce(() => orderProtocol);

    const resp = await getOrderByProtocol(protocol);
    expect(resp).toEqual(orderProtocol);
  });

  it("should return status INVALID when protocol doesn't exist", async () => {
    const orderProtocol : any= {
      protocol: "mocked-protocol",
      status: "INVALID",
    };

    const protocol = faker.string.uuid();

    jest.spyOn(orderRepository, "getByProtocol").mockImplementationOnce(() => orderProtocol);

    const resp = await getOrderByProtocol(protocol);
    expect(resp).toEqual(orderProtocol);
  });
});
