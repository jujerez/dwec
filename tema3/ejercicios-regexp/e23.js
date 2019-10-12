/** . Buscar la ultima palabra de cada frase*/
var frase = prompt("Introduzca una frase")
var pat = /\w*\S$/gm;
var array = pat.exec(frase);
array != null ? alert(`La ultima es: ${array}`) : alert(`"La ultima palabra" es un espacio`);