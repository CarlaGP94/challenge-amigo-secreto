//  Algoritmo.

//  Variables:
numAmigos = 0;
//  Listas:
nomAmigos = [];

//  Funciones para uso general -> reciben parámetros.
function bloquearBotones(boton){

    document.getElementById(boton).setAttribute('disabled','true');
}


function limpiarCaja(elemento){

    //  Esta función limpia el whitebox.
    document.getElementById(elemento).value = '';
}


function listaEnBlanco(ul){
    
    //  Esta función se asegura que las listas mostradas en etiquetas <ul> estén en blanco.
    let listaUL = document.getElementById(ul);
    listaUL.innerHTML = "";
}


function mostrarNombres(ul,lista){
    
    listaEnBlanco(ul);

    //  Bucle para agrega <li> por cada nombre ingresado.
    for (let i = 0; i < lista.length; i++){

        let li = document.createElement('li');
        li.innerHTML += lista[i];
        document.getElementById(ul).appendChild(li);
    }
}

//  Funciones específicas.
function cantAmigos(){
    
    //  Puede ingresar por única vez, la cantidad de personas por sortear.
    numAmigos = document.getElementById('cantidad').value;
    
    //  Cantidad mínima de jugaderes -> 3.
    if (numAmigos <= 2){
        alert('Ingrese al menos 3 personas para iniciar.')
    } else {    
        bloquearBotones('start');
        bloquearBotones('cantidad');}
}


function agregarAmigo(){

    //  Cada nombre ingresado en el whitebox se guarda en la variable.
    let nomIngresado = document.getElementById('amigo').value; 

    //  Debe ingresar primero la cantidad de jugadores, para luego los nombres.
    if (numAmigos <= 0) {
        alert('Por favor, ingrese la cantidad de jugadores primero.');

    //  No podrán ingresar una cadena vacía ni una menor a 3 caracteres.
    } else if (nomIngresado.length < 3){
        alert('Por favor, inserte un nombre de mínimo 3 caracteres.');

    //  Agrega el nombre en la lista, reestablece el whitebox, muestra la lista de nombres en pantalla.
    } else{ 
        nomAmigos.push(nomIngresado); 
        limpiarCaja('amigo');
        mostrarNombres('listaAmigos',nomAmigos);
        
        } 

    
    //  Una vez que se ingresan los nombres de todos los participantes, se bloquea el whitebox y el botón "añadir".
    // if (numAmigos == nomAmigos.length){
    //     bloquearBotones('amigo');
    //     bloquearBotones('añadir');
    // }
}


function sortearAmigo(){
    
    //  Inicializa array.
    let nomWin = [];

    //  Corrobora que efectivamente hayan agregado el nº y los nombres de los participantes.
    if (numAmigos >= 0 && nomAmigos.length == 0){
        alert('Ingrese al menos 3 personas y luego sus nombres antes de sortear.');

    } else { //  Sorteo
        //  1er bucle para evitar que muestre un error - 2do bucle toma un nombre pseudo aleatoreo.
        while (nomWin == "" || nomWin == undefined){
            for (i = 0; Math.floor(Math.random()*nomAmigos.length); i++){
                nomWin = [nomAmigos[i]];
                }
        }
    //  Borra la lista de nombres ingresados y solo muestra al ganador.
    listaEnBlanco('listaAmigos');
    mostrarNombres('resultado', nomWin);
    }
}