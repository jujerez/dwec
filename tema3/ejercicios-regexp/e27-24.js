/**27. Modificar los ejercicios 24,25 y 26 para que el patrón buscado lo pueda decidir el usuario en
tiempo de ejecución */


/**24. Buscar las palabras que comiencen por 'lo' dentro de una cadena.*/
    var frase = document.getElementsByTagName('p')[0];
    var rec = prompt("Busca palabras que comienzan por: ");
    var pat = RegExp(`^${rec}\\w*|\\s${rec}\\w*`,`gi`);
    var res;

    while((res=pat.exec(frase.innerHTML))!= null) {
        
        alert(res[0])
    }
