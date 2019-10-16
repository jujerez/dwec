/**28.Buscar dentro de un texto palabras con una longitud determinada. 
 * La longitud la decidirá el usuario en tiempo de ejecución */

// Validación de la longitud
var lon;
do {
    lon = prompt("Introduzca la longitud de la cadena a buscar");
} while (!(lon >= 0));

var x;
var pat = RegExp(`(^| )(\\w{${lon}})(?=[ .,;:])`,`gim`);
var texto = document.getElementsByTagName('p')[0].innerHTML;

while ((x=pat.exec(texto)) != null) {
alert(x[0]);
}

//alert(texto.match(pat));             // Muestra el array en un solo alert
