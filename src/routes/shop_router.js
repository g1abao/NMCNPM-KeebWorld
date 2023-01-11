const express = require('express');
const router = express.Router();

const shopController = require('../resources/model/shop_controller');

router.get('/', shopController.shop);

router.post('/', shopController.add_to_cart);

router.get('/:id_product', shopController.detail);

module.exports = router;