export const quizQuestions = [
  {
    id: 1,
    type: "multiple-choice",
    question: "¿Cuál de los siguientes es el síntoma más común de la enfermedad pulmonar obstructiva crónica (EPOC)?",
    options: [
      "Dolor en las articulaciones",
      "Dificultad para respirar (disnea)",
      "Erupciones cutáneas",
      "Visión borrosa"
    ],
    correctAnswer: "Dificultad para respirar (disnea)",
    explanation: "La disnea o dificultad para respirar es el síntoma principal de la EPOC, especialmente durante la actividad física."
  },
  {
    id: 2,
    type: "true-false",
    question: "El asma es una enfermedad contagiosa.",
    options: [
      "Verdadero",
      "Falso"
    ],
    correctAnswer: "Falso",
    explanation: "El asma no es contagiosa. Es una condición crónica inflamatoria de las vías respiratorias."
  },
  {
    id: 3,
    type: "image-selection",
    question: "Selecciona la imagen que representa un pulmón sano:",
    images: [
      { id: "A", url: "/images/lung-healthy.jpg", alt: "Pulmón sano" },
      { id: "B", url: "/images/lung-copd.jpg", alt: "Pulmón con EPOC" },
      { id: "C", url: "/images/lung-cancer.jpg", alt: "Pulmón con cáncer" }
    ],
    correctAnswer: "A",
    explanation: "La imagen A muestra un pulmón sano, sin daños visibles o inflamación."
  },
  {
    id: 4,
    type: "fill-blank",
    question: "El __________ es el principal órgano del sistema respiratorio donde ocurre el intercambio de gases.",
    correctAnswer: "pulmón",
    explanation: "Los pulmones son los órganos principales donde ocurre el intercambio de oxígeno y dióxido de carbono."
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "¿Cuál de estos factores es la principal causa del cáncer de pulmón?",
    options: [
      "Consumo excesivo de azúcar",
      "Tabaquismo",
      "Exposición a la luz solar",
      "Nadar en piscinas cloradas"
    ],
    correctAnswer: "Tabaquismo",
    explanation: "El tabaquismo es responsable de aproximadamente el 85% de los casos de cáncer de pulmón."
  },
  {
    id: 7,
    type: "multiple-choice",
    question: "¿Qué prueba diagnóstica mide la capacidad pulmonar?",
    options: [
      "Electrocardiograma",
      "Espirometría",
      "Resonancia magnética",
      "Análisis de sangre"
    ],
    correctAnswer: "Espirometría",
    explanation: "La espirometría es la prueba estándar para evaluar la función pulmonar."
  },
  {
    id: 8,
    type: "true-false",
    question: "La fibrosis pulmonar es reversible con tratamiento adecuado.",
    options: [
      "Verdadero",
      "Falso"
    ],
    correctAnswer: "Falso",
    explanation: "La fibrosis pulmonar causa cicatrización permanente del tejido pulmonar."
  },
  {
    id: 9,
    type: "fill-blank",
    question: "El término médico para la falta de oxígeno en los tejidos es __________.",
    correctAnswer: "hipoxia",
    explanation: "La hipoxia se refiere a niveles insuficientes de oxígeno en los tejidos corporales."
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "¿Cuál de estos NO es un método de prevención de enfermedades pulmonares?",
    options: [
      "Vacunación contra la influenza",
      "Evitar fumar",
      "Uso de protector solar",
      "Reducir la exposición a contaminantes"
    ],
    correctAnswer: "Uso de protector solar",
    explanation: "Aunque el protector solar es importante para la salud, no previene directamente enfermedades pulmonares."
  }
];

export const quizConfig = {
  totalQuestions: 10,
  timeLimit: 20, // minutos
  pointsPerQuestion: 10,
  passingScore: 70 // porcentaje
};