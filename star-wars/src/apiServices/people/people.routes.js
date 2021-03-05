const router = require('express').Router()

const controller = require('./people.controller')
router
    .get('/',controller.getPeople)
    .get('/:id',controller.getPersonWithId);

module.exports  = router;