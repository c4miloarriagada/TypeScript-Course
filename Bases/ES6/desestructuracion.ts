(()=>{


    type Avengers = {
        nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }


    const {poder, vision} = avengers;

    console.log(poder.toFixed(5), vision.toLocaleUpperCase())

    const printAvenger = ({vision, ...resto}: Avengers) =>{
        console.log(vision, resto)
    }
    printAvenger(avengers)


    const avengersArr:[string, boolean, number] = ['Cap. America', true , 150.25;
    const [ capitan , ironMan , hulk ] = avengersArr;

    console.log(capitan)



})()