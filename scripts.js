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
  const form = document.getElementById('form-nombre');
  const input = document.getElementById('nombre');
  const btnIniciar = document.getElementById('btn-iniciar');

  input.addEventListener('input', () => {
    btnIniciar.disabled = input.value.trim() === '';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('quiz').classList.remove('oculto');
  });
});
