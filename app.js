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


function mostrarNombres(ul,lista){
    
    //  Selecciona donde se mostraran los nombres ingresados.
    let listaUL = document.getElementById(ul);
    listaUL.innerHTML = "";

    //  Bucle para agrega <li> por cada nombre ingresado.
    for (let i = 0; i < lista.length; i++){

        let li = document.createElement('li');
        li.innerHTML += lista[i];
        document.getElementById(ul).appendChild(li);
    }
}

function verfLista(){
    //
    if (nomAmigos.length == 0){
        agregarAmigo()
    } else {
        for (i = 0; Math.floor(Math.random()*nomAmigos.length); i++){
            let nomAzar = [nomAmigos[i]]
            limpiarCaja('listaAmigos')
            mostrarNombres('resultado',nomAzar)
            }
        }
    }

function sortearAmigo(){
    verfLista()
}