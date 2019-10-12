/**Mostrar el número de palabras contienen 'te' dentro de una cadena. */
var frase = prompt("Introduzca una frase");
var pat = /^te\w*|\w*te\w*|\w*te/gi;
var res;
var contador= 0;
while ((res=pat.exec(frase))!= null) {
    ++contador;
}
alert(`En la frase hay ${contador} palabras que contienen te`)