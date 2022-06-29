(()=>{

    const fullName =( firtsName:string, lastName?:string ):string => {


     
        return `${firtsName} ${lastName || 'No hay apellido'}`

    }


    
    const name = fullName('Tony')

    console.log({name})

})()