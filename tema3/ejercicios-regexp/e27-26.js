/**27. Modificar los ejercicios 24,25 y 26 para que el patrón buscado lo pueda decidir el usuario en
tiempo de ejecución*/

/**26 Mostrar el número de palabras contienen 'te' dentro de una cadena. */
var rec = prompt("Mostrar el número de palabras contienen ...... dentro de una cadena.");
//var pat = /^te\w*|\w*te\w*|\w*te/gi;
var pat = RegExp(`^${rec}\\w*|\\w*${rec}\\w*|\\w*${rec}`,`gi`);
var res;
var contador= 0;
while ((res=pat.exec(document.getElementsByTagName('p')[0].innerHTML))!= null) {
    ++contador;
}
alert(`En la frase hay ${contador} palabras que contienen ${rec}`)