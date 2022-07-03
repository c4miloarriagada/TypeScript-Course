(()=>{

    interface Client {
        name: string,
        age?: number
        adress: Adress,
        getFullAdress (id: string):string
    }

    interface Adress {
        id: number,
        zip: string,
        city: string
    }


    const client: Client = { 
        name: 'Camilo',
        age: 30,
        adress: {
            id: 125,
            zip: 'KUREEW2',
            city: 'Santiago'
        },
        getFullAdress(id: string){
            return this.adress.city
        }
    }
    const client2 : Client ={
        name: 'otro',
        age: 35,
        adress:{
            city:'otra ciudad',
            zip: 'dasdas',
            id: 3211231323
        },
        getFullAdress(id: string){
            return this.adress.city
        }

    }
    


})()