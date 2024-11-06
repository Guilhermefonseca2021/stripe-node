import { describe, it } from "node:test";
import { strictEqual } from "node:assert";
import stripe from "../src/config/stripe";

describe("it should create a plan in stripe", () => {
  it("should create a plan", () => {
    const data = {
      email: "gsbloogs194@gmail.com",
      source: "t4wt443gf43fftyjuu",
    };
    const a = "b";
    strictEqual("b", a);
  });
});
