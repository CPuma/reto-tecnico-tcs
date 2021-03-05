const { presenterPlanet, presenterPlanets } = require('../../src/apiServices/planets/planets.presenter');

const HOST = 'http://localhost:3000/dev';



describe('Planet list presenter,  presenterPlanets()', () => {
	const swapiResponse = {
		count: 61,
		next: 'https://swapi.py4e.com/api/planets/?page=2',
		previous: null,
		results: [
			{
				name: 'Tatooine',
				rotation_period: '23',
				orbital_period: '304',
				diameter: '10465',
				climate: 'arid',
				gravity: '1 standard',
				terrain: 'desert',
				surface_water: '1',
				population: '200000',
				residents: [
					'https://swapi.py4e.com/api/people/1/',
					'https://swapi.py4e.com/api/people/2/',
					'https://swapi.py4e.com/api/people/4/',
					'https://swapi.py4e.com/api/people/6/',
					'https://swapi.py4e.com/api/people/7/',
					'https://swapi.py4e.com/api/people/8/',
					'https://swapi.py4e.com/api/people/9/',
					'https://swapi.py4e.com/api/people/11/',
					'https://swapi.py4e.com/api/people/43/',
					'https://swapi.py4e.com/api/people/62/'
				],
				films: [
					'https://swapi.py4e.com/api/films/1/',
					'https://swapi.py4e.com/api/films/3/',
					'https://swapi.py4e.com/api/films/4/',
					'https://swapi.py4e.com/api/films/5/',
					'https://swapi.py4e.com/api/films/6/'
				],
				created: '2014-12-09T13:50:49.641000Z',
				edited: '2014-12-20T20:58:18.411000Z',
				url: 'https://swapi.py4e.com/api/planets/1/'
			},

			{
				name: 'Hoth',
				rotation_period: '23',
				orbital_period: '549',
				diameter: '7200',
				climate: 'frozen',
				gravity: '1.1 standard',
				terrain: 'tundra, ice caves, mountain ranges',
				surface_water: '100',
				population: 'unknown',
				residents: [],
				films: [ 'https://swapi.py4e.com/api/films/2/' ],
				created: '2014-12-10T11:39:13.934000Z',
				edited: '2014-12-20T20:58:18.423000Z',
				url: 'https://swapi.py4e.com/api/planets/4/'
			}
		]
	};
	const planetsLists = presenterPlanets(swapiResponse, HOST);

	it('Has property Contador', () => {
		const expected = { contador: 61 };
		expect(planetsLists).toMatchObject(expected);
	});

	it('Has property siguiente', () => {
		const expected = 'siguiente';
		expect(planetsLists).toHaveProperty(expected);
	});

	it('Tranform property siguiente correctly', () => {
		const expected = { siguiente: 'http://localhost:3000/dev/planetas/?pagina=2' };
		expect(planetsLists).toMatchObject(expected);
	});

	it('Has property anterior', () => {
		const expected = { anterior: null };
		expect(planetsLists).toMatchObject(expected);
	});

	it('Change the attributes from English to Spanish', () => {
		const expected = {
			contador: 61,
			siguiente: 'http://localhost:3000/dev/planetas/?pagina=2',
			anterior: null,
			resultados: [
				{
					nombre: 'Tatooine',
					diametro: '10465',
					clima: 'arid',
					gravedad: '1 standard',
					terreno: 'desert',
					poblacion: '200000',
					superficie_agua: '1',
					periodo_rotacion: '23',
					periodo_orbital: '304',
					creado: '2014-12-09T13:50:49.641000Z',
					editado: '2014-12-20T20:58:18.411000Z',
					url: 'http://localhost:3000/dev/planetas/1/'
				},
				{
					nombre: 'Hoth',
					diametro: '7200',
					clima: 'frozen',
					gravedad: '1.1 standard',
					terreno: 'tundra, ice caves, mountain ranges',
					poblacion: 'unknown',
					superficie_agua: '100',
					periodo_rotacion: '23',
					periodo_orbital: '549',
					creado: '2014-12-10T11:39:13.934000Z',
					editado: '2014-12-20T20:58:18.423000Z',
					url: 'http://localhost:3000/dev/planetas/4/'
				}
			]
		};
		expect(planetsLists).toEqual(expected);
	});
});

describe('Planet presenter, presenterPlanet()', () => {
	it('change the attributes from English to Spanish', () => {
		const swapiResponse = {
			name: 'Tatooine',
			rotation_period: '23',
			orbital_period: '304',
			diameter: '10465',
			climate: 'arid',
			gravity: '1 standard',
			terrain: 'desert',
			surface_water: '1',
			population: '200000',
			residents: [
				'https://swapi.py4e.com/api/people/1/',
				'https://swapi.py4e.com/api/people/2/',
				'https://swapi.py4e.com/api/people/4/',
				'https://swapi.py4e.com/api/people/6/',
				'https://swapi.py4e.com/api/people/7/',
				'https://swapi.py4e.com/api/people/8/',
				'https://swapi.py4e.com/api/people/9/',
				'https://swapi.py4e.com/api/people/11/',
				'https://swapi.py4e.com/api/people/43/',
				'https://swapi.py4e.com/api/people/62/'
			],
			films: [
				'https://swapi.py4e.com/api/films/1/',
				'https://swapi.py4e.com/api/films/3/',
				'https://swapi.py4e.com/api/films/4/',
				'https://swapi.py4e.com/api/films/5/',
				'https://swapi.py4e.com/api/films/6/'
			],
			created: '2014-12-09T13:50:49.641000Z',
			edited: '2014-12-20T20:58:18.411000Z',
			url: 'https://swapi.py4e.com/api/planets/1/'
		};

		const expected = {
			nombre: 'Tatooine',
			diametro: '10465',
			clima: 'arid',
			gravedad: '1 standard',
			terreno: 'desert',
			poblacion: '200000',
			superficie_agua: '1',
			periodo_rotacion: '23',
			periodo_orbital: '304',
			creado: '2014-12-09T13:50:49.641000Z',
			editado: '2014-12-20T20:58:18.411000Z',
			url: 'http://localhost:3000/dev/planetas/1/'
		};

		expect(presenterPlanet(swapiResponse, HOST)).toEqual(expected);
	});
});