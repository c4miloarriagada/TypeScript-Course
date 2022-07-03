// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto{
  encender: boolean;
  velocidadMaxima: number,
  acelear():void
}


const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason{
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean

}


const guason:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface Funcion {
  (ciudadanos:string[]): number
}

const ciudadGotica: Funcion = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}


// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface PersonaClase{
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio(): void
}


class Persona implements PersonaClase {
  public edad: number;
  public estadoCivil: string;
  public sexo: string;
  public nombre: string;

  imprimirBio(){
    
  }


}