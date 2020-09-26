/*Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
La cantidad de valores negativos ingresados.
La cantidad de valores positivos ingresados.
La cantidad de múltiplos de 15.
El valor acumulado de los números ingresados que son pares.*/
let negativos = 0;
let positivos = 0;
let mult15 = 0;
let sumapar = 0;
for (let i = 0; i < 10; i++) {
  const valor = parseInt(prompt("Ingrese un numero"));
  if (valor < 0) {
    negativos++;
  } else if (valor > 0) {
    positivos++;
  }
  if (valor % 15 == 0 && valor != 0) {
    mult15++;
  }
  if (valor % 2 == 0) {
    sumapar = sumapar + valor;
  }
}
document.write(`La cantidad de valores negativos son: ${negativos}<br>`);
document.write(`La cantidad de valores positivos son: ${positivos}<br>`);
document.write(`La cantidad de multiplos de 15 son: ${mult15}<br>`);
document.write(`La cantidad de pares acumulados son: ${sumapar}`);
