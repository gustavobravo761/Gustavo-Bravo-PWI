//Se ingresan por teclado tres números, si al menos uno de los valores ingresados es menores a 10, imprimir en la página la leyenda 'Alguno de los números es menor a diez'.
const num1 = parseInt(prompt("Ingrese un numero"));
const num2 = parseInt(prompt("Ingrese un numero"));
const num3 = parseInt(prompt("Ingrese un numero"));
if (num1 < 10 || num2 < 10 || num3 < 10) {
  document.write("Alguno de los números es menor a diez");
}
