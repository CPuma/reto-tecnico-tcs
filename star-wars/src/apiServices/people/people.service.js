const peopleRepository = require('./people.repository');

const getPeople = (page, search) => {
	// LOGICA DE NEGOCIO SI HUBIERA MAS
	return peopleRepository.getPeople(page, search);
};
const getPersonWithId = (id) => {
	// LOGICA DE NEGOCIO SI HUBIERA MAS
	return peopleRepository.getPersonWithId(id);
};

module.exports = { getPeople, getPersonWithId };
