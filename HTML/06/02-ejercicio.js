let tabla = document.createElement("table");
let tblBody = document.createElement("tbody");

let columnasSeleccionadas = [
  "id",
  "title",
  "release_date",
  "original_language"
];

peliculas.forEach((pelicula, indice) => {
  let fila = document.createElement("tr");

  let celda = document.createElement("td");
  let textoCelda = document.createTextNode(indice + 1);
  celda.appendChild(textoCelda);
  fila.appendChild(celda);    

  columnasSeleccionadas.forEach((columna) => {
    let celda = document.createElement("td");
    let textoCelda = document.createTextNode(pelicula[columna]);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);    
  });

  tblBody.appendChild(fila);
});

tabla.appendChild(tblBody);

tabla.setAttribute("border", "2");

let divContenido = document.getElementById("contenido");

divContenido.appendChild(tabla);

// Crea las celdas

/*

for (let i = 0; i < peliculas.length; i++) {
  let fila = document.createElement("tr");

  let celda0 = document.createElement("td");
  let textoCelda0 = document.createTextNode(i + 1);
  celda0.appendChild(textoCelda0);

  let celda1 = document.createElement("td");
  let textoCelda1 = document.createTextNode(peliculas[i].id);
  celda1.appendChild(textoCelda1);

  let celda2 = document.createElement("td");
  let textoCelda2 = document.createTextNode(peliculas[i].title);
  celda2.appendChild(textoCelda2);

  let celda3 = document.createElement("td");
  let textoCelda3 = document.createTextNode(peliculas[i].release_date);
  celda3.appendChild(textoCelda3);

  let celda4 = document.createElement("td");
  let textoCelda4 = document.createTextNode(peliculas[i].original_language);
  celda4.appendChild(textoCelda4);

  fila.appendChild(celda0);
  fila.appendChild(celda1);
  fila.appendChild(celda2);
  fila.appendChild(celda3);
  fila.appendChild(celda4);

  tblBody.appendChild(fila);
}

tabla.appendChild(tblBody);
tabla.setAttribute("border", "2");

let divContenido = document.getElementById("contenido");

divContenido.appendChild(tabla);
*/
