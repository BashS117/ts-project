"use strict";
(() => {
    let productTitle = 'my amazing product';
    // productTitle= null;
    // productTitle=()=>{};
    // productTitle=123
    productTitle = ' my amazing changed';
    console.log('productTitle', productTitle);
    const productDescription = 'blabal bla';
    console.log('productDescription', productDescription);
    const summary = `
title: ${productTitle}
description: ${productDescription}
`;
    console.log(summary);
})();
