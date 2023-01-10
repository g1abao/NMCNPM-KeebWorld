const express = require('express');
const router = express.Router();

const shopController = require('../resources/model/shop_controller');

router.get('/', shopController.shop);

router.get('/:id_product', shopController.detail);

module.exports = router;