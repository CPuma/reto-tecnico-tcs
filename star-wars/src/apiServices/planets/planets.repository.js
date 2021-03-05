const axiosSWApi = require('../../infrastructure/swapi/axios-swapi');

const getPlanets = (page = undefined, search = undefined) => {
	return axiosSWApi.get('/planets', {
		params: { page, search }
	});
};

const getPlanetWithId = (id) => {
	return axiosSWApi.get(`/planets/${id}`);
};

module.exports = { getPlanets, getPlanetWithId };
