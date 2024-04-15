"use strict";
let astronauta = new Set();
let contadorFallos = 0;
let listaNombres = document.getElementById("listaNombres");
let nuevoNombre = document.getElementById("nombres");
let fallosMuestra = document.getElementById("fallos");
let boton = (document.getElementById("boton"));
boton === null || boton === void 0 ? void 0 : boton.addEventListener("click", mostrar, false);
function mostrar() {
    if (astronauta.has(nuevoNombre.value)) {
        alert("duplicado");
        contadorFallos++;
        if (fallosMuestra != null)
            fallosMuestra.innerHTML = `numeroFallosTotales: ${contadorFallos}`;
    }
    else {
        astronauta.add(nuevoNombre.value.toString());
        if (listaNombres != null)
            listaNombres.innerHTML += `<li> ${nuevoNombre.value} </li>`;
        if (fallosMuestra != null)
            fallosMuestra.innerHTML = `numeroFallosTotales: ${contadorFallos}`;
    }
}
function imprimeNombre(elemento) {
    console.log(elemento.toString());
}
//let miConjunto = new Set<string>();
//miConjunto.add("Eva");
//miConjunto.add("pepe");
//miConjunto.add("Alberto");
//miConjunto.add("Juan");
//miConjunto.forEach(imprimeNombre);
//let valorNuevo: string = "ana";
//if (miConjunto.has(valorNuevo)) {
//    console.log("elemento repetido");
//}
//else {
//    miConjunto.add(valorNuevo);
//} for (let valor of miConjunto) {
//    console.log(valor);
//}
//miConjunto.delete("pepe");
//console.log("tamano cadena " + miConjunto.size);
//miConjunto.add("pepe");
//console.log("tamano cadena " + miConjunto.size);
///*miConjunto.clear();*/
//# sourceMappingURL=colecciones1.js.map