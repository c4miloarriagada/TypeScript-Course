"use strict";
(() => {
    const fullName = (firtsName, lastName) => {
        return `${firtsName} ${lastName || 'No hay apellido'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
