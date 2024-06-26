let numeroSecreto = generarNumeroSecreto();


function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el numero secreto');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero es menor');
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
        }
    }
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}


asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Escoge un numero del 1 al 10'); 