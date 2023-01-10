const express = require('express');
const router = express.Router();

const cart = require('../resources/model/cart');

router.get('/', cart.home);

module.exports = router;