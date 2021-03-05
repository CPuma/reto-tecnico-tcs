const { presenterPeople, presenterPerson } = require('../../src/apiServices/people/people.dto');
const { presenterPlanet } = require('../../src/apiServices/planets/planets.dto');

const HOST = 'http://localhost:3000/dev';

describe('presenterPerson()', () => {
	it('Debe cambiar los  atributos de ingles a español', () => {
		const swapiResponse = {
			name: 'Luke Skywalker',
			height: '172',
			mass: '77',
			hair_color: 'blond',
			skin_color: 'fair',
			eye_color: 'blue',
			birth_year: '19BBY',
			gender: 'male',
			homeworld: 'https://swapi.py4e.com/api/planets/1/',
			films: [
				'https://swapi.py4e.com/api/films/1/',
				'https://swapi.py4e.com/api/films/2/',
				'https://swapi.py4e.com/api/films/3/',
				'https://swapi.py4e.com/api/films/6/',
				'https://swapi.py4e.com/api/films/7/'
			],
			species: [ 'https://swapi.py4e.com/api/species/1/' ],
			vehicles: [ 'https://swapi.py4e.com/api/vehicles/14/', 'https://swapi.py4e.com/api/vehicles/30/' ],
			starships: [ 'https://swapi.py4e.com/api/starships/12/', 'https://swapi.py4e.com/api/starships/22/' ],
			created: '2014-12-09T13:50:51.644000Z',
			edited: '2014-12-20T21:17:56.891000Z',
			url: 'https://swapi.py4e.com/api/people/1/'
		};

		const expected = {
			nombre: 'Luke Skywalker',
			genero: 'male',
			altura: '172',
			masa: '77',
			anio_nacimiento: '19BBY',
			planeta: 'http://localhost:3000/dev/planetas/1/',
			color_ojos: 'blue',
			color_pelo: 'blond',
			color_piel: 'fair',
			creado: '2014-12-09T13:50:51.644000Z',
			editado: '2014-12-20T21:17:56.891000Z',
			url: 'http://localhost:3000/dev/personajes/1/'
		};
		expect(presenterPerson(swapiResponse, HOST)).toEqual(expected);
	});
});

describe('presenterPeople()', () => {
	it('Debe cambiar los  atributos de ingles a español', () => {
		const swapiResponse = {
			count: 87,
			next: 'https://swapi.py4e.com/api/people/?page=2',
			previous: null,
			results: [
				{
					name: 'Luke Skywalker',
					height: '172',
					mass: '77',
					hair_color: 'blond',
					skin_color: 'fair',
					eye_color: 'blue',
					birth_year: '19BBY',
					gender: 'male',
					homeworld: 'https://swapi.py4e.com/api/planets/1/',
					films: [
						'https://swapi.py4e.com/api/films/1/',
						'https://swapi.py4e.com/api/films/2/',
						'https://swapi.py4e.com/api/films/3/',
						'https://swapi.py4e.com/api/films/6/',
						'https://swapi.py4e.com/api/films/7/'
					],
					species: [ 'https://swapi.py4e.com/api/species/1/' ],
					vehicles: [ 'https://swapi.py4e.com/api/vehicles/14/', 'https://swapi.py4e.com/api/vehicles/30/' ],
					starships: [
						'https://swapi.py4e.com/api/starships/12/',
						'https://swapi.py4e.com/api/starships/22/'
					],
					created: '2014-12-09T13:50:51.644000Z',
					edited: '2014-12-20T21:17:56.891000Z',
					url: 'https://swapi.py4e.com/api/people/1/'
				},
				{
					name: 'C-3PO',
					height: '167',
					mass: '75',
					hair_color: 'n/a',
					skin_color: 'gold',
					eye_color: 'yellow',
					birth_year: '112BBY',
					gender: 'n/a',
					homeworld: 'https://swapi.py4e.com/api/planets/1/',
					films: [
						'https://swapi.py4e.com/api/films/1/',
						'https://swapi.py4e.com/api/films/2/',
						'https://swapi.py4e.com/api/films/3/',
						'https://swapi.py4e.com/api/films/4/',
						'https://swapi.py4e.com/api/films/5/',
						'https://swapi.py4e.com/api/films/6/'
					],
					species: [ 'https://swapi.py4e.com/api/species/2/' ],
					vehicles: [],
					starships: [],
					created: '2014-12-10T15:10:51.357000Z',
					edited: '2014-12-20T21:17:50.309000Z',
					url: 'https://swapi.py4e.com/api/people/2/'
				}
			]
		};

		const expected = {
			contador: 87,
			siguiente: 'http://localhost:3000/dev/personajes/?pagina=2',
			anterior: null,
			resultados: [
				{
					nombre: 'Luke Skywalker',
					genero: 'male',
					altura: '172',
					masa: '77',
					anio_nacimiento: '19BBY',
					planeta: 'http://localhost:3000/dev/planetas/1/',
					color_ojos: 'blue',
					color_pelo: 'blond',
					color_piel: 'fair',
					creado: '2014-12-09T13:50:51.644000Z',
					editado: '2014-12-20T21:17:56.891000Z',
					url: 'http://localhost:3000/dev/personajes/1/'
				},
				{
					nombre: 'C-3PO',
					genero: 'n/a',
					altura: '167',
					masa: '75',
					anio_nacimiento: '112BBY',
					planeta: 'http://localhost:3000/dev/planetas/1/',
					color_ojos: 'yellow',
					color_pelo: 'n/a',
					color_piel: 'gold',
					creado: '2014-12-10T15:10:51.357000Z',
					editado: '2014-12-20T21:17:50.309000Z',
					url: 'http://localhost:3000/dev/personajes/2/'
				}
			]
		};
		expect(presenterPeople(swapiResponse, HOST)).toEqual(expected);
	});
});

describe('presenterPlanet()', () => {
	it('Debe cambiar los  atributos de ingles a español', () => {
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
