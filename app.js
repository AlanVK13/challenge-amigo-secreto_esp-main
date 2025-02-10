// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");
    
    // Validar que el nombre no esté vacío y no contenga números
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (/\d/.test(nombre)) {
        alert("No se permiten números en el nombre.");
        return;
    }
    
    if (amigos.length >= 5) {
        alert("Solo puedes agregar 5 amigos.");
        return;
    }
    
    amigos.push(nombre);
    input.value = ""; // Limpiar el input
    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 5) {
        alert("Debes agregar 5 amigos antes de sortear.");
        return;
    }
    const resultado = document.getElementById("resultado");
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
