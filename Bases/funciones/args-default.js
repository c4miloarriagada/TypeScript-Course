"use strict";
(() => {
    const fullName = (firtsName, lastName, upper = false) => {
        if (upper) {
            return `${firtsName} ${lastName || 'No hay apellido'}`.toUpperCase();
        }
        else {
            return `${firtsName} ${lastName || 'No hay apellido'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
