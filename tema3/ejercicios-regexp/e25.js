/**25. Buscar y mostrar las palabras que terminen en 's' dentro de una cadena */
var frase = prompt("Introduzca una frase");
var pat = /\w*s/gi
var res;

while ((res=pat.exec(frase))!= null) {

    alert(res[0])
    
}
