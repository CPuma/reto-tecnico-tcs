const middy = require('middy');
import { jsonBodyParser, httpEventNormalizer } from 'middy/middlewares';
import { requestValidator } from './request-validator';
import { responseMiddleware } from './response-transform';

const middyMiddleware = (handler, JoiSchema = undefined, source = 'body') =>
	middy(handler)
		.use(jsonBodyParser())
		.use(httpEventNormalizer())
		.use(requestValidator({ JoiSchema, source }))
		.use(responseMiddleware());

export { middyMiddleware };
