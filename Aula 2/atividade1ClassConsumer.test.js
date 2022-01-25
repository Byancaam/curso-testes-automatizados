const AdressMatcher = require("./atividade1ClassConsumer");
const StringManipulations = require("./atividade1");

const mockAdressMatcherMethods = jest.fn();

jest.mock("./atividade1", () => {
  return jest.fn().mockImplementation(() => {
    return {
      findFirstMatch: () => {
        return "this is a test";
      },
      fix_start: () => {
        return "this is a *es* s*ree*";
      }
    };
  });
});

describe("Class consumer test", () => {
  beforeEach(() => {
    StringManipulations.mockClear();
    mockAdressMatcherMethods.mockClear();
  });

  test("if call the StringManipulations in the constructor of AdressMatcher", () => {
    const adressMatcher = new AdressMatcher();
    expect(StringManipulations).toHaveBeenCalledTimes(1);
  });

  test("if findStreetName method returns the mock value", () => {
    const adress = new AdressMatcher("test street");
    const result = adress.findStreetName("this is a test");
    expect(result).toEqual("this is a test");
  });

  test("if hideStreetName method returns the mock value", () => {
    const adress = new AdressMatcher("this is a test street");
    const result = adress.hideStreetName("this is a test street");
    expect(result).toEqual("this is a *es* s*ree*");
  });
});
