let divContenido = document.getElementById("contenido");
let miInput = document.getElementById("miInput");
let miForm = document.getElementById("formulario");

miInput.addEventListener("keyup", (evento) => {
  //console.log(evento.target.value);
  //console.log("Tecla presionada");
});

let boton = document.createElement("button");

boton.innerHTML = "Mostrar valor";

boton.addEventListener("click", () => {
  console.log(miInput.value);
});

divContenido.appendChild(boton);

let goToGoogle = document.createElement("a");

goToGoogle.setAttribute("href", "http://www.google.com");

goToGoogle.innerHTML = "Llevame a Google";

divContenido.appendChild(goToGoogle);

goToGoogle.addEventListener("click", (evento) => {
    evento.preventDefault()
})

miForm.addEventListener("submit", (evento) => {
    evento.preventDefault()
});