const swapiConstant = require('../constant/swapi.constant');
const config = require('../config/config');

const replaceURl = (url, endpoint) => {
	if (url) {
		url = url
			.replace(swapiConstant.BASE_URL, endpoint)
			.replace(swapiConstant.ROUTE_PLANETS, config.ROUTE_PLANETS)
			.replace(swapiConstant.ROUTE_PEOPLE, config.ROUTE_PEOPLE)
			.replace(/page/, 'pagina')
			.replace(/search/, 'buscar');
	}
	return url;
};

module.exports = {
	replaceURl
};
