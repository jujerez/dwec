/**18. Solicita el ingreso de la coordenada de un punto. El formato a ingresar por teclado es:
(999,999)
Los números pueden tener entre 1 y 3 dígitos */

var coor;
var pat = /^\d{1,3},\d{1,3}$/;

do {
    coor=prompt("Introduzca la coordenada (999,999)");
} while (!pat.test(coor));





