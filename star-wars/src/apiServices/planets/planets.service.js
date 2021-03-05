const planetsRepository = require('./planets.repository');

const getPlanets = (page, search) => {
	return planetsRepository.getPlanets(page, search);
};

const getPlanetWithId = (id) => {
	return planetsRepository.getPlanetWithId(id);
};

module.exports = { getPlanets, getPlanetWithId };
