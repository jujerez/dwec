window.onload = function() {

/* par o impar */

    var n = Number.parseInt(prompt("Introduzca un número:"));

    if(Number.isInteger(n)) {

        if (n%2 != 0)
            alert(`${n} es impar`);
        else
            alert(`${n} es par`);
    } else {
        alert ("Por favor, introuzca un numero [0-9]");
    }
}