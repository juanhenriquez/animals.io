const router = require('express').Router();
const { errorHandler } = require('./../middlewares/errors.middleware');

// controller 
const UserController = require('./user.controller');

// routes definitions
router.get('/', errorHandler(UserController.all));
router.post('/', errorHandler(UserController.create));

module.exports = router;