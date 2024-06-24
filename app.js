let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario(){
    alert('Funciona');
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}


asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Escoge un numero del 1 al 10'); 