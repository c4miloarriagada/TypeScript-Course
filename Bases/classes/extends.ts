(()=>{

    class Avenger{
        constructor(
            public name?: string,
            public realName?: string,
        ){
            console.log('constructor avenger llamado!')
        }

        protected getFullname(){ //se puede acceder a propiedades protegidas
            return `${this.name} ${this.realName}`
        }


    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName:string,
            public isMutant: boolean
        ){
            super(name, realName)
            console.log('constructor xmen llamando')
        }

        get fullName(){
            return `${this.name} - ${this.realName}`;
        } 

        set fullName( name:string ){
            if(name.length < 3){
                throw new Error('Nombre mayor de 3 letras')
            }
            this.name = name;
        }

        getFullNameDesdeXmen(){
           console.log(super.getFullname())
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)
    wolverine.fullName = 'Camilo'
    console.log(wolverine.fullName)
    //wolverine.getFullNameDesdeXmen()

})()