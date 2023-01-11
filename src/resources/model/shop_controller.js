const db = require("../../database/database");
const service = require("./shop_service");
const qs = require("qs");
const { render } = require("node-sass");
const Cart = require("./cart")

exports.shop = async (req, res) => {
  const { category } = req.query;
<<<<<<< HEAD
  const { brand } = req.query;

=======
>>>>>>> 82f2fccd3610d843673ce8aa5192d38297bdb220
  let products = [];
  products = await service.getAllProducts();

  const { search_shop } = req.query;  // Lay ten san pham tim kiem
  if (search_shop) {
    products = await service.getSearch(search_shop);
  }

  if (category) {
    products = await service.filter_kit(category);
  }
<<<<<<< HEAD
  if (brand) {
    products = await service.filter_brand(brand);
  }

=======
>>>>>>> 82f2fccd3610d843673ce8aa5192d38297bdb220
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

