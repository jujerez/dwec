/** . Buscar la primera palabra de cada frase*/
var frase = prompt("Introduzca una frase")
var pat = /(\w* )|(\w*)/;
var array = pat.exec(frase);
alert(`La primera palabra es ${array[0]}`);