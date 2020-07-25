let cities = [];

const setCity = (city) => cities = [...cities, city];

const hasCity = (city) => cities.includes(city);

const initCities = () => cities = ['Uberlândia', 'Anápolis', 'Cristianópolis'];

const clearCities = () => cities = [];

module.exports = { setCity, hasCity, initCities, clearCities };
