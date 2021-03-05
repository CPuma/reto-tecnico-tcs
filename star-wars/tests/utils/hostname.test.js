const { getHost } = require('../../src/utils/hostname');
const config = require('../../src/config/config');

describe('getHost()', () => {
	it('Debe Obtener el Host SIN STAGE ', () => {
		const header = { 'x-forwarded-proto': 'https', host: 'localhost:5000', hostname: 'localhost', method: 'POST' };

		const expected = 'https://localhost:5000';

		expect(getHost(header)).toEqual(expected);
	});

	it('Debe Obtener el Host con un STAGE especifico ', () => {
		config.STAGE = 'dev'
		const header = { 'x-forwarded-proto': 'https', host: 'localhost:3000', hostname: 'localhost', method: 'POST' };

		const expected = 'https://localhost:3000/dev';

		expect(getHost(header)).toEqual(expected);
	});
});
