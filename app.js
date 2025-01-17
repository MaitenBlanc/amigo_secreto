// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica
// para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
  } else if (amigos.includes(nombre)) {
    // Comprueba si el nombre a agregar se encuentra en la lista
    alert("Este nombre ya está en la lista.");
  } else {
    amigos.push(nombre);
    recorrerAmigos();
  }

  document.getElementById("amigo").value = "";
}

function recorrerAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista está vacía.");
  } else {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let elemento = document.getElementById("resultado");
    elemento.innerHTML = amigos[indiceAleatorio];
  }
}
