let orders = [];

const createOrder = (cart, customerInfo) => {
  const order = {
    id: Date.now(),
    customer: customerInfo,
    items: cart,
    total: cart.reduce((s, i) => s + i.price * i.qty, 0),
    status: "Đã đặt hàng",
    createdAt: new Date().toLocaleString('vi-VN')
  };
  orders.push(order);
  return order;
};

const getOrders = () => orders;

module.exports = { createOrder, getOrders };