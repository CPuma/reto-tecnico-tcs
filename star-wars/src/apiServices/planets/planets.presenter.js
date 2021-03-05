const urlUtil = require('../../utils/url');
const replaceURL = urlUtil.replaceURl

const presenterPlanet = (resource, endpoint) => ({
	nombre: resource.name,
	diametro: resource.diameter,
	clima: resource.climate,
	gravedad: resource.gravity,
	terreno: resource.terrain,
	poblacion: resource.population,
	superficie_agua: resource.surface_water,
	periodo_rotacion: resource.rotation_period,
	periodo_orbital: resource.orbital_period,
	creado: resource.created,
	editado: resource.edited,
	url: replaceURL(resource.url, endpoint)
});

const presenterPlanets = (resource, endpoint) => ({
	contador: resource.count,
	siguiente: replaceURL(resource.next, endpoint),
	anterior: replaceURL(resource.previous, endpoint),
	resultados: resource.results ? resource.results.map((planet) => presenterPlanet(planet, endpoint)) : []
});

module.exports = {
	presenterPlanet,
	presenterPlanets
};
