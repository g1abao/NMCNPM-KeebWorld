const db = require("../../database/database");
const service = require("./shop_service");
const qs = require("qs");
const { render } = require("node-sass");

const Cart = require("./cart")

exports.shop = async (req, res) => {
  const { category } = req.query;

  let products = [];
  products = await service.getAllProduct();

  if (category) {
    products = await service.filter_kit(category);
  }

  res.render('shop', { products })
};

module.exports.add_to_cart = async (req, res) => {
  console.log(req.body)
  const { id } = req.body;
  const product = await service.getProductbyID(id);

  Cart.save(product);
  console.log(Cart.getCart());
  res.end("saved");
}

exports.getCart = async (req, res) => {
  res.render('cart', { cart: Cart.getCart() });
}