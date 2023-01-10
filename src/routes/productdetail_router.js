const express = require('express');
const router = express.Router();

const productdetail = require('../resources/model/productdetail');

router.get('/', productdetail.home);

module.exports = router;