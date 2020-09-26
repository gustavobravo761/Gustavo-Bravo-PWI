//Desarrollar un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
let par = 0;
let impar = 0;
for (let i = 0; i < 5; i++) {
  const valor = parseInt(prompt("Ingrese un numero"));
  valor % 2 == 0 ? par++ : impar++;
}
document.write(`La cantidad de numeros pares son: ${par}<br>`);
document.write(`La cantidad de numeros impares son: ${impar}`);
