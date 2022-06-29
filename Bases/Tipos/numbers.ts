(() => {
  let avengers: number = 10;

  console.log(avengers);

  const villians: number = 20;

  if (avengers < villians) {
    console.log("estamos en problemas");
  } else {
    console.log("nos salvamos");
  }

  avengers = Number("55a"); // NAN ES CONSIDERADO UN NUMERO OJO

  console.log(avengers);
})();
