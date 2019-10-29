/**Crea una página web que realice las siguientes funciones:
Imprimir, Abrir ventana (figura2), Abrir ventana y detenerla, Cerrar ventana nueva, Dar foco
ventana nueva, Quitar foco ventana nueva, Scroll absoluto (0, 1000) y Scroll relativo (0, 10).  */

imprimir.onclick = function() {
    window.print();
}

abrir.onclick = function() {
    window.open(" ","ventanita nueva","width=500, height=500");
}

