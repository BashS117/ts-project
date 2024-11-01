"use strict";
(() => {
    let userId;
    let shirtSize;
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    //shirtSize = 's';
    function greeting(userId, size) {
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLowerCase()}`);
        }
    }
    greeting(111, 'XL');
    greeting('23', 'S');
})();
