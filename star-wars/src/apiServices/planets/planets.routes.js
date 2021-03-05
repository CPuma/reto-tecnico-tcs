const router = require('express').Router()

const controller = require('./planets.controller')
router
    .get('/',controller.getPlanets)
    .get('/:id',controller.getPlanetWithId);

module.exports  = router;