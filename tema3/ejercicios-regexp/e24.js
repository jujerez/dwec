/**24. Buscar las palabras que comiencen por 'lo' dentro de una cadena.*/
var cadena = prompt("Introduzca una frase");
var pat = /^(lo\w*)|(\slo\w*)/gi;
var res;

while((res=pat.exec(cadena))!= null) {
     
    alert(res[0])
}
    
