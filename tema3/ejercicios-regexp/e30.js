/**30. Extraer del body de un documento html todas las etiquetas junto con su contenido y al final
un resumen de éstas. En el caso de etiquetas anidadas, mostrar solo las más internas. EJ:
<h1>Título</h1>
<p>Lorem ipsum..</p>
Etiquetas encontradas: h1,p*/

var html =document.body.innerHTML;
var pat= /<(\w*)[^]*>\w.*<\/(\1)>/gim;
var x;
var cont = "Etiqueta más contenido:\n";
var tags = "Etiquetas encontradas:"
while((x=pat.exec(html))!=null) {
    cont += `${x[0]} \n`;
    tags += `${x[1]}, `;

}

console.log(`${cont}\n${tags}`);







