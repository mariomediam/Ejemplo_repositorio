/*
let gato = {
    nombre:"Garfield",
    edad: 3,
    peso: 1,
    collor: "marron",
    mostrarInfo:function(){
        console.log(this);
    },
    mostrarNombre: () => {
        console.log(this);
    }
}

gato.mostrarInfo(gato);

gato.mostrarNombre()
*/

class Animal {
    constructor(nombre, edad, familia, tamanio){
        this.Nombre = nombre
        this.Edad = edad
        this.Familia = familia
        this.Tamanio = tamanio
    }

    correr(velocidad){
        console.log(`${this.Nombre} puede correr a ${velocidad}`);
    }

    detener(){
        console.log(`${this.Nombre} se detuvo, alerta`)
    }
}

let panda = new Animal("Panda", 20, "Mamifero", "Muy grande");

console.log(panda)

class Mascota{
    constructor(nombre, peso, nroPatas){
        this.nombre = nombre;
        this.peso = peso;
        this.nroPatas = nroPatas;
    }

    printInfo(){
        console.log(`Nombre: ${this.nombre}, Peso: ${this.peso}, Patas: ${this.nroPatas}`)
    }
}

class Conejo extends Mascota {
    constructor(nombre, peso, nroPatas, salto){
        super(nombre, peso, nroPatas);
        this.salto = salto
    }

    printInfo(){
        console.log(`Nombre: ${this.nombre}, Peso: ${this.peso}, Patas: ${this.nroPatas}, Salto: ${this.salto}`)
    }
}

let conejo = new Conejo("Bugs", 3, 4, "2m");

conejo.printInfo()