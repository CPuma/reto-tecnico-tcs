const axios = require('axios').default;
const constSWApi = require('./../../constant/swapi.constant');
const messageConstant = require('../../constant/message.constant');
const createError = require('http-errors');

const axiosStarWars = axios.create({
	baseURL: constSWApi.BASE_URL
});

axiosStarWars.defaults.timeout = 10000;
axiosStarWars.defaults.validateStatus = (status) => status == 200;

axiosStarWars.interceptors.response.use(
	(response) => response.data,
	(error) => {
		let message = messageConstant.Generic_Error;
		let status = 500;
		if (error.code) message = messageConstant.Internal_Error;
		if (error.response && error.response.status == 404) {
			message = messageConstant.Not_Found;
			status = 404;
		}
		return Promise.reject(createError(status, message));
	}
);

module.exports = axiosStarWars;
