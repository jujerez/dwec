/**21. Confecciona una expresión regular que valide el ingreso del nombre de un día de la semana
y un número de 1 o 2 dígitos */

var pat =  /^(lunes|martes|miercoles|jueves|viernes)\d{1,2}$/i;
var s;

do {
    s = prompt("Introduzca el nombre de un dia de la semana seguido de dos numeros (lunes01)");
    !pat.exec(s) ? alert("nombre invalido, intentelo de nuevo") : alert("nombre valido")
} while (!pat.exec(s));