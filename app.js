const amigos = [];

const input = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const btnSortear = document.querySelector(".button-draw");

function actualizarLista() {
  // Vaciar lista
  listaAmigos.innerHTML = "";

  amigos.forEach((nombre, idx) => {
    const li = document.createElement("li");
    li.textContent = `${idx + 1}. ${nombre}`;
    listaAmigos.appendChild(li);
  });

  // Limpiar resultado anterior y habilitar/deshabilitar botón sortear
  if (amigos.length === 0) {
    resultado.innerHTML = "";
    btnSortear.setAttribute("disabled", "true");
    btnSortear.style.opacity = "0.6";
    btnSortear.style.cursor = "not-allowed";
  } else {
    btnSortear.removeAttribute("disabled");
    btnSortear.style.opacity = "";
    btnSortear.style.cursor = "pointer";
  }
}

function limpiarInput() {
  input.value = "";
  input.focus();
}

// Funcionalidades requeridas 
function agregarAmigo() {
  const nombre = input.value.trim();

  // Validación de entrada vacía
  if (!nombre) {
    alert("Por favor, ingresa un nombre válido.");
    input.focus();
    return;
  }



  amigos.push(nombre);
  actualizarLista();
  limpiarInput();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay nombres para sortear. Agrega al menos uno.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  // Mostrar resultado de forma accesible
  resultado.innerHTML = "";
  const li = document.createElement("li");
  li.textContent = ` El amigo secreto es: ${elegido}`;
  resultado.appendChild(li);
}

actualizarLista();
input.focus();
