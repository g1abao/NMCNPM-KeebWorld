const express = require('express');
const router = express.Router();

const cart = require('../resources/model/cart');

router.get('/', (req, res) => {
     res.render('cart', { cart: cart.getCart() });
});

module.exports = router;