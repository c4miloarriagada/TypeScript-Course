(()=>{

    class Apocalipsis{
        
        static instance: Apocalipsis;

        private constructor(public name: string){ //solo se puede llamar dentro de la clase


        }


        static callApocalipsis(): Apocalipsis{
             if( !Apocalipsis.instance ){
                Apocalipsis.instance = new Apocalipsis('soy el apocalipsis!!!!')
             }   

             return Apocalipsis.instance
        }

        changeName(newName: string):void{
            this.name = newName
        }

    }
    
    const apocalipsis1 = Apocalipsis.callApocalipsis()
    //const apocalipsis = new Apocalipsis('Soy apocalipsis')
   apocalipsis1.changeName('hola')
   console.log(apocalipsis1)

})()