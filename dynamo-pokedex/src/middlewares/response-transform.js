const responseMiddleware = (config) => {
	return {
		after: (handler, next) => {
			const { statusCode, body } = handler.response;
			handler.response = {
				statusCode,
				body: JSON.stringify(body)
			};
			return next();
		}
	};
};

export { responseMiddleware };
