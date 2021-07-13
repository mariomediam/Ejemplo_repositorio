
let titulo = document.getElementById("titulo");

//console.log(titulo);

//titulo.innerHTML = "<i>Nuevo titulo de mi APP</i>";

titulo.innerHTML = "Nuevo titulo de mi APP";

titulo.style.color ="red"

let listaItems = document.getElementsByClassName("lista-item")

//console.log(listaItems)

let arregloItems = Array.from(listaItems);

//console.log(arregloItems);

arregloItems.forEach((item) => {
    item.style.fontFamily = "Arial";
})

let cajitas = document.querySelectorAll(".cajita")

//console.log(cajitas);

cajitas.forEach((caja)=>{
    caja.innerHTML = "Contenido caja"; //añade texto
    caja.classList.add("resaltado") //añade una clase css al elemento
})

let miParrafo= document.querySelector("#miParrafo");

console.log(miParrafo);

miParrafo.classList.add("resaltado");


/*
setTimeout(()=>{
    miParrafo.classList.remove("resaltado") //quita clase css del elemento
}, 4000)
*/

/*
setInterval(() => {
    miParrafo.classList.toggle("resaltado");
}, 2000);
*/

let divContenido = document.getElementById("contenido");

divContenido.innerHTML = "<p>parrafo desde JS</p>";

let parrafo2 = document.createElement("p");

parrafo2.innerHTML = "Texto del párrafo 2";

divContenido.appendChild(parrafo2)

let imagen = document.createElement("img")

imagen.setAttribute("src", "https://picsum.photos/200");

divContenido.appendChild(imagen);

let seleccion = ["Gallese", "Corso", "Carrillo", "Lapadula", "Tapia"]

let lista = document.createElement("ul");

let htmlItems = "";

seleccion.forEach((jugador)=>{
    htmlItems += `<li>${jugador}</li>`
})

//console.log(htmlItems);

lista.innerHTML = htmlItems

divContenido.appendChild(lista);
