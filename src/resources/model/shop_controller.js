const db = require("../../database/database");
const service = require("./shop_service");
const qs = require("qs");
const { render } = require("node-sass");

exports.shop = async (req, res) => {
  const { category } = req.query;

  let products = [];
  products = await service.getAllProduct();

  if (category) {
    products = await service.filter_kit(category);
  }

  res.render('shop', { products })
};


