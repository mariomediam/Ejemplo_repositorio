/*
let miPerro = {
  nombre: "neron",
  edad: 15,
  color: "blanco",
  habitos: ["escarbar", "ladrar", "jugar"],

  ladrar: function () {
    console.log("guau guau guau");
  },
};

miPerro.ladrar();
miPerro.color = "Gris";
console.log(miPerro.color);

miPerro.tamanio = true;

console.log(miPerro.tamanio);

delete miPerro.edad;
*/

//---------------------------------------------------------------
/*

let restaurante = {

    nombre : "Rest. Rosita",
    platillos: [
        {
            id:1,
            nombre:"Ceviche",
            precio:20
        },
        {
            id:2,
            nombre:"Seco de chavelo",
            precio:25
        },
        {
            id:3,
            nombre:"Sopa de novios",
            precio: 30
        }
    ],

    mostrarPlatillos: function(){
        console.log(restaurante.platillos);
    }
}

restaurante.mostrarPlatillos()
*/

//---------------------------------------------------------------

/*
let series=[
    {
        nombre:"Vikingos",
        descripcion:"El vikingo Ragnar Lothbrok es un joven agricultor y hombre de familia que se siente frustrado por las políticas de Earl Haraldson, el conde del lugar que envía a sus invasores vikingos al este de los países bálticos y Rusia, cuyos residentes son pobres como los escandinavos. Ragnar prefiere ir al oeste, al otro lado del océano, para descubrir nuevas civilizaciones",
        anio: 2013,
        finalizada: true,
        personajes:["Ragnar", "Ladgerda", "Biorn"]
    },
    {
        nombre:"The Walking Dead",
        descripcion:"este drama crudo describe las vidas de un grupo de sobrevivientes que está siempre en movimiento en busca de un hogar seguro durante las semanas y meses de un apocalipsis zombi. Sin embargo, la presión de estar con vida cada día, lleva a algunos del grupo a la crueldad profunda de cada ser humano y descubren que el miedo abrumador puede ser más mortal que los zombis que caminan a su alrededor. Los conflictos interpersonales pueden representar una amenaza mayor para su supervivencia que los caminantes que deambulan por las calles.",
        anio: 2010,
        finalizada: false,
        personajes:["Daryl Dixon", "Rick Grimes", "Maggie Greene"]
    },
    {
        nombre:"The Last Kingdom",
        descripcion:"El joven Uhtred pierde a su padre sajón en la batalla y su tío Aelfric le roba las tierras y la herencia. El muchacho también se convierte en guerrero, pero su familia sustituta es asesinada y Uhtred se encuentran solo.",
        anio: 2015,
        finalizada: false,
        personajes:["Rey Alfred", "Brida", "Leofric"]
    }
]

for (let i= 0; i< series.length; i++){
    console.log(`Serie: ${series[i].nombre}, año ${series[i].anio}, finalizada ${series[i].finalizada} `);
    console.log("Personajes:");
    for (let y=0; y< series[i].personajes.length; y++){
        console.log(series[i].personajes[y]);
    }
    console.log("");
}

console.table(series)
*/

let juegos = [
  {
    nombre: "Juego 1",
    precio: 10,
  },
  {
    nombre: "Juego 2",
    precio: 20,
  },
  {
    nombre: "Juego 3",
    precio: 30,
  },
  {
    nombre: "Juego 4",
    precio: 40,
  },
  {
    nombre: "Juego 5",
    precio: 50,
  },
];

let presupuesto = +prompt("Ingrese presupuesto");

let elegibles = [];

for (let x = 0; x < juegos.length; x++) {
  if (juegos[x].precio <= presupuesto) {
    elegibles.push(juegos[x]);
  }
}

console.log("Elegibles");
for (let y = 0; y < elegibles.length; y++) {
  console.log(`Nombre ${elegibles[y].nombre}, precio: ${elegibles[y].precio}`);
}
