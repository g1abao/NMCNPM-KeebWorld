const express = require('express');
const router = express.Router();

const shopController = require('../resources/model/shop_controller');

router.get('/', shopController.home);

module.exports = router;