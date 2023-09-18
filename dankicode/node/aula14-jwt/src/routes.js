const express = require('express');
const router = express.Router();

const UserController = require('../src/controllers/UserController');

router.post('/users', UserController.store);

module.exports = router;