const StringManipulations = require("./atividade1");

let stringManipulations;
let string;

describe("String Manipulations", () => {
  beforeAll(() => {
    string = "is a String manipulations test";
    stringManipulations = new StringManipulations(string);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("if return the first substring from the given string", () => {
    const input = "test";
    expect(stringManipulations.findFirstMatch(input)).toEqual("test");
  });

  test("if return the last substring from the given string", () => {
    const input = "test";
    expect(stringManipulations.findLastMatch(input)).toEqual("test");
  });

  test("if return a substring between two others provided", () => {
    const input1 = "String";
    const input2 = "test";
    expect(
      stringManipulations.substringBetweenMatches(input1, input2)
    ).toContain(input1);
  });

  test("if return a string composed of the first 2 and the last 2 of the original string", () => {
    expect(stringManipulations.both_ends()).toEqual("isst");
  });

  test("if returns a string where the occurrene of the first character is replaced by * ", () => {
    const input = "babble";
    expect(stringManipulations.fix_start(input)).toEqual("ba**le");
  });
});
