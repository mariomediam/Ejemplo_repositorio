/*
function buscaNombre(listaNombres, nombreBuscado) {
  let x = 0;
  while (x < listaNombres.length) {
    if (listaNombres[x] == nombreBuscado) {
      return x;
      break;
    }
    x++;
    if (x === listaNombres.length) {
      return -1;
    }
  }
}

console.log(buscaNombre(["Mario", "Rosy"], "Rosy"));
console.log(buscaNombre(["Mario", "Rosy"], "Mario"));
console.log(buscaNombre(["Mario", "Rosy"], "Juan"));
*/

function esPrimo(nro){
    for(let i=2; i<nro; i++){
        if (nro % i == 0){
            return false
            break
        }
    }
    return true
}

console.log(esPrimo(4))
console.log(esPrimo(13))
console.log(esPrimo(21))
console.log(esPrimo(31))