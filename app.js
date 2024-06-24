let numeroSecreto = generarNumeroSecreto();


function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = document.getElementById('valorUsuario').value;
    console.log(numeroSecreto)
    console.log(typeof(numeroSecreto))
    console.log(numeroUsuario) 
    console.log(typeof(numeroUsuario))
    console.log(numeroSecreto === numeroUsuario)
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}


asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Escoge un numero del 1 al 10'); 