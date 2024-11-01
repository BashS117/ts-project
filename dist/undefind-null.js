"use strict";
(() => {
    // let myNumber: number = undefind;
    // let myString: string = null;
    let myNull = null;
    let myUndefind = undefined;
    let myNumber = null;
    myNumber = 12;
    let myString = undefined;
    myString = 'hola';
    function hi(name) {
        let hello = 'hola';
        if (name) {
            hello += name;
        }
        else {
            hello += 'nobody';
        }
        console.log((hello));
    }
    function hiV2(name) {
        let hello = 'hola';
        hello += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || 'nobody';
        console.log((hello));
    }
    hi('nicolas');
    hi(null);
    hiV2('nicolas');
    hiV2(null);
})();
