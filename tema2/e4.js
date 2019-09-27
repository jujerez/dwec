window.onload = function() {

/*  4. Realiza un script que muestre en el documento los múltiplos de 8 comprendidos entre
        dos números que se solicitarán al usuario. No importa el orden en el que los inserte el
        usuario, siempre se presentarán de menor al mayor, ambos inclusive. */

    var n = Number.parseInt(prompt("Introduzca un número"));
    var n2 = Number.parseInt(prompt("Introduzca otro número"));
    var int = false;

   
    if(Number.isInteger(n) && Number.isInteger(n2)) {

        for (let i= n; i< n2; i++) {
            if(i%8==0)
            document.body.innerHTML += `${i}, `;    
        }
    } else {
        alert ("Por favor, introuzca un numero [0-9]");
    }


    
}