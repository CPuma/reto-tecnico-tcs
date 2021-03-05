const { presenterPeople, presenterPerson } = require('./people.presenter');
const peopleService = require('./people.service');

const getPeople = async (req, res, next) => {
	try {
		const { _hostname } = req;

		let { pagina, buscar } = req.query;
		pagina = isNaN(pagina) ? undefined : parseInt(pagina, 10);
		buscar = buscar ? buscar.toString() : undefined;

		const people = await peopleService.getPeople(pagina, buscar);

		return res.status(200).send(presenterPeople(people, _hostname));
	} catch (error) {
		next(error);
	}
};

const getPersonWithId = async (req, res, next) => {
	try {
		const { _hostname } = req;

		const { id } = req.params;

		const person = await peopleService.getPersonWithId(id);

		return res.status(200).send(presenterPerson(person, _hostname));
	} catch (error) {
		next(error);
	}
};

module.exports = { getPeople, getPersonWithId };
