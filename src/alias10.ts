"use strict";
(() => {
   type UserId = string | number;
   let userId: UserId;

  //  literal tpyes

  type Sizes = 'S' |'M'|'L'|'XL';
 let shirtSize: Sizes;
 shirtSize= 'M';
 shirtSize= 'L';
 shirtSize= 'XL';
//shirtSize = 's';

    function greeting(userId:UserId, size:Sizes) {
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLowerCase()}`);
        }

    }
    greeting(111,'XL');
    greeting('23','S');
})();
