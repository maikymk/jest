const sum = require('./');

it('sum(1 + 2) to be 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('sum(2 + 2) to be 4', () => {
  expect(sum(2, 2)).toBe(4);
});
