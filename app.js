// crearemos un juego del amigo secreto
// donde los usuarios podran agregar amigos a una lista
// y luego mostrar la lista de amigos agregados
// despues de que se haya hecho la eleccion, se mostrara un mensaje con el nombre del amigo secreto
// si elcampo de texto esta vacio, se mostrara un mensaje de error pidiendo que se inserte un nombre valido
// los amigos se guardaran en un array y se mostraran en una lista debajo del campo de texto
// despues que tenga la lista se eligira un amigo secreto al azar
// y se mostrara un mensaje con el nombre del amigo secreto elegido

let amigos = [];
let yaSorteado = false;

function agregarAmigo() {
    let amigosInput = document.getElementById('amigo');
    let nombre = amigosInput.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // Solo letras y espacios
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        alert("Solo se permiten letras en el nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Ese amigo ya está en la lista.");
        return;
    }
    amigos.push(nombre);
    amigosInput.value = "";
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (yaSorteado) {
        alert("Ya se ha realizado el sorteo. Reinicia el juego para volver a sortear.");
        return;
    }
    if (amigos.length === 0) {
        alert("No hay amigos para elegir.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `🎉 Felicidades, tu amigo secreto es: <b>${amigoSecreto}</b> 🎉`;
    yaSorteado = true;
}

function reiniciarJuego() {
    amigos = [];
    yaSorteado = false;
    mostrarListaAmigos();
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('amigo').value = "";
}

mostrarListaAmigos();