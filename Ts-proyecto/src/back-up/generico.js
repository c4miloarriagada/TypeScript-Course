define(["require", "exports", "../generics/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    };
    console.log((0, generics_1.genercFucntionArrow)(deadpool));
});
