(()=>{

    const addNumbers = ( a:number, b:number ) => a + b;
    const greet = ( name:string ) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo esta salvado!`;

    //let myFunction: (x:number, y:number)=> number;
    
    //let myFunction: (x:string)=> string;

    let myFunction: ()=> string;
    // myFunction = 10;

    // myFunction = addNumbers
    // console.log(myFunction(2, 3))

    // myFunction = greet
    // console.log('camilo')

    myFunction = saveTheWorld
    console.log(myFunction())

})()