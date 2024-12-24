import { parsePolicyRefs } from "../index.js";

describe("parsing policyRefs from PlanX content", () => {
  it("handles markdown without a link", () => {
    const input = "**plain markdown**";
    const output = parsePolicyRefs(input);
    expect(output).toEqual([]);
  });

  it("handles markdown with a single link", () => {
    const input = "[this is a link](https://www.example.com)";
    const output = parsePolicyRefs(input);
    expect(output).toEqual([
      {
        text: "this is a link",
        url: "https://www.example.com",
      },
    ]);
  });

  it("handles markdown with multiple links", () => {
    const input =
      "This is a long string which contains [one link](https://www.example.com/1) and [a second](https://www.example.com/2)";
    const output = parsePolicyRefs(input);
    expect(output).toEqual([
      {
        text: "one link",
        url: "https://www.example.com/1",
      },
      {
        text: "a second",
        url: "https://www.example.com/2",
      },
    ]);
  });

  it("handles HTML without a link", () => {
    const input = "<p>This is HTML without an anchor element</p>";
    const output = parsePolicyRefs(input);
    expect(output).toEqual([]);
  });

  it("handles HTML with a single link", () => {
    const input =
      '<p>This is HTML with an <a href="https://www.example.com">anchor</a> element</p>';
    const output = parsePolicyRefs(input);
    expect(output).toEqual([
      {
        text: "anchor",
        url: "https://www.example.com",
      },
    ]);
  });

  it("handles HTML with multiple links", () => {
    const input =
      '<p>This is HTML with <a href="https://www.example.com/1">one link</a> and then <a href="https://www.example.com/2">another</a></p>';
    const output = parsePolicyRefs(input);
    expect(output).toEqual([
      {
        text: "one link",
        url: "https://www.example.com/1",
      },
      {
        text: "another",
        url: "https://www.example.com/2",
      },
    ]);
  });
});
