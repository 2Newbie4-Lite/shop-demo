let cart = [];

const getCart = () => cart;

const addItem = (product) => {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  return cart;
};

const removeItem = (id) => {
  cart = cart.filter(i => i.id !== parseInt(id));
  return cart;
};

const clearCart = () => {
  cart = [];
  return cart;
};

module.exports = { getCart, addItem, removeItem, clearCart };