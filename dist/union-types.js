"use strict";
(() => {
    let usuarioId;
    usuarioId = 1212;
    usuarioId = 'asdf';
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()}`);
        }
        else {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    greeting('Nicolas');
    greeting(23.234234);
})();
