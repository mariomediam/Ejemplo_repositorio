let formTarea = document.getElementById("formTarea");
let ulPendientes = document.getElementById("pendientes");

let arregloPendientes = [];

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let textoNuevaTarea = formTarea["tarea"].value;
  arregloPendientes.push(textoNuevaTarea);
  dibujarPendientes();
  formTarea.reset();
});

let dibujarPendientes = (tcTareaPendiente) => {
  ulPendientes.innerHTML = "";
  arregloPendientes.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    ulPendientes.appendChild(li);

    li.addEventListener("dblclick", () => {
      arregloPendientes.splice(arregloPendientes.indexOf(li.innerHTML), 1);
      dibujarPendientes();
    });
  });
};
