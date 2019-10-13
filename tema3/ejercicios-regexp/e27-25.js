/**27. Modificar los ejercicios 24,25 y 26 para que el patrón buscado lo pueda decidir el usuario en
tiempo de ejecución */

/**25. Buscarlas palabras que terminen en 's' dentro de una cadena */
var rec = prompt("Buscar las palabras que terminen en: ");
var frase = document.getElementsByTagName('p')[0];
var pat2 = RegExp(`\\w*${rec}`,`gim`)
var res;

while ((res=pat2.exec(frase.innerHTML))!= null) {

    alert(res[0])
    
}