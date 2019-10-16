/**28.Buscar dentro de un texto palabras con una longitud determinada. 
 * La longitud la decidirá el usuario en tiempo de ejecución */

 var texto = document.getElementsByTagName('p')[0].innerHTML;
 
 var lon; 

// Validación de la longitud

do {

    lon = prompt("Introduzca la longitud de la cadena a buscar");

} while (!(lon > 0));

/*while (true) {

    lon = prompt("Introduzca la longitud de la cadena a buscar");
    if (lon>=0){
        break;
    }
}*/

 var pat = RegExp(`(^| )(\\w{${lon}})(?=[ .,;:])`,`gim`);

 var x;

 while ((x=pat.exec(texto)) != null) {
    alert(x[0]);
 }

 //alert(texto.match(pat));             // Muestra el array en un solo alert
