window.onload = function() {

/*2. El factorial de un número entero n es una operación matemática que consiste en
    multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Crea un script que calcule el factorial
    de un número entero. */

    var n = Number.parseInt(prompt("Introduzca un número:"));

    if (Number.isInteger(n) && n>=0 ) {
        alert(`El factorial de ${n} es ${fac(n)}`);
    } else
        alert("El parametro recibido no es un número [0-9]");

    function fac(n) {
        if (n==0)
        return 1;
      else
        return n * fac(n-1);
    }
}