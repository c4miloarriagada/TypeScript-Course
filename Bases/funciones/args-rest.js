"use strict";
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const superman = fullName('clark', 'joseph', 'kent');
    console.log(superman);
})();
