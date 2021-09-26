let numberOfMultiplications = parseInt(
  prompt("Ingrese número entre 1 y 20 a multiplicar.")
);

let checkInteger = () => {
  while (
    numberOfMultiplications <= 0 ||
    numberOfMultiplications > 20 ||
    isNaN(numberOfMultiplications)
  ) {
    numberOfMultiplications = parseInt(
      prompt(
        "Número fuera de rango. Ingrese número entre 1 y 20 a multiplicar."
      )
    );
  }
};

let multiplication = (num1, num2) => {
  return num1 * num2;
};
let factorial = (num) => {
  var rval = 1;
  for (var i = 2; i <= num; i++) rval = rval * i;
  return rval;
};

let resultOfMultiplications = () => {
  let i = 1;
  while (i < numberOfMultiplications + 1) {
    let result = multiplication(numberOfMultiplications, i);
    console.log(`${i} x ${numberOfMultiplications} = ${result}`);
    i++;
  }
};

let resultOfFactorials = () => {
  let i = 1;
  while (i < numberOfMultiplications + 1) {
    let result = factorial(i);
    console.log(`Factorial de ${i} es: ${result}`);
    i++;
  }
};

checkInteger();
resultOfMultiplications();
resultOfFactorials();
