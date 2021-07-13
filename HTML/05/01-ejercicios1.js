//console.table(peliculas);

/*
for (let i = 0; i < peliculas.length; i++) {
  if (peliculas[i].vote_average > 7) {
    console.log(`${peliculas[i].title}, Promedio ${peliculas[i].vote_average}`);
  }
}
*/

/*
let peliculasPorIdioma = (idioma) => {
    let peliculasSelecionadas =[];
    for(let peli of peliculas){
        if (peli.original_language === idioma){
            peliculasSelecionadas.push(peli);
        }
        
    }
    return peliculasSelecionadas;
}

console.table(peliculasPorIdioma("ru"));
*/
/*
console.table(peliculas);
*/
console.table(generos);

/*
let filtrarPeliculas = (generoBuscado) => {
  let peliculasFiltradas = [];
  let generoIdBuscado = "";
  for (let genero of generos) {
    if (genero.name === generoBuscado) {
      generoIdBuscado = genero.id;
      break;
    }
  }

  for (let peli of peliculas) {
    for (let x = 0; x <= peli.genre_ids.length; x++) {
      if (peli.genre_ids[x] === generoIdBuscado) {
        peliculasFiltradas.push(peli.title);
      }
    }
  }

  return peliculasFiltradas;
};

console.log(filtrarPeliculas("Thriller"));
*/

let nombreBuscado = "Thriller";

let buscarIdGenero = generos.filter(function (genero) {
  return genero.name === nombreBuscado;
});

let idGenero = buscarIdGenero[0].id;

console.log(idGenero);

let peliculasFiltradas = peliculas.filter(function (pelicula) {
  return pelicula.genre_ids.includes(idGenero);
});

console.table(peliculasFiltradas);
