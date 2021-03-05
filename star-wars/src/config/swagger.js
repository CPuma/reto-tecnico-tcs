const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
	definition: {
		info: {
			version: '1.0.0',
			title: 'Doc API StarWars',
			description: 'API Documentation for use',
			contact: {
				name: 'Cesar Puma Palomino'
			}
		}
	},
	apis: [ './../apiServices/**/*.routes.js' ]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
