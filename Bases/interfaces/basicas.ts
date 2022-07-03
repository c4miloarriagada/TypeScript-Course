(()=>{
    
    interface Hero {
        name: string,
        age?:number,
        powers: string[],
        getName?: ()=> string
    }

    let flash: Hero = {
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


    let superman: Hero  = {
        name : 'Clark Kent',
        age: 60,
        powers : ['super velocidad'],
        getName(){
            return this.name;
        }
    }

    console.log(flash)




})()