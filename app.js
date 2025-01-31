//  Algoritmo.

//  Variables:
numAmigos = 0;
//  Listas:
nomAmigos = [];


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


function cantAmigos(){
    
    //  Puede ingresar por única vez, la cantidad de personas por sortear.
    numAmigos = document.getElementById('cantidad').value;
    bloquearBotones('start');
    bloquearBotones('cantidad');
}


function agregarAmigo(){
    
    //  Cada nombre ingresado en el whitebox se guarda en la variable.
    let nomIngresado = document.getElementById('amigo').value; 

    //  Control de filtros: no podrán ingresar una cadena vacía ni una menor a 3 caracteres.
    if (nomIngresado.length < 3){
        alert('Por favor, inserte un nombre de mínimo 3 caracteres.'); 
    } else{
        nomAmigos.push(nomIngresado); //  Guarda el nombre en la lista, reestablece el whitebox, muestra la lista al usuario.
        limpiarCaja('amigo');
        mostrarNombres('listaAmigos',nomAmigos);
        if (numAmigos == nomAmigos.length){
            bloquearBotones('amigo');
            bloquearBotones('añadir');
    }

    
    }
        // nomIngresado === "" || 
        // 

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


function sortearAmigo(){
    
    //  Deshabilita el botón "añadir" una vez presionado el botón "sortear amigo".
    bloquearBotones('añadir');

    //  Inicializa array.
    let nomWin = [];

    //  Corrobora que el array no esté vacío.
    if (nomAmigos.length == 0){
        agregarAmigo();

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