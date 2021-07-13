let miArray = ["Rosy", "Mario", "Camila", "Andrea", "Victoria"];

console.log("miArray inicial: ", miArray);

/*

// ---------------- 1 Ordena  -----------------

let miArrayOrdenado = miArray.sort();

console.log("miArray final: ", miArray);

console.log("miArrayOrdenado: ", miArrayOrdenado);

*/

/*
// ---------------- 2 Agregar al final -----------------
miArray.push("Espencer");

console.log("miArray final: ", miArray);
*/

// ----------------3  Quitar al final -----------------

/*
let itemEliminado = miArray.pop();

console.log("miArray final: ", miArray);

console.log("itemEliminado", itemEliminado)

*/

// ---------------- 4 Agregar al inicio -----------------

/*

miArray.unshift("Lourdes");

console.log("miArray final: ", miArray);

*/

// ---------------- 5 Quitar al inicio -----------------

/*

let itemEliminado = miArray.shift()

console.log("miArray final: ", miArray);

console.log("itemEliminado", itemEliminado)

*/

// ---------------- 6 Invertir orden -----------------

/*

miArray.reverse()

console.log("miArray final: ", miArray);

*/

// ---------------- 7 Extraer posiciones -----------------

/*

let itemExtraidos = miArray.slice(2, 4);

console.log("miArray final: ", miArray);

console.log("itemExtraidos: ", itemExtraidos);

*/

// ---------------- 8 Extraer posiciones -----------------

/*

let itemExtraidos = miArray.splice(2, 2);

console.log("miArray final: ", miArray);

console.log("itemExtraidos: ", itemExtraidos);

*/

// ---------------- 9 string to array -----------------

/*

let cadena ="a,b,c,d,e,f,g"

let miArray2 = cadena.split();

console.log("miArray2: ", miArray2);

*/

// ---------------- 10 array to string -----------------

/*

let miFamilia = miArray.join(",");

console.log("miFamilia: ", miFamilia);

*/

// ---------------- 11 forEach -----------------

/*

miArray.forEach(item => console.log(item.toUpperCase()));

let mayusculas = (item) => {
  console.log(item.toUpperCase());
}

miArray.forEach(mayusculas);

*/

// ---------------- 12 map -----------------

/*

let minusculas = (item) => {
  return item.toLowerCase();
}

let arrayMinusculas = miArray.map(minusculas);

console.log("miArray final: ", miArray);

console.log("arrayMinusculas: ", arrayMinusculas);

console.log("de otra forma", miArray.map(item => item.toLowerCase()));

*/

// ---------------- 13 filter -----------------

/*

miArray = [5,15,20,35,8,50];

console.log("miArray inicial: ", miArray);

let filtrados = miArray.filter(item => item < 30);

console.log("miArray final: ", miArray);

console.log("filtrados: ", filtrados);

let menoresA = (item) => {
  return item < 30;
}

console.log("filtrados de otra forma", miArray.filter(menoresA));

*/

// ---------------- 14 reduce -----------------

/*

miArray = [5,15,20,35,8,50];

console.log("miArray inicial: ", miArray);

let suma = miArray.reduce((suma, item) => suma + item);

console.log("suma", suma);

let fSuma = (suma, item) => {
  return suma += item;
}

let suma2 = miArray.reduce(fSuma,0);

console.log("suma2", suma2);

*/

// ---------------- 15 concatenar -----------------

/*

miArray2 = ["Lourdes", "Alexandra", "Spencer"];

miArray3 = miArray.concat(miArray2);

console.log("miArray final: ", miArray);

console.log("miArray2: ", miArray2);

console.log("miArray3: ", miArray3);

*/

// ---------------- 16 indexOf -----------------

/*

let posBuscado = miArray.indexOf("Camila");

console.log("posBuscado: ", posBuscado);

*/

// ---------------- 17 find -----------------

/*

miArray = [5,15,20,35,8,50];

console.log("miArray: ", miArray);

let selecc = miArray.find((item) => {
  return item >= 20;
})

console.log("selecc: ", selecc);

*/

// ---------------- 18 includes -----------------

/*

let selecc = miArray.includes("Andrea");

console.log(selecc);

*/


// ---------------- 19 split -----------------

miArray.splice(3, 0, "mama", "Lewis");

console.log("miArray final: ", miArray);