import "./stack";
import { fixture } from "@open-wc/testing-helpers";

describe("main test", () => {

  beforeEach(async () => {
    await fixture(`<st-stack direction="veritcal"><p>empty</p></st-stack>`);
  });

  it("has an element inside", async () => {
    const element = window.document.querySelectorAll("st-stack p")
    expect(element.length).toBe(1);
  });
});