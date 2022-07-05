import { printObject, genericFunction, genercFucntionArrow} from '../generics/generics';
import { Villain, Hero } from '../interfaces';







// printObject(123)
// printObject(new Date())
// printObject({a:1 , b:2, c:3})
// printObject('hola mundo')
// const name: string = 'Camilo'

// console.log(genercFucntionArrow(3.1416848))
// console.log(genercFucntionArrow(name).toUpperCase())
// console.log(genercFucntionArrow((new Date()).getDate()))



const deadpool = {
    name: 'DeadPool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}


console.log(genercFucntionArrow<Hero>(deadpool))