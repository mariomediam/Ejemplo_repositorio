let misNotas = [11,8,16,15,6,20,0,9,10]


function aprobado(nota){
    return nota>= document.getElementById("textoNota").value;
}

function mostrarAprobados(){

    document.getElementById("notasAprobadas").innerHTML = misNotas.filter(aprobado);

}

