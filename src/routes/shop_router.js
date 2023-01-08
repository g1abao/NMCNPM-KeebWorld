const express = require('express');
const router = express.Router();

const shopController = require('../resources/model/shop_controller');

router.get('/', shopController.shop);

module.exports = router;