// scripts.js

const preguntas = [
  {
    pregunta:
      "¿Cuál es el nombre del fontanero protagonista de la saga más famosa de Nintendo?",
    opciones: ["Luigi", "Toad", "Mario", "Wario"],
    respuesta: "Mario",
  },
  {
    pregunta:
      "¿Qué videojuego es conocido por la frase '¡It's dangerous to go alone! Take this.'?",
    opciones: ["Zelda", "Final Fantasy", "Dark Souls", "Metroid"],
    respuesta: "Zelda",
  },
  {
    pregunta:
      "¿Cuál es el nombre del mundo ficticio en el que ocurre Minecraft?",
    opciones: ["Overland", "Cubic World", "Enderland", "Overworld"],
    respuesta: "Overworld",
  },
  {
    pregunta: "¿Qué personaje es el rival de Sonic the Hedgehog?",
    opciones: ["Tails", "Knuckles", "Dr. Eggman", "Shadow"],
    respuesta: "Dr. Eggman",
  },
  {
    pregunta:
      "¿Qué consola introdujo por primera vez los cartuchos intercambiables?",
    opciones: ["Atari 2600", "NES", "Magnavox Odyssey", "Sega Genesis"],
    respuesta: "Atari 2600",
  },
  {
    pregunta: "¿En qué videojuego puedes encontrar la isla llamada Koholint?",
    opciones: [
      "The Legend of Zelda: Link's Awakening",
      "Wind Waker",
      "Ocarina of Time",
      "Twilight Princess",
    ],
    respuesta: "The Legend of Zelda: Link's Awakening",
  },
  {
    pregunta: "¿Cuál de estos juegos fue desarrollado por Rockstar Games?",
    opciones: [
      "Assassin's Creed",
      "Red Dead Redemption",
      "Call of Duty",
      "Half-Life",
    ],
    respuesta: "Red Dead Redemption",
  },
  {
    pregunta: "¿En qué año fue lanzado el primer juego de Pokémon?",
    opciones: ["1993", "1996", "1999", "2001"],
    respuesta: "1996",
  },
  {
    pregunta: "¿Cómo se llama la princesa que Mario siempre intenta rescatar?",
    opciones: ["Zelda", "Daisy", "Peach", "Rosalina"],
    respuesta: "Peach",
  },
  {
    pregunta: "¿Cuál es el nombre del protagonista de la saga God of War?",
    opciones: ["Kratos", "Ares", "Zeus", "Atreus"],
    respuesta: "Kratos",
  },
  {
    pregunta: "¿Qué videojuego popularizó el género Battle Royale?",
    opciones: ["Minecraft", "Call of Duty", "Fortnite", "Overwatch"],
    respuesta: "Fortnite",
  },
  {
    pregunta: "¿Qué estudio desarrolló The Last of Us?",
    opciones: ["Ubisoft", "Naughty Dog", "Electronic Arts", "Valve"],
    respuesta: "Naughty Dog",
  },
  {
    pregunta: "¿Cuál es el enemigo principal en la saga Halo?",
    opciones: ["The Swarm", "The Flood", "The Infected", "The Darkness"],
    respuesta: "The Flood",
  },
  {
    pregunta: "¿Cuál de estos juegos es exclusivo de Nintendo?",
    opciones: ["Gears of War", "The Legend of Zelda", "God of War", "Halo"],
    respuesta: "The Legend of Zelda",
  },
  {
    pregunta: "¿Qué color tiene el personaje principal de Hollow Knight?",
    opciones: ["Negro", "Blanco", "Azul", "Rojo"],
    respuesta: "Blanco",
  },
];


let tiempoRestante = 300; // 300 segundos = 5 minutos
let temporizadorId;

let nombreUsuario = "";
let preguntasSeleccionadas = [];
let preguntaActual = 0;
let puntaje = 0;

const form = document.getElementById("form-nombre");
const input = document.getElementById("nombre");
const btnIniciar = document.getElementById("btn-iniciar");
const btnSiguiente = document.getElementById("btn-siguiente");
const btnNuevo = document.getElementById("btn-nuevo");
const btnMenu = document.getElementById("btn-menu");
const tablaRankingEl = document.getElementById("tabla-ranking");
const contenedorPregunta = document.getElementById("pregunta");
const contenedorOpciones = document.getElementById("opciones");
const spanTiempo = document.getElementById("tiempo");

document.addEventListener("DOMContentLoaded", () => {
  mostrarRanking();
});

input.addEventListener("input", () => {
  btnIniciar.disabled = input.value.trim() === "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  nombreUsuario = input.value.trim();
  iniciarQuiz();
});

function iniciarQuiz() {
  // Ocultar la sección de inicio y muestro la del quiz
  document.getElementById("inicio").classList.add("oculto");
  document.getElementById("quiz").classList.remove("oculto");

  // 10 preguntas al azar
  preguntasSeleccionadas = [];
  const copia = [...preguntas];
  while (preguntasSeleccionadas.length < 10 && copia.length > 0) {
    const i = Math.floor(Math.random() * copia.length);
    preguntasSeleccionadas.push(copia.splice(i, 1)[0]);
  }
  
  preguntaActual = 0;
  puntaje = 0;
  tiempoRestante = 300; // Reinicio el cronómetro a 5:00

  //primera pregunta y inicia el cronómetro
  mostrarPregunta();
  iniciarTemporizador();
}

function mostrarPregunta() {
  const preguntaObj = preguntasSeleccionadas[preguntaActual];
  contenedorPregunta.textContent = `${preguntaActual + 1}. ${
    preguntaObj.pregunta
  }`;
  contenedorOpciones.innerHTML = "";

  //botón para cada opción
  preguntaObj.opciones.forEach((opcionTexto) => {
    const btn = document.createElement("button");
    btn.textContent = opcionTexto;
    btn.classList.add("opcion");
    btn.disabled = false;
    btn.addEventListener("click", () =>
      seleccionarOpcion(btn, preguntaObj.respuesta)
    );
    contenedorOpciones.appendChild(btn);
  });

  btnSiguiente.disabled = true;
}

function seleccionarOpcion(boton, respuestaCorrecta) {
  const seleccion = boton.textContent.trim();

  document.querySelectorAll("#opciones .opcion").forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent.trim() === respuestaCorrecta) {
      btn.classList.add("correcta");
    }
    if (btn === boton && seleccion !== respuestaCorrecta) {
      btn.classList.add("incorrecta");
    }
  });
  
  if (seleccion === respuestaCorrecta) {
    puntaje++;
  }

  btnSiguiente.disabled = false;
}

btnSiguiente.addEventListener("click", () => {
  if (preguntaActual < preguntasSeleccionadas.length - 1) {
    preguntaActual++;
    mostrarPregunta();
  } else {
    mostrarResultados();
  }
});

function iniciarTemporizador() {
  actualizarTiempo(); // Muestra inmediatamente 05:00
  temporizadorId = setInterval(() => {
    tiempoRestante--;
    if (tiempoRestante < 0) {
      clearInterval(temporizadorId);
      mostrarResultados();
    } else {
      actualizarTiempo();
    }
  }, 1000);
}

function actualizarTiempo() {
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  const mm = String(minutos).padStart(2, "0");
  const ss = String(segundos).padStart(2, "0");
  spanTiempo.textContent = `${mm}:${ss}`;
}

function mostrarResultados() {
  clearInterval(temporizadorId);
  document.getElementById("quiz").classList.add("oculto");
  document.getElementById("resultados").classList.remove("oculto");

  const porcentaje = Math.round(
    (puntaje / preguntasSeleccionadas.length) * 100
  );
  document.getElementById(
    "puntaje"
  ).textContent = `Puntaje: ${puntaje} / ${preguntasSeleccionadas.length}`;
  document.getElementById(
    "porcentaje"
  ).textContent = `Porcentaje de aciertos: ${porcentaje}%`;

  // Guardo el resultado en localStorage y actualizo el ranking
  guardarResultado(nombreUsuario, puntaje);
  mostrarRanking();
}

function reiniciarQuiz() {
  document.getElementById("resultados").classList.add("oculto");
  document.getElementById("quiz").classList.remove("oculto");
  tiempoRestante = 300;
  preguntaActual = 0;
  puntaje = 0;
  preguntasSeleccionadas = [];
  const copia = [...preguntas];
  while (preguntasSeleccionadas.length < 10 && copia.length > 0) {
    const i = Math.floor(Math.random() * copia.length);
    preguntasSeleccionadas.push(copia.splice(i, 1)[0]);
  }
  mostrarPregunta();
  iniciarTemporizador();
}

btnNuevo.addEventListener("click", () => {
  reiniciarQuiz();
});

btnMenu.addEventListener("click", () => {
  clearInterval(temporizadorId);
  location.reload(); // Recarga la página para limpiar todo y volver al inicio
});

function guardarResultado(nombre, puntaje) {
  const resultado = {
    nombre: nombre,
    puntaje: puntaje,
    fecha: new Date().toLocaleDateString(),
  };
  let historial = JSON.parse(localStorage.getItem("resultadosQuiz")) || [];
  historial.push(resultado);
  historial.sort((a, b) => b.puntaje - a.puntaje);
  historial = historial.slice(0, 5);
  localStorage.setItem("resultadosQuiz", JSON.stringify(historial));
}

function mostrarRanking() {
  const historial = JSON.parse(localStorage.getItem("resultadosQuiz")) || [];
  tablaRankingEl.innerHTML = "";
  historial.forEach((res) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${res.nombre}</td>
      <td>${res.puntaje}</td>
      <td>${res.fecha}</td>
    `;
    tablaRankingEl.appendChild(fila);
  });
}

