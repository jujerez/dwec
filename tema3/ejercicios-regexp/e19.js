/**19. Valida el ingreso de una hora con el formato hh:mm:ss o hh:mm */
var pat = /^([01]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/
var hora;

do {
    hora = prompt("Introduzca una hora(hh:mm:ss)|(hh:mm)")
} while (!pat.test(hora));