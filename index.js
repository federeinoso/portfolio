const body = document.body;
const modoOscuro = localStorage.getItem("modo-oscuro");
const svg = document.querySelectorAll("path");
if (modoOscuro) {
  body.classList.remove("modo-oscuro");
} else {
  body.classList.add("modo-oscuro");
}
const miSVG = document.getElementById("icons");

document.getElementById("switch").addEventListener("change", () => {
  body.classList.toggle("modo-oscuro");
  svg.forEach((path) => path.classList.toggle("svg-white"));
  localStorage.setItem("modo-oscuro", body.classList.contains("modo-oscuro"));
});
