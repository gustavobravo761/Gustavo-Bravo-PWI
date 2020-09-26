//Desarrollar un programa que solicite la carga de 10 números e imprima la suma de lo últimos 5 valores ingresados.
let suma = 0;
for (let i = 0; i < 10; i++) {
  const valor = parseInt(prompt("Ingrese un numero"));
  if (i >= 5) {
    suma = suma + valor;
  }
}
document.write(`La suma de los ultimos 5 digitos es: ${suma}`);
