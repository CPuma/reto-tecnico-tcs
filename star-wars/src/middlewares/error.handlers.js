const createError = require('http-errors');
const messageConstant = require('../constant/message.constant');

module.exports.error404Handler = (req, res, next) => {
	next(createError(404, messageConstant.Not_Found));
};

module.exports.errorHandler = (err, req, res, _next) => {
	res.status(err.status || 500);
	res.send({ message: err.message || messageConstant.Generic_Error });
};
