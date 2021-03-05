const axiosStarWars = require('../../src/infrastructure/swapi/axios-swapi');

describe('Axios Star Wars', () => {
	it('Status 200 /planets, has property results', async () => {
		const response = await axiosStarWars.get('/planets').catch((error) => error);
		expect(response).toHaveProperty('results');
	});
	it('Status 200 /people, has property results', async () => {
		const response = await axiosStarWars.get('/people');
		expect(response).toHaveProperty('results');
	});

	it('custom message when its 404', async () => {
		const response = await axiosStarWars.get('/path_no_existente').catch((error) => error);
		expect(response.message).toEqual('Parece que te perdiste en la galaxia');
	});
});
