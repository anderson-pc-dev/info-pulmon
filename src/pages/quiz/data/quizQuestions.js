export const quizQuestions = [
{
  id: 1,
  type: "drag-drop-order",
  question: "Ordena los síntomas de la EPOC del más leve al más severo.",
  itemsToOrder: [
    "Cianosis (Coloración Azulada en la Piel y Labios)",
    "Sibilancias (Sonido Agudo al Respirar)",
    "Fatiga Extrema y Debilidad",
    "Falta de aire o dificultad para respirar (Disnea)"
  ],
  correctOrder: [
    "Sibilancias (Sonido Agudo al Respirar)",
    "Fatiga Extrema y Debilidad",
    "Cianosis (Coloración Azulada en la Piel y Labios)",
    "Falta de aire o dificultad para respirar (Disnea)"
  ],
  explanation: "Los síntomas de la EPOC suelen comenzar con signos leves como sibilancias, y progresan gradualmente hacia manifestaciones más graves como fatiga intensa, cambios en el color de la piel (cianosis) y dificultad severa para respirar incluso en reposo."
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
  {
    id: 3,
    type: "term-match",
    question: "Asocia cada término con su descripción correcta",
    pairs: [
      {
        term: "EPOC",
        description: "Destrucción progresiva de los alvéolos",
        termId: "A"
      },
      {
        term: "Enfisema pulmonar",
        description: "Afección respiratoria de carácter progresivo e irreversible que se caracteriza por una obstrucción persistente del flujo de aire en los pulmones",
        termId: "B"
      },
      {
        term: "Broncodilatadores",
        description: "Medicamentos que abren las vías respiratorias",
        termId: "C"
      },
      {
        term: "Corticosteroides",
        description: "Reducen la inflamación de las vías respiratorias y se utilizan principalmente en casos avanzados",
        termId: "D"
      }
    ],
    correctMatches: {
      "A": "Afección respiratoria de carácter progresivo e irreversible que se caracteriza por una obstrucción persistente del flujo de aire en los pulmones",
      "B": "Destrucción progresiva de los alvéolos",
      "C": "Medicamentos que abren las vías respiratorias",
      "D": "Reducen la inflamación de las vías respiratorias y se utilizan principalmente en casos avanzados"
    },
    explanation: "Comprender los términos médicos clave es fundamental para interpretar correctamente las enfermedades respiratorias. El EPOC se refiere a una obstrucción pulmonar crónica, mientras que el enfisema es un tipo específico de EPOC caracterizado por la destrucción de los alvéolos. Los broncodilatadores alivian los síntomas al abrir las vías respiratorias, y los corticosteroides se utilizan para reducir la inflamación, especialmente en etapas avanzadas."

  },
  {
    id: 4,
    type: "fill-blank",
    question: "El __________ es la causa principal de la EPOC.",
    correctAnswer: "tabaquismo",
    explanation: "El tabaquismo es la causa principal de la EPOC, ya que el humo del cigarro daña progresivamente los pulmones, provocando inflamación crónica y obstrucción del flujo de aire. Aunque existen otros factores de riesgo, fumar es, con mucho, el más significativo."
  },
  {
  id: 5,
  type: "drag-drop-order",
  question: "Ordena los síntomas de la Tuberculosis del más leve al más severo.",
  itemsToOrder: [
    "Dolor en los huesos o articulaciones",
    "Inflamación de los ganglios linfáticos",
    "Fiebre, sudores nocturnos",
    "Dificultad para respirar"
  ],
  correctOrder: [
    "Fiebre, sudores nocturnos",
    "Dificultad para respirar",
    "Dolor en los huesos o articulaciones",
    "Inflamación de los ganglios linfáticos"
  ],
  explanation: "La tuberculosis puede comenzar con síntomas generales como fiebre y sudores nocturnos. A medida que progresa, pueden aparecer dificultades respiratorias debido al daño pulmonar. En casos más avanzados o diseminados, la infección puede afectar los huesos, articulaciones o ganglios linfáticos, lo que indica un compromiso más grave del organismo."
},
  {
  id: 6,
  type: "fill-blank-multiple",
  question: "Los tipos de Tuberculosis son: __________,__________ y __________.",
  correctAnswers: ["tuberculosis latente", "tuberculosis activa", "tuberculosis multirresistente"],
  explanation: "La tuberculosis se clasifica en tres tipos principales: Latente (sin síntomas, pero con infección), Activa (con síntomas y contagiosa) y Multirresistente (resistente a los medicamentos comunes).",
},

{
    id: 7,
    type: "term-match",
    question: "Asocia cada término con su descripción correcta",
    pairs: [
      {
        term: "Daño hepatico",
        description: "Un antibiótico de última línea, potente pero con efectos secundarios severos",
        termId: "A"
      },
      {
        term: "Tuberculosis",
        description: "Efecto secundarios del tratamiento de TB-MDR",
        termId: "B"
      },
      {
        term: "Linezolid (LZD)",
        description: "Enfermedad infecciosa causada por la bacteria Mycobacterium",
        termId: "C"
      },
      {
        term: "Vacuna BCG",
        description: "La OMS recomienda su aplicación en países con alta incidencia de TB",
        termId: "D"
      }
    ],
    correctMatches: {
      "A": "Efecto secundarios del tratamiento de TB-MDR",
      "B": "Enfermedad infecciosa causada por la bacteria Mycobacterium",
      "C": "Un antibiótico de última línea, potente pero con efectos secundarios severos",
      "D": "La OMS recomienda su aplicación en países con alta incidencia de TB"
    },
    explanation: "La tuberculosis es una enfermedad causada por la bacteria *Mycobacterium tuberculosis*. Su tratamiento, especialmente en casos de TB-MDR (resistente a múltiples fármacos), puede provocar efectos secundarios como daño hepático. Linezolid es un antibiótico de uso limitado pero efectivo, aunque con riesgos importantes. La vacuna BCG es una medida preventiva recomendada por la OMS en regiones con alta prevalencia de la enfermedad."

  },

  {
  id: 8,
  type: "drag-drop-order",
  question: "Ordena los síntomas del Asma, del más leve al más severo.",
  itemsToOrder: [
    "Opresión en el pecho",
    "Sibilancias intensas",
    "Dificultad respiratoria extrema",
    "Coloración azulada en labios o uñas (cianosis)"
  ],
  correctOrder: [
    "Sibilancias intensas",
    "Opresión en el pecho",
    "Coloración azulada en labios o uñas (cianosis)",
    "Dificultad respiratoria extrema"
  ],
  explanation: "El asma suele comenzar con síntomas leves como sibilancias (silbidos al respirar) y opresión en el pecho. Si no se controla, puede progresar a dificultad respiratoria extrema. En los casos más graves, la oxigenación deficiente provoca cianosis, un signo clínico de urgencia médica."
},

{
  id: 9,
  type: "fill-blank-multiple",
  question: "El Asma es una condicion que se caracteriza por: __________,__________ y __________.",
  correctAnswers: ["inflamacion cronica", "hiperreactividad bronquial", "obstrucción variable del flujo de aire"],
  explanation: "El asma es una enfermedad respiratoria inflamatoria crónica. Se caracteriza por una inflamación persistente de las vías respiratorias, una respuesta exagerada a diversos estímulos (hiperreactividad bronquial), y una obstrucción del flujo de aire que puede variar en intensidad y ser reversible de forma espontánea o con tratamiento.",
},

{
    id: 10,
    type: "term-match",
    question: "Asocia cada término con su descripción correcta",
    pairs: [
      {
        term: "Asma",
        description: "Este tratamiento se utiliza para tratar el asma grave que no mejora con los corticosteroides inhalados",
        termId: "A"
      },
      {
        term: "Termoplastia bronquial",
        description: "Es una enfermedad crónica que afecta las vías respiratorias, específicamente los bronquios",
        termId: "B"
      },
      {
        term: "Genetica",
        description: "Medicamento para el tratamiento del asma a largo plazo",
        termId: "C"
      },
      {
        term: "Teofilina",
        description: "Es una de las causas del Asma",
        termId: "D"
      }
    ],
    correctMatches: {
      "A": "Es una enfermedad crónica que afecta las vías respiratorias, específicamente los bronquios",
      "B": "Este tratamiento se utiliza para tratar el asma grave que no mejora con los corticosteroides inhalados",
      "C": "Es una de las causas del Asma",
      "D": "Medicamento para el tratamiento del asma a largo plazo"
    },
    explanation: "La tuberculosis es una enfermedad causada por la bacteria *Mycobacterium tuberculosis*. Su tratamiento, especialmente en casos de TB-MDR (resistente a múltiples fármacos), puede provocar efectos secundarios como daño hepático. Linezolid es un antibiótico de uso limitado pero efectivo, aunque con riesgos importantes. La vacuna BCG es una medida preventiva recomendada por la OMS en regiones con alta prevalencia de la enfermedad."

  },


];

export const quizConfig = {
  totalQuestions: 10,
  timeLimit: 12, // minutos
  pointsPerQuestion: 10,
  passingScore: 70 // porcentaje minimo para parobar la prueba
};