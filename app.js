let numerosecreto = 0;
let intentos = 0;
let listasorteo = [];
let numeromax = 10;

function asignarTextoElemento (elemento, texto){
    let elementohtml = document.querySelector (elemento);
    elementohtml.innerHTML = texto;
}
function verificarIntento (){
    
    let numerousuario = parseInt (document.getElementById ('numberUsuario').value);

    console.log ('intentos');
    if (numerousuario === numerosecreto){
        asignarTextoElemento('p', `Felicidades aceptaste en  ${intentos} ${(intentos == 1)? 'Vez' : 'Veces'}`);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
    }

    else if(numerousuario < numerosecreto){
        asignarTextoElemento('p', 'El número es mayor');
    }
    else {
        asignarTextoElemento('p', 'El número es menor');
    }

    intentos ++;
    limpiarCaja ();
    return;
}

function limpiarCaja (){
    document.querySelector ('#numberUsuario').value= "";
    
}

function condiciones (){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Ingresa un número del 1 al 10');
    numerosecreto = generador();
    intentos = 1;
    console.log (numerosecreto);

    
}

function inicio (){
    limpiarCaja();
    condiciones ();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condiciones ();

function generador(){
    let numerogenerado =  Math.floor(Math.random() * numeromax) + 1;
    console.log (numerogenerado);
    console.log (listasorteo);
 
   if (listasorteo.length == numeromax){
    asignarTextoElemento('p', 'Ya se soltearon todos los números');


   }
   else {

    if (listasorteo.includes(numerogenerado) ){
        return generador ();

    }
    else {
        listasorteo.push(numerogenerado)
        return numerogenerado;
    }

   }
    
}

