function cosaDeRuleta(){
    let valor = document.getElementById("listaDeOpciones").value;
    let arreglo = valor.split(",");
    let aleatorio = 0;
    aleatorio = Math.floor(Math.random() * arreglo.length);
    document.getElementById("texto").innerHTML = arreglo[aleatorio];
}

function limpiar(){
    document.getElementById("texto").innerHTML = "";
}

function fecha(){
    let fecha = new Date;
    document.getElementById("fecha").innerHTML = fecha.getYear()+1900;
}

window.onload = fecha();