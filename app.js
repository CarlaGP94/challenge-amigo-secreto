//  Este algoritmo logra sortear un nombre para asignar "el amigo secreto" al usuario.
//  Además de cumplir con las consignas principales, también agregué algunos detalles y mejoras para agregar valor, aquí detallo:
/*
• El nombre debe contener mínimo 3 carecteres;
• Deshabilitar el botón "añadir" una vez oprimido el botón "sortear amigo" para que no puedan ingresar más nombres una vez iniciado el sorteo.
•
*/

numAmigos = 0;
nomAmigos = [];


function boquearBotones(boton){

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

    let numAmigos = document.getElementById('cantidad').value;
    boquearBotones('start');
    boquearBotones('cantidad');
    console.log(numAmigos);
}


function agregarAmigo(){
    
    let nomIngresado = document.getElementById('amigo').value; //  Cada nombre ingresado en el whitebox se guarda en la variable.


    if (nomIngresado === "" || nomIngresado.length < 3){
        alert('Por favor, inserte un nombre de mínimo 3 caracteres.'); //  Evita que se tome una cadena vacía como nombre válido.
    } else{
        nomAmigos.push(nomIngresado); //  Guarda el nombre en la lista, reestablece el whitebox, muestra la lista al usuario.
        limpiarCaja('amigo');
        mostrarNombres('listaAmigos',nomAmigos);
    }

        // boquearBotones('amigo');
        // boquearBotones('añadir');

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
    boquearBotones('añadir');

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