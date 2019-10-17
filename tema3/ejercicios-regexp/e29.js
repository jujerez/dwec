/**9. Realiza un script que reciba una cadena y elimine las etiquetas <script> en el caso de que las
incluya. Mostrar la cadena por consola. */

var cad = prompt("Introduzca una cadena");
var pat = /^(<script[^]*>)\w*(<\/script>)$/;

