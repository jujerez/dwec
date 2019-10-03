/*12.Solicitar una frase desde teclado, almacenar cada palabra en un array y mostrar los
siguientes datos:
- La primera palabra de la frase.
- La última palabra de la frase.
- El número de palabras de la frase. */

var frase = prompt("Introduzca una frase");
var array = frase.split(" ");
document.write(`La primera palabra de la frase es: ${array[0]}<br>
                La última palabra de la frase es: ${array[array.length-1]} <br>
                El número de palabras que contiene la frase son:  ${array.length-1}`);