const isOdd = require('./');

describe("isOdd", () => {
  test.each([
    [1, true],
    [2, false],
    [5, true],
  ])('.isOdd(%i)', (a, expected) => {
    expect(isOdd(a)).toBe(expected);
  });

  test.each`
    a    | expected
    ${1} | ${true}
    ${2} | ${false}
    ${5} | ${true}
  `('returns $expected when $a passed', ({ a, expected }) => {
    expect(isOdd(a)).toBe(expected);
  });
});
