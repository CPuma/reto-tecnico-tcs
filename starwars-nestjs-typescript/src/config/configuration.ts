
export const API_CONFIG = {
	BASE_URL: process.env.API_BASE_URL
		? `${process.env.API_BASE_URL}/${process.env.STAGE || 'dev'}`
		: 'http://localhost:3000/dev',
	ROUTE_PEOPLE: process.env.API_ROUTE_PEOPLE || '/personajes',
	ROUTE_PLANETS: process.env.API_ROUTE_PLANETS || '/planetas'
};

export const SWAPI_CONFIG = {
	BASE_URL: process.env.SWAPI_BASE_URL || 'https://swapi.py4e.com/api',
	ROUTE_PEOPLE: process.env.SWAPI_ROUTE_PEOPLE || '/people',
	ROUTE_PLANETS: process.env.SWAPI_ROUTE_PLANETS || '/planets'
};
