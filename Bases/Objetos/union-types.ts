(()=>{
    type Hero = {
        name: string,
        age?:number,
        powers: string[],
        getName?: ()=> string
    }

    let myCustomVariable: (string | number | Hero) = 'Camilo';

    console.log(typeof myCustomVariable)

    myCustomVariable = 20
    console.log(typeof myCustomVariable)

    myCustomVariable = {
        name: 'Camilo',
        age: 25,
        powers: ['holi'],
      
    }
    console.log(typeof myCustomVariable)

})()