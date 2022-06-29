(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Heroe: Volcan Negro`;
  const abc = 123;

  console.log(`i'm ${batman}, ${abc}`);
  console.log(batman.toLocaleUpperCase());

  console.log(batman[10]?.toUpperCase() || "NO ESTA PRESENTE");
})();
