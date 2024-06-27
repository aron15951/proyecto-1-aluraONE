let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no ha acertado
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero es menor');
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++; 
        limpiarInput();
    }
    return;
}


function limpiarInput(){
    let input = document.querySelector('#valorUsuario').value = '';
}   

function generarNumeroSecreto(){
    // si el número generado ya fue incluido en la lista
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}


function mensajesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Escoge un numero del 1 al ${numeroMaximo}`); 
    numeroSecreto =  generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarInput();
    mensajesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

