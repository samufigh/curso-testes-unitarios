import calculator from "../../src/calculator"

describe("calculator tests", () => {
  it("should sum two numbers", async () => {
    const result = calculator.sum(2, 3)
    expect(result).toBe(5)
  });

  it("should subtract two numbers", async () => {
    const result = calculator.sub(5, 2)
    expect(result).toBe(3)
  });

  it("should multiply two numbers", async () => {
    const result = calculator.mul(2, 3)
    expect(result).toBe(6)
  });

  it("should divide two numbers", async () => {
    const result = calculator.div(18, 2)
    expect(result).toBe(9)
  });
})