let divContenido = document.getElementById("contenido");

console.log(typeof divContenido);

divContenido.innerHTML = "<h1>Perú campeón</h1>"

let titulo2 = document.createElement("h2")

titulo2.innerHTML = "Segundo titulo";

divContenido.appendChild(titulo2);

let imagen = document.createElement("img");

imagen.setAttribute("src", "https://www.tekcrispy.com/wp-content/uploads/2018/02/madera.jpg")

imagen.setAttribute("width", "200px")

divContenido.prepend(imagen);

let bebidas = [
    {
        nombre:"Agua",
        saludable = true
    },
    {
        nombre:"Gaseosa",
        saludable = fasle
    },
    {
        nombre:"Agua",
        saludable = true
    },
    {
        nombre:"Jugo de papaya",
        saludable = true
    },
    {
        nombre:"Cerveza",
        saludable = false|
    }
]

// Crea un elemento <table> y un elemento <tbody>
let tabla   = document.createElement("table");
let tblBody = document.createElement("tbody");
let fila = document.createElement("tr");

// Crea las celdas
for (let i = 0; i < bebidas.length; i++) {

    

    var celda = document.createElement("td");
      var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);


}
    
