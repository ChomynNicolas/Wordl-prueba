let intentos = 6;
let diccionario = [
  "CRISTIANO",
  "ADIDAS",
  "SABER",
  "ANTIGUO",
  "PALA",
  "ASIDUO",
  "asa",
];
const palabra =
  diccionario[Math.floor(Math.random() * diccionario.length)].toUpperCase();
let numPal = palabra.length;
let resAnt;


const PRESION = document.getElementById("guess-button");
const GRID = document.getElementById("grid");
const INPUT = document.getElementById("guess-input");
const JUGAR = document.getElementById("jugar");
let error = document.getElementById("error");
let leyenda = document.getElementById("guess");
console.log(INPUT);
INPUT.setAttribute("maxLength", numPal);
INPUT.setAttribute("placeholder", "Letras: " + palabra.length);

JUGAR.addEventListener("click", (_) => {
  location.reload();
});
PRESION.addEventListener("click", intentar);

function intentar() {
  const ROW = document.createElement("div");
  ROW.className = "row";
  const RESP = dato();
  if (RESP === palabra) {
    terminar("<h1>GANASTE!</h1>");
    JUGAR.style.display = "block";
    PRESION.style.display = "none";
    intentos++;
    
  }
  if (RESP.length !== numPal) {
    error.innerHTML = "<h1>*Completar todas las letras</h1>";
    error.style = "color: red";
    return;
  } else error.style.display = "none";
  if(resAnt===RESP){
    error.innerHTML = "<h1>*Ingrese otra palabra</h1>";
    error.style = "color: red";
    return;
  } else error.style.display = "none";
  intentos--;

  for (i in palabra) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter";
    

    if (palabra.includes(RESP[i])) {
      if (RESP[i] === palabra[i]) {
        SPAN.style.backgroundColor = "#79b851";
      } else SPAN.style.backgroundColor = "#f3c237";
    } else {
      SPAN.style.backgroundColor = "#a4aec4";
    }
    SPAN.innerHTML = RESP[i];
    ROW.appendChild(SPAN);
  }

  
  GRID.appendChild(ROW);
  if (intentos == 0) {
    terminar("<h1>PERDISTE!</h1>");
    JUGAR.style.display = "block";
    PRESION.style.display = "none";
    return;
  }
  
  resAnt = RESP;
}

function dato() {
  let input = document.getElementById("guess-input");
  input = input.value;
  input = input.toUpperCase();
  return input;
}
function terminar(mensaje) {
  INPUT.disabled = true;
  PRESION.disabled = true;
  leyenda.innerHTML = mensaje;
}
