define(["require", "exports", "./decorators/pokemon"], function (require, exports, pokemon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const charmander = new pokemon_1.Pokemon('Charmander');
    //(Pokemon.prototype as any).customName = 'Pikachu'
    charmander.publicApi = 'otro valor';
    console.log(charmander);
});
