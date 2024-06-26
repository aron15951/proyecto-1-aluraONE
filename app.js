let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${intentos === 1 ? 'intentos' : 'intentos'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero es menor');
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++; 
    }
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}


asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Escoge un numero del 1 al 10'); 