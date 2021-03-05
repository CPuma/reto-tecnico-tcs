const { replaceURl, getHost } = require('../../src/utils/url');

describe('getHost()', () => {
	it('Debe Obtener el Host ', () => {
		const header = { 'x-forwarded-proto': 'https', host: 'localhost:5000', hostname: 'localhost', method: 'POST' };

		const expected = 'https://localhost:5000/dev';

		expect(getHost(header)).toEqual(expected);
	});
});

describe('replaceURl()', () => {
	it('Debe cambiar el host', () => {
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
