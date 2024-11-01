import { addProduct,calcStock,products } from "./product.service";

addProduct({
  title: 'pro1',
  createdAt: new Date(1982, 1, 1),
  stock:12
});
addProduct({
  title: 'pro 2',
  createdAt: new Date(2343, 1, 1),
  stock: 6,
  size: 'XL'
});
console.log(products)
const total= calcStock()
console.log(total)
