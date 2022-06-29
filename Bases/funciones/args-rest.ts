(()=>{

    const fullName = ( firstName:string, ...rest:string[] ) =>{ //el resto recibe el resto de parametros hay que asignarle tipo de dato
        return `${firstName} ${rest.join(' ')}`
    }

    const superman = fullName('clark', 'joseph', 'kent')
    console.log(superman)
})()