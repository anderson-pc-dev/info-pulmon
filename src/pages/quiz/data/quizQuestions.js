export const quizQuestions = [
  {
    id: 1,
    type: "multiple-choice",
    question: "¿Cuál es la causa principal de la EPOC?",
    options: [
      "Contaminación del aire",
      "Tabaquismo",
      "Infecciones virales",
      "Factores genéticos"
    ],
    correctAnswer: "Tabaquismo",
    explanation: "El tabaquismo es responsable del 80-90% de los casos de EPOC, ya que el humo del cigarrillo daña irreversiblemente los pulmones."
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "¿Cuál de estos síntomas es más característico de la EPOC avanzada?",
    options: [
      "Estornudos frecuentes",
      "Cianosis (coloración azulada en labios/uñas)",
      "Dolor de cabeza",
      "Picor en la piel"
    ],
    correctAnswer: "Cianosis (coloración azulada en labios/uñas)",
    explanation: "La cianosis indica baja oxigenación en sangre, un signo de EPOC grave."
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "¿Qué bacteria causa la Tuberculosis?",
    options: [
      "Streptococcus pneumoniae",
      "Mycobacterium tuberculosis",
      "Escherichia coli",
      "Staphylococcus aureus"
    ],
    correctAnswer: "Mycobacterium tuberculosis",
    explanation: "La Tuberculosis es causada exclusivamente por la bacteria *Mycobacterium tuberculosis*."
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "¿Cuál es el primer síntoma más común de la Tuberculosis?",
    options: [
      "Fiebre y sudores nocturnos",
      "Dolor en las articulaciones",
      "Erupciones cutáneas",
      "Pérdida del gusto"
    ],
    correctAnswer: "Fiebre y sudores nocturnos",
    explanation: "Los síntomas iniciales suelen ser inespecíficos, pero la fiebre persistente y los sudores nocturnos son clave."
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "¿Qué medicamento es de última línea para tratar la TB resistente?",
    options: [
      "Paracetamol",
      "Linezolid (LZD)",
      "Amoxicilina",
      "Ibuprofeno"
    ],
    correctAnswer: "Linezolid (LZD)",
    explanation: "El Linezolid es un antibiótico potente reservado para casos de TB multirresistente (MDR-TB)."
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "¿Cuál es una característica del Asma?",
    options: [
      "Inflamación crónica de los bronquios",
      "Destrucción de los alvéolos",
      "Fibrosis pulmonar irreversible",
      "Infección bacteriana persistente"
    ],
    correctAnswer: "Inflamación crónica de los bronquios",
    explanation: "El Asma se define por la inflamación crónica y la hiperreactividad bronquial."
  },
  {
    id: 7,
    type: "multiple-choice",
    question: "¿Qué desencadena comúnmente crisis de Asma?",
    options: [
      "Alérgenos (como polen o ácaros)",
      "Consumo de agua fría",
      "Caminar despacio",
      "Dormir boca arriba"
    ],
    correctAnswer: "Alérgenos (como polen o ácaros)",
    explanation: "Los alérgenos, el aire frío o el ejercicio intenso pueden desencadenar broncoespasmos en pacientes asmáticos."
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "¿Qué vacuna se recomienda para prevenir formas graves de Tuberculosis en niños?",
    options: [
      "Vacuna contra la influenza",
      "Vacuna BCG",
      "Vacuna DPT",
      "Vacuna contra el sarampión"
    ],
    correctAnswer: "Vacuna BCG",
    explanation: "La vacuna BCG protege contra formas graves de TB (como la meningitis tuberculosa) en niños."
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "¿Cuál es el tratamiento más usado para controlar el Asma persistente?",
    options: [
      "Antibióticos orales",
      "Corticosteroides inhalados",
      "Analgésicos",
      "Quimioterapia"
    ],
    correctAnswer: "Corticosteroides inhalados",
    explanation: "Los corticosteroides inhalados son la base del tratamiento para reducir la inflamación en el Asma crónico."
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "¿Qué signo indica una crisis de Asma potencialmente mortal?",
    options: [
      "Estornudos",
      "Cianosis (labios azules)",
      "Dolor de garganta",
      "Tos seca ocasional"
    ],
    correctAnswer: "Cianosis (labios azules)",
    explanation: "La cianosis sugiere falta severa de oxígeno, requiriendo atención médica inmediata."
  },

  // IMAGE-MATCH: Tratamientos
  {
    id: 12,
    type: "image-match",
    question: "Relaciona el dispositivo con la enfermedad que más lo utiliza",
    images: [
      { id: "A", url: "https://www.lapatria.com/sites/default/files/styles/ampliar_945/public/noticia/2024-11/Los-inhaladores.jpg?itok=0gAxlRrx", alt: "Inhalador de asma" },
      { id: "B", url: "https://www.indushealthplus.com/media/media/news_media/anti-tb-drugs-article.jpg", alt: "Medicamentos antituberculosos" },
      { id: "C", url: "https://m.media-amazon.com/images/I/81Rz7S3MBrL._AC_SL1500_.jpg", alt: "Mascarilla de oxígeno" }
    ],
    options: ["Asma", "Tuberculosis", "EPOC"],
    correctMatches: {
      "A": "Asma",
      "B": "Tuberculosis",
      "C": "EPOC"
    },
    explanation: "El inhalador es típico del asma, los medicamentos antibióticos para la tuberculosis y la oxigenoterapia para EPOC grave."
  },

  // MULTIPLE-CHOICE: EPOC
  {
    id: 13,
    type: "multiple-choice",
    question: "¿Cuál de los siguientes NO es un factor de riesgo para EPOC?",
    options: [
      "Tabaquismo",
      "Exposición a biomasa",
      "Ejercicio regular",
      "Contaminación ambiental"
    ],
    correctAnswer: "Ejercicio regular",
    explanation: "El ejercicio regular es saludable y no es un factor de riesgo para EPOC."
  },
  {
    id: 14,
    type: "multiple-choice",
    question: "¿Qué prueba es fundamental para el diagnóstico de EPOC?",
    options: [
      "Espirometría",
      "Radiografía de abdomen",
      "Electrocardiograma",
      "Hemograma"
    ],
    correctAnswer: "Espirometría",
    explanation: "La espirometría mide la función pulmonar y es esencial para diagnosticar EPOC."
  },
  {
    id: 15,
    type: "multiple-choice",
    question: "¿Cuál es el síntoma cardinal del asma?",
    options: [
      "Disnea episódica",
      "Dolor torácico constante",
      "Hemoptisis",
      "Edema de miembros inferiores"
    ],
    correctAnswer: "Disnea episódica",
    explanation: "El asma se caracteriza por episodios de dificultad respiratoria (disnea) reversible."
  },
  {
    id: 16,
    type: "multiple-choice",
    question: "¿Cuál es el principal objetivo del tratamiento del asma?",
    options: [
      "Curar la enfermedad",
      "Prevenir exacerbaciones y controlar síntomas",
      "Eliminar la alergia",
      "Reducir la tos únicamente"
    ],
    correctAnswer: "Prevenir exacerbaciones y controlar síntomas",
    explanation: "El objetivo es mantener al paciente sin síntomas y evitar crisis."
  },
  {
    id: 17,
    type: "multiple-choice",
    question: "¿Cuál de los siguientes NO es un síntoma típico de tuberculosis pulmonar?",
    options: [
      "Tos crónica",
      "Pérdida de peso",
      "Sudoración nocturna",
      "Dolor lumbar"
    ],
    correctAnswer: "Dolor lumbar",
    explanation: "El dolor lumbar no es característico de tuberculosis pulmonar."
  },
  {
    id: 18,
    type: "multiple-choice",
    question: "¿Qué medida es clave para prevenir la transmisión de tuberculosis?",
    options: [
      "Uso de mascarilla",
      "Ejercicio físico",
      "Vacuna contra la gripe",
      "Tomar vitamina C"
    ],
    correctAnswer: "Uso de mascarilla",
    explanation: "El uso de mascarilla reduce la transmisión aérea de la bacteria."
  },
  {
    id: 19,
    type: "multiple-choice",
    question: "¿Cuál es el principal agente causal de la tuberculosis?",
    options: [
      "Mycobacterium tuberculosis",
      "Streptococcus pneumoniae",
      "Haemophilus influenzae",
      "Virus sincitial respiratorio"
    ],
    correctAnswer: "Mycobacterium tuberculosis",
    explanation: "La tuberculosis es causada por la bacteria Mycobacterium tuberculosis."
  },
  {
    id: 20,
    type: "multiple-choice",
    question: "¿Qué complicación grave puede causar la tuberculosis no tratada?",
    options: [
      "Meningitis",
      "Rinitis",
      "Otitis",
      "Sinusitis"
    ],
    correctAnswer: "Meningitis",
    explanation: "La tuberculosis puede diseminarse y causar meningitis, especialmente en niños."
  },

  {
    id: 2,
    type: "image-match",
    question: "Asocia cada imagen con su enfermedad correspondiente",
    images: [
      { id: "A", url: "/imagesQuiz/epocQuiz.jpg", alt: "Pulmón con EPOC" },
      { id: "B", url: "/imagesQuiz/tuberculosisQuiz.jpg", alt: "Pulmón con tuberculosis" },
      { id: "C", url: "/imagesQuiz/asmaQuiz.png", alt: "Pulmón con asma" }
    ],
    options: ["EPOC", "Tuberculosis", "Asma"],
    correctMatches: {
      "A": "EPOC",
      "B": "Tuberculosis",
      "C": "Asma"
    },
    explanation: "La EPOC se reconoce por perdida de elasticidad y un cambio de color notable en el pulmon(debido al tabaquismo), la Tuberculosis por la bacteria Mycobacterium y el Asma se caracteriza por la inflamación de los bronquios."
  },
];

export const quizConfig = {
  totalQuestions: 10,
  timeLimit: 10,
  pointsPerQuestion: 10,
  passingScore: 70
};