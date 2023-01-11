exports.home = (req, res) => {
    res.render('cart');
}
let cart = null;

module.exports = class Cart {
    static save(product) {
        if (cart == null) {
            cart = {
                products: [],
                qty: [],
                totalPrice: 0
            }
        }
        const isExisting = cart.products.findIndex(p => p.id_product == product.id_product);
        if (isExisting >= 0) {
            cart.products[isExisting].qty += 1;
        } else {
            product['qty'] = 1;
            cart.products.push(product);
        }
        cart.totalPrice += product.price;
    }

    static getCart() {
        return cart;
    }
}