const express = require('express');
const router = express.Router();

const register = require('../resources/model/register_controller');

router.get('/', register.home);

module.exports = router;