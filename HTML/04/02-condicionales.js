/*
let precioSastre = parseFloat(prompt("Ingrese precio de sastre:"));

let dscto = 0.0;

if (precioSastre > 800){
    dscto = precioSastre * 0.15;
} else {
    dscto = precioSastre * 0.08;
}

console.log(`Precio del sastre ${precioSastre}, descuento: ${dscto}, precio final ${precioSastre-dscto}`)

*/
/*
let selecc = +prompt("Que toping desea agregar al helado 1) Oreo s/. 1.50, 2) Sublime S/2.50, 3) Chispitas S/0.50, 4) Aguaymanto S/. 4.00, 5) Ositos S/3.00");

let precioTopping = 0.0

if (selecc===1){
    precioTopping = 1.50;
} else if(selecc === 2)
{
        precioTopping = 2.50
} else if(selecc === 3)
{
        precioTopping = 0.50
}
else if(selecc === 4)
{
        precioTopping = 4.00
}
else if(selecc === 2)
{
        precioTopping = 3.00
}

console.log(`Precio del helado S/5.00, precio de Topping ${precioTopping}, precio final ${5+precioTopping}`)
*/

/*
let nroAsistentes = +prompt("Ingrese cantidad de platillos");

if (nroAsistentes > 300) {
    console.log(`Total de platillos: ${nroAsistentes}. Precio Final ${nroAsistentes*75}`)
} else if (nroAsistentes > 200) {
    console.log(`Total de platillos: ${nroAsistentes}. Precio Final ${nroAsistentes*85}`)
} else  if (nroAsistentes > 100)  {
    console.log(`Total de platillos: ${nroAsistentes}. Precio Final ${nroAsistentes*88}`)    
} else {
    console.log(`Total de platillos: ${nroAsistentes}. Precio Final ${nroAsistentes*90}`)    
}
*/

let cantidad = +prompt("Ingrese cantidad de kilos");
let tipo = prompt("Ingrese tipo A / B");
let tamanio = prompt("Ingrese tamaño 1 / 2");

let factor = 0;


if (tipo === "A"){
    if (tamanio === "1"){
        factor = 0.20;
    } 
    else {
        factor = 0.30;
    }
} else if (tipo==="B"){
    if (tamanio === "1"){
        factor = 0.35;
    } 
    else {
        factor = 0.50;
    }
}

console.log(factor);
console.log(`Precio final de venta: ${cantidad * (factor + 1) * 5}`);

