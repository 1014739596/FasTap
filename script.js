let taps = 0;
let tiempo = 10;
let corriendo = false;
let intervalo;

const contador = document.getElementById("contador");
const tapArea = document.getElementById("tapArea");
const startBtn = document.getElementById("startBtn");
const tiempoSelect = document.getElementById("tiempoSelect");

const resultadoBox = document.getElementById("resultado");
const tapsFinal = document.getElementById("tapsFinal");
const cpsFinal = document.getElementById("cpsFinal");
const calificacionTxt = document.getElementById("calificacion");

startBtn.addEventListener("click", iniciarTest);

tapArea.addEventListener("click", () => {
  if (!corriendo) return;

  taps++;
  contador.textContent = taps + " Taps";
});

function iniciarTest(){
  taps = 0;
  contador.textContent = "0 Taps";
  tiempo = parseInt(tiempoSelect.value);
  corriendo = true;

  resultadoBox.classList.add("hidden");
  tapArea.classList.add("active");

  intervalo = setTimeout(finalizarTest, tiempo * 1000);
}

function finalizarTest(){
  corriendo = false;
  tapArea.classList.remove("active");

  let cps = (taps / tiempo).toFixed(2);
  let calificacion = calcularCalificacion(cps);

  tapsFinal.textContent = "Taps: " + taps;
  cpsFinal.textContent = "CPS: " + cps;
  calificacionTxt.textContent = "Calificación: " + calificacion + "/10";

  resultadoBox.classList.remove("hidden");
}

function calcularCalificacion(cps){
  if(cps >= 12) return 10;
  if(cps >= 10) return 9;
  if(cps >= 9) return 8;
  if(cps >= 8) return 7;
  if(cps >= 7) return 6;
  if(cps >= 6) return 5;
  if(cps >= 5) return 4;
  if(cps >= 4) return 3;
  if(cps >= 3) return 2;
  return 1;
}

function reiniciar(){
  taps = 0;
  contador.textContent = "0 Taps";
  resultadoBox.classList.add("hidden");
}
