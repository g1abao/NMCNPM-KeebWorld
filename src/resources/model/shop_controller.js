const db = require("../../database/database");
const service = require("./shop_service");
const qs = require("qs");
const { render } = require("node-sass");

const Cart = require("./cart")

exports.shop = async (req, res) => {
  const { category } = req.query;

  let products = [];
  products = await service.getAllProducts();

  if (category) {
    products = await service.filter_kit(category);
  }

  res.render('shop', { products })
};

module.exports.add_to_cart = async (req, res) => {
  console.log(req.body)
  const { cart } = req.body;
  const product = await service.getProductbyID(cart);

  Cart.save(product);
  console.log(Cart.getCart());
  res.redirect('shop');
}

exports.getCart = async (req, res) => {
  res.render('cart', { cart: Cart.getCart() });
}

exports.detail = async (req, res, next) => {
  const { id_product } = req.params;

  const product = await service.getProduct(id_product);

  res.render('product-detail', { product });
}

