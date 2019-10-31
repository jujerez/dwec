/**Crea una página web que realice las siguientes funciones:
Imprimir, Abrir ventana (figura2), Abrir ventana y detenerla, Cerrar ventana nueva, Dar foco
ventana nueva, Quitar foco ventana nueva, Scroll absoluto (0, 1000) y Scroll relativo (0, 10).  */

var v;

imprimir.onclick = function() {
    window.print();
}
abrir.onclick = function() {
    v =window.open("","ventanita nueva","width=500, height=500");
}
abrir_detener.onclick = function() {
    
    v = window.open("","ventanita nueva","width=500, height=500");
    
}
cerrar_ventana.onclick = function() {
    v.close();
}

dar_foco.onclick = function() {
    v.focus();
}
quitar_foco.onclick = function () {
    v.blur();
}

st.onclick = function () {
    window.scrollTo(0,1000);
}

sb.onclick = function() {
    window.scrollBy(0,10);
}


