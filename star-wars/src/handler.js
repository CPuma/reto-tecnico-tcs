'use strict';
const serverlessHttp = require('serverless-http');
const express = require('express');
const app = express();

const router = require('./routes');
const { error404Handler, errorHandler } = require('./middlewares/error.handlers');
const extractHost = require('./middlewares/extract-host');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(extractHost);

app.use('', router);

app.use(error404Handler);
app.use(errorHandler);

module.exports.appStarWars = serverlessHttp(app);
