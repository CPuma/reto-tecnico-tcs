const swapiConstant = require('../../constant/swapi.constant');
const axiosSWApi = require('../../infrastructure/swapi/axios-swapi');

const getPeople = (page = undefined, search = undefined) => {
	return axiosSWApi.get(swapiConstant.ROUTE_PEOPLE, {
		params: { page, search }
	});
};

const getPersonWithId = (id) => {
	return axiosSWApi.get(`${swapiConstant.ROUTE_PEOPLE}/${id}`);
};

module.exports = { getPersonWithId, getPeople };
