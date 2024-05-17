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
  "Perro",
  "Gato",
  "Elefante",
  "Tigre",
  "León",
  "Cebra",
  "Jirafa",
  "Mono",
  "Oso",
  "Lobo",
  "Conejo",
  "Zorro",
  "Caballo",
  "Vaca",
  "Cerdo",
  "Oveja",
  "Cabra",
  "Ratón",
  "Rata",
  "Murciélago",
  "Pájaro",
  "Pez",
  "Tiburón",
  "Ballena",
  "Delfín",
  "Serpiente",
  "Cocodrilo",
  "Lagarto",
  "Rana",
  "Tortuga",
];
const colors = [
  "Rojo",
  "Azul",
  "Verde",
  "Amarillo",
  "Naranja",
  "Morado",
  "Rosa",
  "Negro",
  "Blanco",
  "Gris",
  "Marrón",
  "Cian",
  "Magenta",
  "Turquesa",
  "Violeta",
  "Beige",
  "Lavanda",
  "Oro",
  "Plata",
  "Bronce",
];
const transportes = [
  "Avión",
  "Automóvil",
  "Barco",
  "Bicicleta",
  "Camioneta",
  "Camión",
  "Caravana",
  "Carro",
  "Cohete",
  "Dirigible",
  "Funicular",
  "Globo",
  "Helicóptero",
  "Lancha",
  "Monopatín",
  "Monorraíl",
  "Motocicleta",
  "Quad",
  "Patineta",
  "Submarino",
  "Tanque",
  "Taxi",
  "Tren",
  "Tranvía",
  "Tractor",
  "Trineo",
  "Trolebús",
  "Tuk-tuk",
  "Velero",
  "Velocípedo",
];
const pure = [
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
  "Perro",
  "Gato",
  "Elefante",
  "Tigre",
  "León",
  "Cebra",
  "Jirafa",
  "Mono",
  "Oso",
  "Lobo",
  "Conejo",
  "Zorro",
  "Caballo",
  "Vaca",
  "Cerdo",
  "Oveja",
  "Cabra",
  "Ratón",
  "Rata",
  "Murciélago",
  "Pájaro",
  "Pez",
  "Tiburón",
  "Ballena",
  "Delfín",
  "Serpiente",
  "Cocodrilo",
  "Lagarto",
  "Rana",
  "Tortuga",
  "Rojo",
  "Azul",
  "Verde",
  "Amarillo",
  "Naranja",
  "Morado",
  "Rosa",
  "Negro",
  "Blanco",
  "Gris",
  "Marrón",
  "Cian",
  "Magenta",
  "Turquesa",
  "Violeta",
  "Beige",
  "Lavanda",
  "Oro",
  "Plata",
  "Bronce",
  "Avión",
  "Automóvil",
  "Barco",
  "Bicicleta",
  "Camioneta",
  "Camión",
  "Caravana",
  "Carro",
  "Cohete",
  "Dirigible",
  "Funicular",
  "Globo",
  "Helicóptero",
  "Lancha",
  "Monopatín",
  "Monorraíl",
  "Motocicleta",
  "Quad",
  "Patineta",
  "Submarino",
  "Tanque",
  "Taxi",
  "Tren",
  "Tranvía",
  "Tractor",
  "Trineo",
  "Trolebús",
  "Tuk-tuk",
  "Velero",
  "Velocípedo",
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
  const wordCount = document.getElementById("wordCount").value;

  let wordArray;
  if (category === "professions") {
    wordArray = professions;
  } else if (category === "animals") {
    wordArray = animals;
  } else if (category === "colors") {
    wordArray = colors;
  } else if (category === "transportes") {
    wordArray = transportes;
  } else if (category === "pure") {
    wordArray = pure;
  }

  wordList.innerHTML = "";
  selectOptions.innerHTML = "";
  result.innerHTML = "";

  while (selectedWords.length < wordCount) {
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
  for (let i = 0; i < selectedWords.length; i++) {
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
