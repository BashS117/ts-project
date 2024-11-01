"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addProduct)({
    title: 'pro1',
    createdAt: new Date(1982, 1, 1),
    stock: 12
});
(0, product_service_1.addProduct)({
    title: 'pro 2',
    createdAt: new Date(2343, 1, 1),
    stock: 6,
    size: 'XL'
});
console.log(product_service_1.products);
const total = (0, product_service_1.calcStock)();
console.log(total);
