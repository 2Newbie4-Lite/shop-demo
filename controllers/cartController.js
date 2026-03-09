const cartModel = require('../models/cartModel');
const productModel = require('../models/productModel');

const getCart = (req, res) => {
  const cart = cartModel.getCart();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  res.json({ success: true, data: cart, total });
};

const addToCart = (req, res) => {
  const product = productModel.getById(req.body.productId);
  if (!product) return res.status(404).json({ success: false, message: "Sản phẩm không tồn tại" });
  const cart = cartModel.addItem(product);
  res.json({ success: true, data: cart });
};

const removeFromCart = (req, res) => {
  const cart = cartModel.removeItem(req.params.id);
  res.json({ success: true, data: cart });
};

module.exports = { getCart, addToCart, removeFromCart };