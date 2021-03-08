import { API_CONFIG, SWAPI_CONFIG } from '../../config/configuration';

export const replaceURL = (url: string) => {
	if (!url) return null;
	return url
		.replace(SWAPI_CONFIG.BASE_URL, API_CONFIG.BASE_URL)
		.replace(SWAPI_CONFIG.ROUTE_PLANETS, API_CONFIG.ROUTE_PLANETS)
		.replace(SWAPI_CONFIG.ROUTE_PEOPLE, API_CONFIG.ROUTE_PEOPLE)
		.replace(/page/, 'pagina')
		.replace(/search/, 'buscar');
};
