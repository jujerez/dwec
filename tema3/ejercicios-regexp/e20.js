/**20. Valida una matrícula moderna */
// Las consonantes que se utilizan para las matriculaciones son: B, C, D, F, G, H, J, K, 
// L, M, N, P, R, S, T, V, W, X, Y y Z; y se eliminan la Ñ y 
// la Q por posible confusión con la N y la O.
var pat = /^([0-9]){4}-([B-D]|[F-H]|[J|N]|P|[R-T]|[V-Z]){3}$/
var mat;

do {
    mat = prompt("Introduzca una matricula (9999-GGG)");
    pat.test(mat) ? alert("Matricula correcta") : alert("Matricula incorrecta, intentelo de nuevo")
} while (!pat.test(mat));