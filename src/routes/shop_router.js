const express = require('express');
const router = express.Router();

const shopController = require('../resources/model/shop_controller');

router.get('/', shopController.shop);

router.post('/add-to-cart', shopController.add_to_cart);
//shopController.add_to_cart

module.exports = router;