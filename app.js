// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

nomAmigos = [];


function agregarAmigo(){

    let nomIngresado = document.getElementById('amigo').value; //  Cada nombre ingresado en el whitebox se guarda en la variable.

    if (nomIngresado === ""){
        alert('Por favor, inserte un nombre.'); //  Evita que se tome una cadena vacía como nombre válido.
    } else{
        nomAmigos.push(nomIngresado); //  Guarda el nombre en la lista, reestablece el whitebox, muestra la lista al usuario.
        limpiarCaja('amigo');
        mostrarNombres('listaAmigos',nomAmigos);
    }
}


function limpiarCaja(elemento){

    document.getElementById(elemento).value = '';
}


function listaEnBlanco(ul){
    
    //  Esta función se asegura que las etiquetas <ul> estén en blanco.
    let listaUL = document.getElementById(ul);
    listaUL.innerHTML = "";
}


function mostrarNombres(ul,lista){
    
    listaEnBlanco(ul)

    //  Bucle para agrega <li> por cada nombre ingresado.
    for (let i = 0; i < lista.length; i++){

        let li = document.createElement('li');
        li.innerHTML += lista[i];
        document.getElementById(ul).appendChild(li);
    }
}


function sortearAmigo(){
    
    //  Guarda en una lista el ganador del sorteo.
    let nomAzar = []

    //  Se asegura que haya un nombre ingresado
    if (nomAmigos.length == 0){
        agregarAmigo();

    } else { //  Sorteo
        //  El doble bucle asegura que muestre un nombre y no un error.
        while (nomAzar == "" || nomAzar == undefined){
            for (i = 0; Math.floor(Math.random()*nomAmigos.length); i++){
                nomAzar = [nomAmigos[i]];
                }
        }
    //  Borra la lista de nombres ingresados y solo muestra al ganador.
    listaEnBlanco('listaAmigos');
    mostrarNombres('resultado', nomAzar);
    }
}