
function printToConsole(constructor: Function){

    console.log(constructor)

}

const printToConsoleConditional = ( print: boolean = false ):Function => {
    if( print ){
        return printToConsole;
    }else{
        return ()=>{}
    }
}

const blockPrototipe = function ( constructor : Function ){

    Object.seal( constructor )
    Object.seal( constructor.prototype )
}

function CheckValidPokemonId(){
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ){
        const originalMethod = descriptor.value;
       descriptor.value = ( id: number ) =>{
        if(id < 1 || id > 800){
            return console.error('el id del pokemon debe estar entre 1 y 800')
        }else{
            return originalMethod( id )
        }
       } 
    }
}


function readOnly ( writable: boolean = true ): Function{
    return function(target: any , propertyKey: string){

        const descriptor: PropertyDescriptor = {
            get(  ){

                 console.log( this )   
                return ' Camilo '
            },
            set( this, val ){
               Object.defineProperty( this, propertyKey, {
                value : val,
                writable: !writable,
                enumerable: false
               } )
            }
        }
        return descriptor
    }
}



@blockPrototipe
@printToConsoleConditional( true )
export class Pokemon{

    @readOnly()
    public publicApi: string = 'https://pokeapi.co'



    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDb(id: number){
        console.log(`Pokemon guardado correctamente ${id}`)

    }

}














