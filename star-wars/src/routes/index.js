const router = require('express').Router();
const configConstant = require('../config/config');

const planetRouter = require('../apiServices/planets/planets.routes');
const peopleRouter = require('../apiServices/people/people.routes');

router.use(configConstant.ROUTE_PLANETS, planetRouter);
router.use(configConstant.ROUTE_PEOPLE, peopleRouter);

module.exports = router;
