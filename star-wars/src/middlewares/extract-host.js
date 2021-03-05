const { getHost } = require("../utils/hostname");

const extractHost = (req, res, next) => {
	const { headers } = req;
	const host = getHost(headers);
	req._hostname = host;
	next();
};

module.exports = extractHost;
