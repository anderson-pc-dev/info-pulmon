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
  }
];

export const quizConfig = {
  totalQuestions: 10,
  timeLimit: 10, 
  pointsPerQuestion: 10,
  passingScore: 70 
};