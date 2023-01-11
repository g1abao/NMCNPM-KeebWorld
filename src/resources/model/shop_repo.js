const db = require("../../database/database");

exports.getAllProducts = async () => {
  const result = await db.connection.execute("select * from product");
  return result[0];
};

exports.filter_kit = async (category) => {
  const result = await db.connection.execute(
    "select * from product where category = ?",
    [category]
  );
  return result[0];
};

exports.filter_brand = async (brand) => {
  const result = await db.connection.execute(
    "select * from product where brand = ?",
    [brand]
  );
  return result[0];
};

exports.find = async (id) => {
  const result = await db.connection.execute(
    "select * from product where id_product = ?",
    [id]
  );
  return result[0][0];
};

exports.getProduct = async (id_product) => {
  const result = await db.connection.execute(
    "select * from product where id_product = ?",
    [id_product]
  );
  return result[0][0];
};

exports.search_product = async (product) => {    // truy van san pham search
  const result = await db.connection.execute(
    "select * from product where name like ?",
    [`%${product}%`]    
  );
  return result[0];
};
