let miBoton = document.getElementById("boton");
let divContenido = document.getElementById("contenido");

miBoton.addEventListener("click", () => {
  alert("Has hecho click");
});

let caja = document.createElement("div");
caja.classList.add("resaltado");

divContenido.appendChild(caja);

caja.addEventListener("mouseover", () => {
  console.log("Paso por encima");
});
let libros = [
  "La Sombra",
  "El tunel",
  "El vizconde",
  "La historia de la corrupción",
  "Madre",
  "Los 12 apostoles",
  "El espía del inca",
  "El Hobbit",
  "El fin de los tiempos",
  "El principito",
  "Un mundo para Julius",
  "Tokio Blues",
  "La chica invisible",
  "Blue Jeans",
  "El diario de Ana Frank",
];

libros.forEach((book) => {
  let nuevoParrafo = document.createElement("p");
  nuevoParrafo.innerHTML = book;
  divContenido.appendChild(nuevoParrafo);

  nuevoParrafo.addEventListener("dblclick", () => {
    alert(`Has hecho click en ${book}`);
  });
});
let lista = document.createElement;

let miPassword = document.createElement("input");

miPassword.setAttribute("type", "password");

let btnVer = document.createElement("button");

btnVer.innerHTML = "Ver Password";

divContenido.appendChild(miPassword);

divContenido.appendChild(btnVer);

let esVisible = true;

btnVer.addEventListener("click", () => {
  if (esVisible) {
    miPassword.setAttribute("type", "text");
    
  } else {
    miPassword.setAttribute("type", "password");
    
  }
  esVisible = !esVisible;
});
