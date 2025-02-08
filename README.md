![Portada con el título del sorteador e imagen explicativa](https://github.com/user-attachments/assets/9485b551-71e0-4898-a8bd-2f2cdefcf2fb)


## Programadora:

- Carla Pasandi

## Sobre el Sorteador de amigo secreto

¿Listos para llevar su juego de "Amigo Secreto" al siguiente nivel? Olvídense de los papelitos y las complicaciones. Con este sorteador online, la emoción y la sorpresa están garantizadas.

¿Cómo funciona?

- Ingresen los nombres: Simplemente introduzcan los nombres de los participantes y nuestro algoritmo hará la magia.
- Descubran a su amigo secreto: Cada persona tendrá su turno para revelar a quién le toca regalar. ¡La identidad de tu amigo secreto se mostrará en pantalla!

¿Por qué usar este sorteador?

- Fácil y rápido: ¡Dile adiós a los sorteos manuales! En segundos tendrás todo listo.
- Seguro y confiable: Nuestro algoritmo asegura un sorteo justo y aleatorio. ¡Sin trampas!
- Divertido y emocionante: La revelación en pantalla añade un toque de emoción y suspenso.

<h1 align= "center">¡Vamos a verlo!</h1>

![Pag principal](https://github.com/user-attachments/assets/ada33838-5a58-453f-b03d-eced88a930e8)


## :hammer:Características del proyecto

- `Diseño atractivo`: Diseño moderno y divertido, utilizando colores vibrantes y elementos visuales que invitan a jugar.
- `Interfaz amigable`: La página es fácil de navegar y entender, incluso para aquellos que nunca han usado un sorteador online.
- `Instrucciones claras`: He incluido instrucciones sencillas en cada paso para que el proceso sea rápido y sin complicaciones.

## 📁 Acceso al proyecto

**https://carlagp94.github.io/challenge-amigo-secreto/**

## :exclamation: Veamos un pequeño ejemplo

https://github.com/user-attachments/assets/8691acb8-65b6-4c03-a550-f11bc6400b00

## :memo: A tener en cuenta: datos input

- Para iniciar el sorteo, el primer dato entrante será la cantidad de personas (mínimo 3). La carga de este dato, se confirmará al presionar botón "Agregar".
- El segundo dato entrante es el nombre de cada uno de los paricipantes, y en este punto cabe destacar sus características:
  - Cada nombre tendrá un mínimo de 3 caracteres; admite letras, números y símbolos.
  - Para confirmar la carga, solo bastará con presionar el 2do botón de "Agregar".
  - En caso de existir un nombre repetido, el algoritno no permitirá que se agregue a la lista, en cambio sugerirá al usuario poner un apellido, apodo u otro nombre.
  - La lista de nombres se irá mostrando en pantalla a medida que los mismo se vayan ingresando.
  - Se deberá ingresar la misma cantidad de nombres que el número pactado en el paso anterior.
- Una vez completadas las condiciones principales, se bloquearán tanto los botones de "Añadir" como los whitebox.
  - Esto evitará que se agreguen nombres de más, a la misma persona varias veces, o lo contrario, alguno quede fuera del sorteo.

## :four_leaf_clover: ¡Sorteo!

- Al presionar el botón "Sortear amigo", el algortimo tomará de forma aleatoria un nombre y lo mostrará en pantalla:
  - Cada nombre podrá salir sorteado una única vez para evitar que a dos personas distintas les toque el mismo amigo secreto.
  - Una vez sorteados todos los nombres, la pantalla mostrará el mensaje correspondiente.

## :arrows_clockwise: Botón de reinicio

- Es posible reiniciar el sorteo en cualquier momento gracias al botón "Nuevo sorteo", la pantalla vuelve a las condiciones iniciales:
  - Sea porque hubo un error de tipeo en el nº o los nombres;
  - Porque es necesario un nuevo sorteo,
  - Etc.
