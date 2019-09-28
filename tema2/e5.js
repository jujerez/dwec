window.onload = function() {

/*  Solicita un número y muestra al usuario su tabla de multiplicar. */

    var n = Number.parseInt(prompt("Introduzca un número"));

    if(Number.isInteger(n)) {

        for (let i=0; i<=10; i++) {
            document.body.innerHTML += `${n} x ${i} = ${n*i} <br>`;    
        }
    } else {
        alert ("Por favor, introuzca un numero [0-9]");
    }


    
}