const professions = [
  "Abogado",
  "Actuario",
  "Arquitecto",
  "Azafata",
  "Biólogo",
  "Bombero",
  "Carpintero",
  "Chef",
  "Contador",
  "Dentista",
  "Diseñador",
  "Economista",
  "Electricista",
  "Enfermero",
  "Farmacéutico",
  "Fotógrafo",
  "Ingeniero",
  "Maestro",
  "Marketing",
  "Médico",
  "Periodista",
  "Piloto",
  "Plomero",
  "Policía",
  "Programador",
  "Psicólogo",
  "Terapeuta",
  "Trabajador",
  "Veterinario",
];
const animals = [
  "Ballena",
  "Caballo",
  "Cabra",
  "Cebra",
  "Cerdo",
  "Cocodrilo",
  "Conejo",
  "Delfín",
  "Elefante",
  "Gato",
  "Jirafa",
  "Lagarto",
  "León",
  "Lobo",
  "Mono",
  "Murciélago",
  "Oso",
  "Oveja",
  "Pájaro",
  "Pez",
  "Perro",
  "Rana",
  "Ratón",
  "Rata",
  "Serpiente",
  "Tiburón",
  "Tigre",
  "Tortuga",
  "Vaca",
  "Zorro",
];
const colors = [
  "Amarillo",
  "Azul",
  "Beige",
  "Blanco",
  "Bronce",
  "Cian",
  "Gris",
  "Lavanda",
  "Magenta",
  "Morado",
  "Marrón",
  "Naranja",
  "Negro",
  "Oro",
  "Plata",
  "Rojo",
  "Rosa",
  "Turquesa",
  "Verde",
  "Violeta",
];

let selectedWords = [];
let userSelection = [];

document.getElementById("generateBtn").addEventListener("click", generateWords);
document.getElementById("playBtn").addEventListener("click", playWords);
document.getElementById("submitBtn").addEventListener("click", checkSelection);

function generateWords() {
  selectedWords = [];
  userSelection = [];
  const wordList = document.getElementById("wordList");
  const selectOptions = document.getElementById("selectOptions");
  const result = document.getElementById("result");
  const category = document.getElementById("category").value;

  let wordArray;
  if (category === "professions") {
    wordArray = professions;
  } else if (category === "animals") {
    wordArray = animals;
  } else if (category === "colors") {
    wordArray = colors;
  }

  wordList.innerHTML = "";
  selectOptions.innerHTML = "";
  result.innerHTML = "";

  while (selectedWords.length < 5) {
    const word = wordArray[Math.floor(Math.random() * wordArray.length)];
    if (!selectedWords.includes(word)) {
      selectedWords.push(word);
    }
  }

  selectedWords.forEach((word, index) => {
    const select = document.createElement("select");
    select.id = `select${index}`;
    wordArray.forEach((optionWord) => {
      const option = document.createElement("option");
      option.value = optionWord;
      option.text = optionWord;
      select.appendChild(option);
    });
    selectOptions.appendChild(select);
  });

  document.getElementById("playBtn").disabled = false;
  document.getElementById("submitBtn").disabled = false;
}

function playWords() {
  selectedWords.forEach((word, index) => {
    setTimeout(() => {
      speak(word);
    }, index * 1000); // Delay of 1 second between words
  });
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES"; // Establecer el idioma a español
  speechSynthesis.speak(utterance);
}

function checkSelection() {
  const result = document.getElementById("result");
  userSelection = [];
  for (let i = 0; i < 5; i++) {
    const select = document.getElementById(`select${i}`);
    userSelection.push(select.value);
  }
  if (arraysEqual(selectedWords, userSelection)) {
    result.innerText = "¡Correcto!";
    result.style.color = "green";
  } else {
    result.innerText = "Incorrecto, intenta de nuevo.";
    result.style.color = "red";
  }
}

function arraysEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
