/*
let numeros = [26,36,-50,1,45,-14,87,92,124,-63];

let cantPos = 0;
let cantNeg = 0;
let i = 0;

while (i-numeros.length){
    if (numeros[i]>=0){
        ++cantPos ;
        console.log(numeros[i]);
    } else{
        ++cantNeg;
    }    
    i++;
}

console.log(`Total Positivos: ${cantPos}, Total Negativos: ${cantNeg}`)
*/


/*
let miNota = 0;
let sumaNota = 0;
let nroNotas = 0;
let operaNota = false;

do {
  operaNota = false;

  miNota = +prompt("Ingrese nota: (-1) para salir:");

  if (miNota >= 12 && miNota <= 20) {
    console.log(`Nota: ${miNota}, APROBADO`);

    operaNota = true;
  } else if (miNota >= 0 && miNota < 12) {
    console.log(`Nota: ${miNota}, DESAPROBADO`);

    operaNota = true;
  } else if (miNota != -1) {
    console.log(`Nota: ${miNota}, IVALIDA`);
  }

  if (operaNota == true) {
    sumaNota += miNota;

    nroNotas++;
  }
} while (miNota != -1);

console.log(`Promedio: ${sumaNota / nroNotas}`);
*/

// version corregida

/*
let miNota = 0;
let sumaNota = 0;
let nroNotas = 0;

do {
  miNota = +prompt("Ingrese nota: (-1) para salir:");

  if ((miNota >= 0 && miNota <= 20) || miNota == -1) {
    if (miNota != -1) {
      if (miNota >= 12 && miNota <= 20) {
        console.log(`Nota: ${miNota}, APROBADO`);
      } else if (miNota >= 0 && miNota < 12) {
        console.log(`Nota: ${miNota}, DESAPROBADO`);
      }
      sumaNota += miNota;
      nroNotas++;
    }
  } else {
    console.log(`Nota: ${miNota}, IVALIDA`);
  }
} while (miNota != -1);
console.log(`Promedio: ${sumaNota / nroNotas}`);

*/

//uso de filters

let notas = [15, 5, 18, 20, 9, 10 ,17, 11];

let aprobados1 = notas.filter(nota => nota >= 11);

console.log(`Aprobados1: ${aprobados1}`);

function faprobado(nota){
    return nota >= 11;
}

let aprobados2 = notas.filter(faprobado);


console.log(`Aprobados2: ${aprobados2}`);