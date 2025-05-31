const preguntas = [
  {
    pregunta: "¿Cuál es el nombre del fontanero protagonista de la saga más famosa de Nintendo?",
    opciones: ["Luigi", "Toad", "Mario", "Wario"],
    respuesta: "Mario"
  },
  {
    pregunta: "¿Qué videojuego es conocido por la frase '¡It's dangerous to go alone! Take this.'?",
    opciones: ["Zelda", "Final Fantasy", "Dark Souls", "Metroid"],
    respuesta: "Zelda"
  },
  {
    pregunta: "¿Cuál es el nombre del mundo ficticio en el que ocurre Minecraft?",
    opciones: ["Overland", "Cubic World", "Enderland", "Overworld"],
    respuesta: "Overworld"
  },
  {
    pregunta: "¿Qué personaje es el rival de Sonic the Hedgehog?",
    opciones: ["Tails", "Knuckles", "Dr. Eggman", "Shadow"],
    respuesta: "Dr. Eggman"
  },
  {
    pregunta: "¿Qué consola introdujo por primera vez los cartuchos intercambiables?",
    opciones: ["Atari 2600", "NES", "Magnavox Odyssey", "Sega Genesis"],
    respuesta: "Atari 2600"
  },
  {
    pregunta: "¿En qué videojuego puedes encontrar la isla llamada Koholint?",
    opciones: ["The Legend of Zelda: Link's Awakening", "Wind Waker", "Ocarina of Time", "Twilight Princess"],
    respuesta: "The Legend of Zelda: Link's Awakening"
  },
  {
    pregunta: "¿Cuál de estos juegos fue desarrollado por Rockstar Games?",
    opciones: ["Assassin's Creed", "Red Dead Redemption", "Call of Duty", "Half-Life"],
    respuesta: "Red Dead Redemption"
  },
  {
    pregunta: "¿En qué año fue lanzado el primer juego de Pokémon?",
    opciones: ["1993", "1996", "1999", "2001"],
    respuesta: "1996"
  },
  {
    pregunta: "¿Cómo se llama la princesa que Mario siempre intenta rescatar?",
    opciones: ["Zelda", "Daisy", "Peach", "Rosalina"],
    respuesta: "Peach"
  },
  {
    pregunta: "¿Cuál es el nombre del protagonista de la saga God of War?",
    opciones: ["Kratos", "Ares", "Zeus", "Atreus"],
    respuesta: "Kratos"
  },
  {
    pregunta: "¿Qué videojuego popularizó el género Battle Royale?",
    opciones: ["Minecraft", "Call of Duty", "Fortnite", "Overwatch"],
    respuesta: "Fortnite"
  },
  {
    pregunta: "¿Qué estudio desarrolló The Last of Us?",
    opciones: ["Ubisoft", "Naughty Dog", "Electronic Arts", "Valve"],
    respuesta: "Naughty Dog"
  },
  {
    pregunta: "¿Cuál es el enemigo principal en la saga Halo?",
    opciones: ["The Swarm", "The Flood", "The Infected", "The Darkness"],
    respuesta: "The Flood"
  },
  {
    pregunta: "¿Cuál de estos juegos es exclusivo de Nintendo?",
    opciones: ["Gears of War", "The Legend of Zelda", "God of War", "Halo"],
    respuesta: "The Legend of Zelda"
  },
  {
    pregunta: "¿Qué color tiene el personaje principal de Hollow Knight?",
    opciones: ["Negro", "Blanco", "Azul", "Rojo"],
    respuesta: "Blanco"
  }
];

document.addEventListener('DOMContentLoaded', () => {

  // Variables principales 
  const form = document.getElementById('form-nombre');
  const input = document.getElementById('nombre');
  const btnIniciar = document.getElementById('btn-iniciar');
  const btnSiguiente = document.getElementById('btn-siguiente');

  // Botones de resultado
  const btnNuevo = document.getElementById('btn-nuevo');
  const btnMenu = document.getElementById('btn-menu');

  let nombreUsuario = '';
  let preguntasSeleccionadas = [];
  let preguntaActual = 0;
  let puntaje = 0;
  mostrarRanking(); // Llamado para que se muestre al inicio

  // Evento: activar botón si hay texto 
  input.addEventListener('input', () => {
    btnIniciar.disabled = input.value.trim() === '';
  });

  // Evento: enviar formulario e iniciar quiz
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    nombreUsuario = input.value.trim();
    mostrarQuiz();
  });

  // Evento: siguiente pregunta 
  btnSiguiente.addEventListener('click', () => {
    if (preguntaActual < preguntasSeleccionadas.length - 1) {
      preguntaActual++;
      mostrarPregunta();
    } else {
      mostrarResultados();
    }
  });

  // Lógica: iniciar el quiz 
  function mostrarQuiz() {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('quiz').classList.remove('oculto');
    seleccionarPreguntas();
    mostrarPregunta();
  }

  // Lógica: seleccionar preguntas aleatorias
  function seleccionarPreguntas() {
    preguntasSeleccionadas = [];
    const copia = [...preguntas];
    while (preguntasSeleccionadas.length < 10 && copia.length > 0) {
      const i = Math.floor(Math.random() * copia.length);
      preguntasSeleccionadas.push(copia.splice(i, 1)[0]);
    }
  }

  // Lógica: mostrar una pregunta 
  function mostrarPregunta() {
    const pregunta = preguntasSeleccionadas[preguntaActual];
    const contenedorPregunta = document.getElementById('pregunta');
    const contenedorOpciones = document.getElementById('opciones');

    contenedorPregunta.textContent = `${preguntaActual + 1}. ${pregunta.pregunta}`;
    contenedorOpciones.innerHTML = '';

    pregunta.opciones.forEach(opcion => {
      const btn = document.createElement('button');
      btn.textContent = opcion;
      btn.classList.add('opcion');
      btn.addEventListener('click', () => seleccionarOpcion(btn, pregunta.respuesta));
      contenedorOpciones.appendChild(btn);
    });
  }

  // Lógica: seleccionar una opción 
  function seleccionarOpcion(boton, respuestaCorrecta) {
    const seleccion = boton.textContent.trim();

    document.querySelectorAll('.opcion').forEach(btn => {
      btn.disabled = true;
      if (btn.textContent.trim() === respuestaCorrecta) {
        btn.classList.add('correcta');
      }
      if (btn === boton && seleccion !== respuestaCorrecta) {
        btn.classList.add('incorrecta');
      }
    });

    // Aumentar puntaje si es correcto
    if (seleccion === respuestaCorrecta) {
      puntaje++;
    }
  }

  function mostrarResultados() {
    document.getElementById('quiz').classList.add('oculto');
    document.getElementById('resultado').classList.remove('oculto');

    const porcentaje = Math.round((puntaje / preguntasSeleccionadas.length) * 100);
    document.getElementById('puntaje').textContent = `Puntaje: ${puntaje} / ${preguntasSeleccionadas.length}`;
    document.getElementById('porcentaje').textContent = `Porcentaje de aciertos: ${porcentaje}%`;

    guardarResultado(nombreUsuario, puntaje);
    mostrarRanking();
  }

  function reiniciarQuiz() {
    puntaje = 0;
    preguntaActual = 0;
    preguntasSeleccionadas = [];
    document.getElementById('resultado').classList.add('oculto');
    document.getElementById('quiz').classList.remove('oculto');
    seleccionarPreguntas();
    mostrarPregunta();
  }

  function reiniciarTodo() {
    location.reload(); // Simple y efectivo para reiniciar al menú
  }

  // Eventos
  btnNuevo.addEventListener('click', () => {
    reiniciarQuiz();
  });

  btnMenu.addEventListener('click', () => {
    reiniciarTodo();
  });

  function guardarResultado(nombre, puntaje) {
    const resultado = {
      nombre: nombre,
      puntaje: puntaje,
      fecha: new Date().toLocaleDateString()
    };

    // Obtener historial anterior o crear nuevo
    let historial = JSON.parse(localStorage.getItem('resultadosQuiz')) || [];

    // Agregar nuevo resultado
    historial.push(resultado);

    // Ordenar por puntaje (mayor primero)
    historial.sort((a, b) => b.puntaje - a.puntaje);

    // Mantener solo los 5 mejores
    historial = historial.slice(0, 5);

    // Guardar de nuevo
    localStorage.setItem('resultadosQuiz', JSON.stringify(historial));
  }

  function mostrarRanking() {
    const tabla = document.getElementById('tabla-ranking');
    tabla.innerHTML = ''; // Limpiar

    const historial = JSON.parse(localStorage.getItem('resultadosQuiz')) || [];

    historial.forEach(res => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${res.nombre}</td>
        <td>${res.puntaje}</td>
        <td>${res.fecha}</td>
      `;
      tabla.appendChild(fila);
    });
  }



});

