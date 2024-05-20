//! Price 
export const salePrice = (product) => {
  let salePricenum = (product.price - (product.price * product.sale / 100)).toFixed(2);
  return `$${salePricenum}`;
}
export const under10Nums = (sale) => {
  return sale < 10 ? '0' + sale : sale;
}
export const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
};

