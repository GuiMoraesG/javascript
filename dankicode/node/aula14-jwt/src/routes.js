const express = require('express');
const router = express.Router();

const UserController = require('../src/controllers/UserController');

router.post('/users', UserController.store);

router.post('/users/login', UserController.login);

router.get('/users/description/:id', UserController.privateOne);

module.exports = router;