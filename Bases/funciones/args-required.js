"use strict";
(() => {
    const fullName = (firtsName, lastName) => {
        return `${firtsName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
