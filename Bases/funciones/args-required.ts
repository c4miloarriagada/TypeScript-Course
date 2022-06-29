(()=>{

    const fullName =( firtsName:string, lastName:(string|boolean) ):string => {


     
        return `${firtsName} ${lastName}`

    }


    
    const name = fullName('Tony', 'Stark')

    console.log({name})

})()