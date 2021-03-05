const config = require('../config/config');

const getHost = (headers) => {
	const proto = headers['x-forwarded-proto'] || 'http';
	const stage = config.STAGE ? `/${config.STAGE}` : '';
	const host = headers['host'];

	// Si se quita el STAGE en el Serverless.yml ... No habra problemas
	return `${proto}://${host}${stage}`;
};

module.exports = { getHost };
