let astronauta = new Set<string>();
let listaFallos = new Set<string>();
let contadorFallos = 0;
let listaNombres = document.getElementById("listaNombres"); 


let nuevoNombre = (<HTMLInputElement>document.getElementById("nombres"));
let fallosMuestra = document.getElementById("fallos");
let boton = (document.getElementById("boton"));
boton?.addEventListener("click", mostrar, false);

function mostrar() {
    if (astronauta.has(nuevoNombre.value)) {
        
        alert("duplicado");
        contadorFallos++;
        listaFallos.add(nuevoNombre.value.toString());
        if (fallosMuestra != null) fallosMuestra.innerHTML = `numeroFallosTotales: ${contadorFallos}`;
    }
  
        else {
        astronauta.add(nuevoNombre.value.toString());
        if (listaNombres != null) listaNombres.innerHTML += `<li> ${nuevoNombre.value} </li>`; 
        if (fallosMuestra != null) fallosMuestra.innerHTML = `numeroFallosTotales: ${contadorFallos}`;
 

    } 
}
function imprimeNombre(elemento: any) {
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