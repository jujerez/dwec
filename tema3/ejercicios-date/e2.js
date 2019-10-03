/*2. Calcula tu edad, sin utiliza ningún método, trabajando con los milisegundos. */
var ahora = new Date();
var fechNac = new Date(1983,06,17);
document.write(`Mi edad en milisegundos: ${ahora-fechNac}<br> 
                Mi edad en años: ${Math.trunc((ahora-fechNac)/1000/60/60/24/365)}`);