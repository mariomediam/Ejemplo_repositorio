/*
let nombre = prompt("Ingrese su nombre");

localStorage.setItem("nombre", nombre);

setTimeout(() => {
  let obtenido = localStorage.getItem("nombre");
  alert(obtenido);
}, 4000);

setTimeout(() => {
    localStorage.removeItem("nombre");    
  }, 8000);
*/

localStorage.setItem("ahorros", 5000);

let misAhorros = localStorage.getItem("ahorros");

let objTaza = {
  precio: 30,
  tamanio: "mediano",
  color: "blanco",
  material: "ceramica",
};

let objJason = JSON.stringify(objTaza);

console.log(objTaza);

console.log(objJason);

localStorage.setItem("objTaza", objTaza);
localStorage.setItem("JsonTaza", objJason);

setTimeout(() => {
  let objTazaObtenido = localStorage.getItem("objTaza");
  let JsonObtenido = localStorage.getItem("JsonTaza");
  console.log("objTazaObtenido", objTazaObtenido);
  console.log("JsonObtenido", JsonObtenido);
  let jsonConvertido = JSON.parse(JsonObtenido);
  console.log("jsonConvertido", jsonConvertido);
}, 3000);
