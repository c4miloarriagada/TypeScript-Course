(()=>{
    
    
    
    abstract  class Mutante { //sirve de cascaron para otras clases
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo a salvo!'
        }
    }

    class Villian extends Mutante{
        conquistarMundo(){
            return 'Mundo conquistado'
        }
    }

    const wolverine = new Xmen('Wolverine' , 'Logan')
    const magneto = new Villian('Magneto', 'Magnus')
    console.log(magneto.conquistarMundo())
    console.log(wolverine.salvarMundo())



    const printName = ( character:Mutante ) => {
        console.log(character.realName)
    }


    printName(magneto)

})()