(()=>{

    const fullName =( firtsName:string, lastName?:string, upper:boolean = false):string => { //parametros opcionales deben ser al final


        if(upper){
            return `${firtsName} ${lastName || 'No hay apellido'}`.toUpperCase()

        }else{
            return `${firtsName} ${lastName || 'No hay apellido'}`
        }

    }


    
    const name = fullName('Tony', 'Stark', true)

    console.log({name})

})()