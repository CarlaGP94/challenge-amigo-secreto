//  Algoritmo.

//  Variables:
let numAmigos = 0;
let nomIngresado = "";
//  Listas:
nombreAmigos = [];
//  Funciones para uso general -> reciben parámetros:
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


//  Funciones específicas:
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
    nomIngresado = document.getElementById('amigo').value; 

    //  Debe ingresar primero la cantidad de jugadores, para luego los nombres.
    if (numAmigos <= 0) {
        alert('Por favor, ingrese la cantidad de jugadores primero.');


    //  No podrán ingresar una cadena vacía ni una menor a 3 caracteres.
    } else if (nomIngresado.length < 3){
        alert('Por favor, inserte un nombre de mínimo 3 caracteres.');

    //  Verifica que no se repitan los nombres, por el posible error de una equivocación en el tipeo del usuario o que hayan dos personas o más del mismo nombre y sean diferenciados a la hora del sorteo.
    } else if (nombreAmigos.includes(nomIngresado)){
        alert('Este nombre está repetido, por favor ingresa el apodo o el apellido de esta persona u otro nombre.');

    //  Agrega el nombre en la lista, reestablece el whitebox, muestra la lista de nombres en pantalla.
    } else{ 
        nombreAmigos.push(nomIngresado); 
        limpiarCaja('amigo');
        mostrarNombres('listaAmigos',nombreAmigos);
    }

    //  Una vez que se ingresan los nombres de todos los participantes, se bloquea el whitebox y el botón "añadir".
    if (numAmigos >= 3 && numAmigos == nombreAmigos.length){
        bloquearBotones('amigo');
        bloquearBotones('añadir');
    }
}


function sortearAmigo(){
    
    //  Inicializa array.
    nomWin = [];

    //  Corrobora que hayan ingresado los datos correspondientes y no estén en cero.
    if (numAmigos >= 0 && nombreAmigos.length == 0){
        alert('Ingrese al menos 3 personas y luego sus nombres antes de sortear.');

        //  En caso que la cantidad de partiipantes no coincida con la cantidad de nombres ingresados.
    } else if (numAmigos > nombreAmigos.length){ 
        alert("Ingrese los nombres de todos los participantes para inciar el sorteo.")

    } else { //  Sorteo
        //  1er bucle para evitar que muestre un error - 2do bucle toma un nombre pseudo aleatoreo.
            while (nomWin == "" || nomWin == undefined){
                for (let i = 0; Math.floor(Math.random()*nombreAmigos.length); i++){
                    nomWin = [nombreAmigos[i]];
                    }
            }
            //  Borra la lista de nombres ingresados y solo muestra al ganador.
            listaEnBlanco('listaAmigos');
            mostrarNombres('resultado', nomWin);
    }

    if (nombreAmigos.includes(nomWin[0])){
        
        console.log(nomWin)
    }

    console.log(nombreAmigos)
}

/* Errores para trabajar:

controlar el sorteo para que si o si salgan 1 vez c/u de los nombres ingresados (como en el juego del nº secreto)

reiniciar el juego
*/