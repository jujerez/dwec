var v;

abrir.onclick = function() {
    v = open("auxiliar.html","New window","width=300, height=300");
}

moveto.onclick = function() {

    v.window.moveTo(500,150);
}

moveby.onclick = function() {
    v.window.moveBy(0,50);
}

resizeto.onclick = function() {
    v.resizeTo(500,500)
}

resizeby.onclick = function() {
    v.resizeBy(-50,-50);
}

cerrar.onclick = function() {
    v.close();
}
