const db = require("../../database/database");

exports.getAllProduct = async () => {
  const result = await db.connection.execute('select * from product');
  return result[0];
};

exports.filter_kit = async (category) => {
  const result = await db.connection.execute(
    "select * from product where category = ?",
    [category]
  );
  return result[0];
};