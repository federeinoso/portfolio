const body = document.body;
const svg = document.querySelectorAll("path");
const miSVG = document.getElementById("icons");
const btn = document.getElementById("btn");
const switcher = document.getElementById("switch");

switcher.addEventListener("change", () => {
  if (switcher.checked) {
    btn.classList.add("btn-mode");
    btn.classList.remove("btn-light");
  } else {
    btn.classList.add("btn-light");
    btn.classList.remove("btn-mode");
  }
  body.classList.toggle("modo-oscuro");
  btn.classList.add("btn-mode");
  svg.forEach((path) => path.classList.toggle("svg-white"));
  localStorage.setItem("modo-oscuro", body.classList.contains("modo-oscuro"));
});

// const modoOscuro = localStorage.getItem("modo-oscuro");
// if (modoOscuro) {
//   body.classList.add("modo-oscuro");
// } else {
//   body.classList.remove("modo-oscuro");
// }
