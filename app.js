// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

nomAmigos = [];


function agregarAmigo(){

    let nomIngresado = document.getElementById('amigo').value; //  Cada nombre ingresado en el whitebox se guarda en la variable.

    if (nomIngresado === ""){
        alert('Por favor, inserte un nombre válido.'); //  Evita que se tome una cadena vacía como nombre válido.
    } else{
        nomAmigos.push(nomIngresado); //  Guarda el nombre en la lista, reestablece el whitebox, muestra la lista al usuario.
        limpiarCaja();
        mostrarNombres()
    }
    console.log(nomAmigos)
    
}


function limpiarCaja(){

    document.getElementById('amigo').value = '';
}


function mostrarNombres(){
    
    let listaUL = document.getElementById('listaAmigos');
    listaUL.innerHTML = "";

    for (let i = 0; i < nomAmigos.length; i++){

        let li = document.createElement('li');
        li.innerHTML += nomAmigos[i]
        document.querySelector("#listaAmigos").appendChild(li)

    }


}

function sortearAmigo(){
    //
    Math.floor(Math.random()*nomAmigos.length)
}

