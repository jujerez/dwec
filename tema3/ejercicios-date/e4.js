/*4. Haz que el ordenador te salude educadamente dándote los buenos días, buenas tardes o
buenas noches dependiendo de la hora que sea.*/
var ahora = new Date();
var hora = ahora.getHours();
(hora>=7 && hora<=12)   ? alert("Buenos dias!!")    : 
(hora >12 && hora <=20) ? alert("Buenas Tardes!!")  :
(hora >20 && hora <7)   ? alert ("Buenas noches!!") : console.log("Hora no contemplada");