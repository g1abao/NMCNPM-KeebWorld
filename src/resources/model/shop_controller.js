const db = require("../../database/database");
const service = require("./shop_service");
const qs = require("qs");
const { render } = require("node-sass");

exports.shop = async (req, res) => {
  const { category } = req.query;

  let products = [];
  products = await service.getAllProducts();

  if (category) {
    products = await service.filter_kit(category);
  }

  res.render('shop', { products })
};

exports.detail = async (req, res, next) => {
  const { id_product } = req.params;

  const product = await service.getProduct(id_product);

  res.render('product-detail', { product });
}

