import Rating from '@mui/material/Rating';
// Price After Sale 
export const salePrice = (product) => {
  let salePricenum = (Number(product.Price) - (Number(product.Price) * product.sale / 100)).toFixed(2)
  return salePricenum
}
// if sale under 10 
export const under10Nums = (sale) => {
  return sale < 10 ? '0' + sale : sale;
}
