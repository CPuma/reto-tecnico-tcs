const requestValidator = ({ JoiSchema, source }) => {
	return {
		after: (handler, next) => {
			try {
				if (!JoiSchema) return next();

				const input = handler.event[source];

				const { error } = JoiSchema.validate(input);

				if (!error) return next();

				const errorResponse = error.details.map((detail) => ({ message: detail.message, path: detail.path }));

				handler.response = { statusCode: 400, body: JSON.stringify({ errors: errorResponse }) };

				return next();
			} catch (error) {
				handler.response = {
					statusCode: 500,
					body: JSON.stringify({ errors: { message: 'ERROR inexperado validando' } })
				};
				return next();
			}
		}
	};
};

export { requestValidator };
