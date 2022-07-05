import { Pokemon } from "./decorators/pokemon";



const charmander = new Pokemon('Charmander');

//(Pokemon.prototype as any).customName = 'Pikachu'


charmander.publicApi = 'otro valor'
console.log(charmander)

