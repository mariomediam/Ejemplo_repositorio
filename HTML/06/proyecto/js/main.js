let ListaBebidas = [
  {
    id: 1,
    nombre: "Arroz con leche",
    descripcion:
      "Descripción 1",
    precio: 10,    
    imagen:
      "http://hotelesferre.com/wp-content/uploads/2018/09/Postres-Peruanos-e1536095640362.jpg",
  },
  {
    id: 2,
    nombre: "Mazamorra Peruana",
    descripcion:
      "Descripción 2",
    precio: 20,
    imagen:
      "http://hotelesferre.com/wp-content/uploads/2018/09/mazamorra-morada-768x412.jpg",
  },
  {
    id: 3,
    nombre: "Suspiro limeño",
    descripcion: "Descripción 3",
    precio: 30.00,
    imagen:
      "http://hotelesferre.com/wp-content/uploads/2018/09/Suspiro-a-la-lime%C3%B1a-1-768x501.jpg",
  },
  {
    id: 4,
    nombre: "Picarones",
    descripcion: "Descripción 4",
    precio: 40.00,
    imagen:
      "http://hotelesferre.com/wp-content/uploads/2018/09/Picarones-768x400.jpg",
  },
  {
    id: 5,
    nombre: "Chocotejas",
    descripcion: "Descripción 5",
    precio: 50.00,
    imagen:
      "http://hotelesferre.com/wp-content/uploads/2018/09/chocotejas-1024x683.jpg",
  },
  {
    id: 6,
    nombre: "Natilla",
    descripcion: "Descripción 6",
    precio: 60.0,
    imagen:
      "https://www.aboutespanol.com/thmb/2g-ag5VDgdejtewG12I3l0gp93s=/1506x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Natillas_piuranas_02-5b1c405f30371300368eafcb.jpg",
  },
  {
    id: 7,
    nombre: "Crema volteada",
    descripcion: "Descripción 7",
    precio: 70.0,
    imagen:
      "https://imgmedia.buenazo.pe/300x300/buenazo/original/2020/08/07/5f2dfad50aca947a0c31b33c.jpg",
  },
  {
    id: 8,
    nombre: "Turrón de Doña Pepa",
    descripcion: "Descripción 7",
    precio: 70.0,
    imagen:
      "https://imgmedia.buenazo.pe/300x300/buenazo/original/2020/09/30/5f72121ee9a19e4fe94b6237.jpg",
  },  
];

let carrito = [];

let tbodyCarrito = document.getElementById("tbody-carrito");

let dibujarTarjeta = () => {
  let divContenido = document.getElementById("contenido");

  ListaBebidas.forEach((Postre) => {
    let divTarjeta = document.createElement("div");
    divTarjeta.classList.add("tarjeta");
    let divImagen = document.createElement("div");
    divImagen.classList.add("imagen");
    let imagen = document.createElement("img");
    imagen.setAttribute("src", Postre.imagen);

    let divTexto = document.createElement("div");
    divTexto.classList.add("texto");
    let h4Titulo = document.createElement("h4");
    h4Titulo.innerHTML = Postre.nombre;
    let pDescrip = document.createElement("p");
    pDescrip.innerHTML = Postre.descripcion;

    let divPrecio = document.createElement("div");
    divPrecio.classList.add("precio");
    let spanPrecio = document.createElement("span");
    spanPrecio.innerHTML = "S/. " + Postre.precio;

    let btnAgregar = document.createElement("button");
    btnAgregar.classList.add("btn-agregar");
    btnAgregar.setAttribute("data-idPostre", Postre.id);
    btnAgregar.innerHTML = "Agregar";

    divPrecio.appendChild(spanPrecio);
    divPrecio.appendChild(btnAgregar);
    divTexto.appendChild(h4Titulo);
    divTexto.appendChild(pDescrip);
    divTexto.appendChild(divPrecio);
    divImagen.appendChild(imagen);
    divTarjeta.appendChild(divImagen);
    divTarjeta.appendChild(divTexto);

    divContenido.appendChild(divTarjeta);
  });
};

dibujarTarjeta();

let btnPagar = document.getElementById("btn-pagar");

let btnsAgregar = document.getElementsByClassName("btn-agregar");

//HtmlColection => Array
let arregloBtnsAgregar = Array.from(btnsAgregar);


//console.log(arregloBtnsAgregar);

arregloBtnsAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    let idPostreObtenido = boton.getAttribute("data-idPostre");
    let PostreObtenido = buscarPostre(idPostreObtenido);
    agregarCarrito(PostreObtenido);
  })
})


let vincularEvento = () => {

  let btnsQuitar = document.getElementsByClassName("btn-quitar");
  let arregloBtnsQuitar = Array.from(btnsQuitar);

  arregloBtnsQuitar.forEach((boton) => {
    boton.addEventListener("click", () => {
      let idPostreObtenido = boton.getAttribute("data-idPostre");
      quitarPostre(idPostreObtenido);
    })
  })  
}


let buscarPostre = ((idPostre) => {
  return ListaBebidas.find((item) => item.id == idPostre);
})

let agregarCarrito = (PostreAPedir) => {
  let indicePostre = carrito.findIndex((pedido) => pedido.Postre.id === PostreAPedir.id);
  if (indicePostre == -1){
    let pedido = {
      Postre: PostreAPedir,
      cantidad: 1
    }
    carrito.push(pedido);    
  } else {
    carrito[indicePostre].cantidad += 1    
  }
  console.log(carrito);
  dibujarCarrito();
}

let dibujarCarrito = () => {
  let htmlCarrito = "";

  carrito.forEach((pedido) => {
    htmlCarrito += `<tr>
      <td>${pedido.Postre.nombre}</td>
      <td>${pedido.cantidad}</td>
      <td>${pedido.Postre.precio}</td>
      <td>${pedido.cantidad * pedido.Postre.precio}</td>
      <td><button class="btn-quitar" data-idPostre=${pedido.Postre.id}>Quitar</button></td>
    </tr>`
  })

  tbodyCarrito.innerHTML = htmlCarrito;
  vincularEvento();
}


btnPagar.addEventListener("click", () => {
 calculaTotal();
})

let calculaTotal = () => {
  let msjTotal = "";
  let total = 0;

  carrito.forEach((pedido) => {
    msjTotal += `${pedido.cantidad} ${pedido.Postre.nombre}\n`;
    total += pedido.Postre.precio * pedido.cantidad
  })

  msjTotal += `Total: ${total}`;

  alert(msjTotal);
}

let quitarPostre = (idPostre) => {  
  let indicePostre = carrito.findIndex((pedido) => pedido.Postre.id == idPostre);
  if (carrito[indicePostre].cantidad  == 1 ){
    carrito.splice(indicePostre, 1);
  } else {
      carrito[indicePostre].cantidad--; 
  }
  
  dibujarCarrito();
}