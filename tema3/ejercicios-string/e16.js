/* 16.Realiza un script que solicite una frase al usuario. Deberá indicar si aparece en ella o no la
palabra indicada por el usuario. En caso de que la encuentre indicar a partir de qué posición
se puede encontrar la primera coincidencia. Indicar por cuantos caracteres está formada la
palabra buscada y por último sustituirla 'dwecl'.  */

var fr = prompt("Introduzca una frase");
var pal = prompt("Introduzca una palabra");
var array = fr.split(" ");
var caracteres = 0;
var ocurrencia = 0;

if(!hayPalabra())
    document.write(`No hemos encontrado coincidencia`);
else
    document.write(`La palabra está formada por: ${caracteres}  caracteres <br>
                    La primera ocurrencia se encuentra en la posicion: ${ocurrencia} <br>
                    Frase cambiada: ${fr.replace(pal,"dewl")}`);


function hayPalabra() {

    for (let i = 0; i < array.length; i++) {

        if (array[i].localeCompare(pal)== 0) {
            caracteres = array[i].length;
            ocurrencia = fr.indexOf(pal,0);
            return true;
        }            
    }
   return false; 
}






