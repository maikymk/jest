const { setCity, hasCity, initCities, clearCities } = require('./');

describe("cities", () => {
  beforeEach(() => {
    initCities();
  });

  test("cities must have 'Uberlândia'", () => {
    expect(hasCity('Uberlândia')).toBeTruthy();
  });

  test("cities must don't have 'Araguari'", () => {
    expect(hasCity('Araguari')).toBeFalsy();
  });

  test("cities must have 'Araguari'", () => {
    setCity('Araguari');

    expect(hasCity('Araguari')).toBeTruthy();
  });

  test.todo("add 'Araguari' to the initial cities");

  afterEach(() => {
    clearCities();
  });
});
