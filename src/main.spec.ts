global.console.log = jest.fn();

test("Should print Hello World!", () => {
  require("./main");
  expect(global.console.log).toBeCalledWith("Hello World");
});
