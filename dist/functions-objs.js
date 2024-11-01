"use strict";
(() => {
    const login = (objetito) => {
        console.log(objetito.email, objetito.password);
    };
    // login('sebas','123')
    login({
        email: 'seasdfasd',
        password: '12214'
    });
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'pro1',
        createdAt: new Date(1992, 2, 2),
        stock: 23
    });
    console.log(products);
})();
