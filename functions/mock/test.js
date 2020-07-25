const Module = require('./');

const spySuccess = jest.spyOn(Module, 'success').mockReturnValue('mocked value');

describe("hasNumber", () => {
  test("must call 'mockCallback'", () => {
    const mockCallback = jest.fn();

    Module.hasNumber(1, mockCallback);

    expect(mockCallback).toHaveBeenCalled();
    expect(spySuccess).toHaveBeenCalled();
  });
});
