const orderModel = require('../models/orderModel');
const cartModel = require('../models/cartModel');

const checkout = (req, res) => {
  const { name, phone, address } = req.body;

  if (!name || !phone || !address) {
    return res.status(400).json({ success: false, message: "Vui lòng điền đầy đủ thông tin" });
  }

  const cart = cartModel.getCart();
  if (cart.length === 0) {
    return res.status(400).json({ success: false, message: "Giỏ hàng trống" });
  }

  const order = orderModel.createOrder(cart, { name, phone, address });
  cartModel.clearCart();

  res.json({ success: true, message: "Đặt hàng thành công!", data: order });
};

module.exports = { checkout };