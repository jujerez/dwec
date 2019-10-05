/**5.Pide al usuario que introduzca una cadena y determinar si esa cadena está formada sólo por
letras mayúsculas, sólo por minúsculas o por una mezcla de ambas. */
var cadena = prompt("Introduzca una cadena");
var conta1 = 0;
var conta2 = 0;

for (let i = 0; i < cadena.length; i++) {    
    
    if(/[a-z]/.test(cadena.charAt(i)))  ++conta1;
    if(/[A-Z]/.test(cadena.charAt(i)))  ++conta2;
}

(conta1>0 && conta2==0) ? alert("Todas son minusculas") :
(conta1==0 && conta2>0) ? alert("Todas son mayusculas") : alert("Hay mayusculas y minusculas");
