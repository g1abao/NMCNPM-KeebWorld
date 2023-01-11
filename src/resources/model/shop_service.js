const repo = require("./shop_repo");

exports.getAllProducts = () => {
  return repo.getAllProducts();
};

exports.filter_kit = (category) => {
  return repo.filter_kit(category);
};

exports.getProductbyID = (id) => {
    return repo.find(id);
}

exports.getProduct = (id_product) => {
  return repo.getProduct(id_product);
};

exports.getSearch = (product) => {
  return repo.search_product(product);
}
