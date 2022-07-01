(()=>{

    let flash: { name: string, age?:number , powers: string[], getName?: ()=> string }  = {
        name : 'Barry Allen',
        age: 24,
        powers : ['super velocidad' , 'viajar en el tiempo']
    }
    
    // flash = {
    //     name : 'otro nombre',
    //     //age: 50,
    //     powers: ['otra cosa'],
    //     getName(){
    //         return this.name
    //     }
    // }


    let superman: { name: string, age?:number , powers: string[], getName?: ()=> string }  = {
        name : 'Clark Kent',
        age: 60,
        powers : ['super velocidad']
    }

    console.log(flash)

})()