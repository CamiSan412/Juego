<<<<<<< HEAD
let numeroSecreto = 0
let intentos = 0
let listaNumerosSorteados = []
let numeroMaximo = 10


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML= texto 
    return
} 


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value) 
    
    if( numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //ususario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es Menor')
        }else{
            asignarTextoElemento('p', 'El numero es Mayor')
        }
        intentos++
        limpiarCaja()
    }    
    return
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''
}


function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1

    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)

    //Si ya sorteamos todosa los numeros 
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto()
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }   
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto()
    intentos = 1
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja()

    //Indicar mensaje de intervalo de numeros, Generar el numero aleatorio, Inicilizar el numero de intentos
    condicionesIniciales()       

    //Deshabilitar el boton de Nuevo Juego   
    document.querySelector('#reiniciar').setAttribute('disabled', 'true') 
}

condicionesIniciales()







=======
let numeroSecreto = 0
let intentos = 0
let listaNumerosSorteados = []
let numeroMaximo = 10


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML= texto 
    return
} 


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value) 
    
    if( numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //ususario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es Menor')
        }else{
            asignarTextoElemento('p', 'El numero es Mayor')
        }
        intentos++
        limpiarCaja()
    }    
    return
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''
}


function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1

    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)

    //Si ya sorteamos todosa los numeros 
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto()
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }   
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto()
    intentos = 1
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja()

    //Indicar mensaje de intervalo de numeros, Generar el numero aleatorio, Inicilizar el numero de intentos
    condicionesIniciales()       

    //Deshabilitar el boton de Nuevo Juego   
    document.querySelector('#reiniciar').setAttribute('disabled', 'true') 
}

condicionesIniciales()







>>>>>>> b4b76df (Actualización del proyecto)
