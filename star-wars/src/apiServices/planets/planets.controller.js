const { presenterPlanets, presenterPlanet } = require('./planets.presenter');
const planetService = require('./planets.service');

const getPlanets = async (req, res, next) => {
	try {
		const { _hostname } = req;

		let { pagina, buscar } = req.query;
		pagina = isNaN(pagina) ? undefined : parseInt(pagina, 10);
		buscar = buscar ? buscar.toString() : undefined;

		const planets = await planetService.getPlanets(pagina, buscar);

		return res.status(200).send(presenterPlanets(planets, _hostname));
	} catch (error) {
		next(error);
	}
};

const getPlanetWithId = async (req, res, next) => {
	try {
		const { _hostname } = req;

		const { id } = req.params;

		const planet = await planetService.getPlanetWithId(id);

		return res.status(200).send(presenterPlanet(planet, _hostname));
	} catch (error) {
		next(error);
	}
};

module.exports = { getPlanets, getPlanetWithId };
