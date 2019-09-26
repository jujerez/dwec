window.onload = function() {

    /*1. Realiza un script que le pregunte al usuario la nota obtenida en un examen, y en función
    del resultado devuelva “Suspenso”, “Aprobado”, “Notable” o “Sobresaliente”. Realiza
    otra versión utilizando el operador condicional ?:*/

    // -------------- Versión 1 ------------------

    var n = Number.parseInt(prompt("Introduzca la nota obtenida en el examen"));

    if (Number.isInteger(n)) {
        if (n<5)
            alert("Suspenso");
        else if (n>=5 && n<7)
            alert("Aprobado");
        else if (n>=7 && n<9)
            alert("Notable");
        else if (n>=9 && n<=10)
            alert("Sobresaliente");
        else 
            alert("Nota invalida, la nota debe estar comprendia entre [0-10]")
    } else {
        alert (`${n}, no es número`);
    }

    // ---------------- Versión 2 -------------------

    var n = Number.parseInt(prompt("Introduzca la nota obtenida en el examen"));
    

}