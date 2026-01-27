const body = document.body;
const svg = document.querySelectorAll("path");
const btn = document.getElementById("btn");
const switcher = document.getElementById("switch");

// Función para aplicar el modo oscuro
function aplicarModoOscuro(activar) {
  if (activar) {
    body.classList.add("modo-oscuro");
    btn.classList.add("btn-mode");
    btn.classList.remove("btn-light");
    svg.forEach((path) => path.classList.add("svg-white"));
    switcher.checked = true;
  } else {
    body.classList.remove("modo-oscuro");
    btn.classList.add("btn-light");
    btn.classList.remove("btn-mode");
    svg.forEach((path) => path.classList.remove("svg-white"));
    switcher.checked = false;
  }
}

// Cargar preferencia guardada al iniciar
const modoOscuroGuardado = localStorage.getItem("modo-oscuro");

if (modoOscuroGuardado === "true") {
  aplicarModoOscuro(true);
} else {
  aplicarModoOscuro(false);
}

// Event listener para el toggle
switcher.addEventListener("change", () => {
  const activar = switcher.checked;

  aplicarModoOscuro(activar);
  localStorage.setItem("modo-oscuro", activar.toString());
});
