const productModel = require('../models/productModel');

const getAllProducts = (req, res) => {
  const products = productModel.getAll();
  res.json({ success: true, data: products });
};

const getProductById = (req, res) => {
  const product = productModel.getById(req.params.id);
  if (!product) return res.status(404).json({ success: false, message: "Không tìm thấy sản phẩm" });
  res.json({ success: true, data: product });
};

const searchProducts = (req, res) => {
  const { keyword, category } = req.query;
  let products = productModel.getAll();

  if (keyword) {
    products = products.filter(p =>
      p.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  if (category) {
    products = products.filter(p => p.category === category);
  }

  res.json({ success: true, data: products });
};

module.exports = { getAllProducts, getProductById, searchProducts };
