const urlUtil = require('../../utils/url');
const replaceURL = urlUtil.replaceURl

const presenterPerson = (resource, endpoint) => ({
	nombre: resource.name,
	genero: resource.gender,
	altura: resource.height,
	masa: resource.mass,
	anio_nacimiento: resource.birth_year,
	planeta: replaceURL(resource.homeworld, endpoint),
	color_ojos: resource.eye_color,
	color_pelo: resource.hair_color,
	color_piel: resource.skin_color,
	creado: resource.created,
	editado: resource.edited,
	url: replaceURL(resource.url, endpoint)
});

const presenterPeople = (resource, endpoint) => ({
	contador: resource.count,
	siguiente: replaceURL(resource.next, endpoint),
	anterior: replaceURL(resource.previous, endpoint),
	resultados: resource.results ? resource.results.map((planet) => presenterPerson(planet, endpoint)) : []
});

module.exports = {
	presenterPerson,
	presenterPeople
};
