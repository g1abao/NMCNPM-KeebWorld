const repo = require('./shop_repo');

exports.getAllProduct = () => {
    return repo.getAllProduct();
}

exports.filter_kit = (category) => {
    return repo.filter_kit(category);
}

exports.getProductbyID = (id) => {
    return repo.find(id);
}