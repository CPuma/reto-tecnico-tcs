const { replaceURl } = require('../../src/utils/url');


describe('replaceURl()', () => {
	it('Debe cambiar el host Swapi por el del servidor nuevo', () => {
		const host = 'http://localhost:5000/dev';

		const urlSwappi = 'https://swapi.py4e.com/api';

		const expected = 'http://localhost:5000/dev';

		expect(replaceURl(urlSwappi, host)).toEqual(expected);
	});

	it('Debe cambiar  people por personajes', () => {
		const host = 'http://localhost:5000/dev';

		const urlSwappi = 'https://swapi.py4e.com/api/people/1/';

		const expected = 'http://localhost:5000/dev/personajes/1/';

		expect(replaceURl(urlSwappi, host)).toEqual(expected);
	});

	it('Debe cambiar  planets por planetas', () => {
		const host = 'http://localhost:5000/dev';

		const urlSwappi = 'https://swapi.py4e.com/api/planets/1/';

		const expected = 'http://localhost:5000/dev/planetas/1/';

		expect(replaceURl(urlSwappi, host)).toEqual(expected);
	});

	it('Debe cambiar  page y search  por pagina y buscar', () => {
		const host = 'http://localhost:5000/dev';

		const urlSwappi = 'https://swapi.py4e.com/api/planets/1/?page=1&search=ta';

		const expected = 'http://localhost:5000/dev/planetas/1/?pagina=1&buscar=ta';

		expect(replaceURl(urlSwappi, host)).toEqual(expected);
	});
});
