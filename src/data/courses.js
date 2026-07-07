import oracion from "@/assets/course-oracion.jpg";
import liderazgo from "@/assets/course-liderazgo.jpg";
import sanacion from "@/assets/course-sanacion.jpg";
import cenaculo from "@/assets/course-cenaculo.jpg";
import servicio from "@/assets/course-servicio.jpg";
import adoracion from "@/assets/course-adoracion.jpg";

export const COURSES= [
  {
    slug: "taller-oracion-centrante",
    title: "Taller de Oración Centrante",
    img: oracion,
    category: "ESPIRITUALIDAD",
    ambito: "TALLERES",
    cta: "Ver Detalle",
    duration: "4 semanas",
    lessons: 12,
    summary:
      "El taller es claro, conciso y responde de una manera histórica y de oración fundamento en el arte de la oración centrante.",
  },
  {
    slug: "curso-liderazgo-comunitario",
    title: "Curso de Liderazgo Comunitario",
    img: liderazgo,
    category: "DESARROLLO PERSONAL",
    ambito: "TALLERES",
    cta: "Ver Curso",
    duration: "8 semanas",
    lessons: 24,
    summary: "Herramientas prácticas para liderar grupos parroquiales con visión y cercanía.",
  },
  {
    slug: "retiro-sanacion-interior",
    title: "Retiro de Sanación Interior",
    img: sanacion,
    category: "ESPIRITUALIDAD",
    ambito: "RETIROS",
    cta: "Ver Curso",
    duration: "3 días",
    lessons: 9,
    summary: "Un espacio guiado para reconciliar historia, memoria y esperanza.",
  },
  {
    slug: "cenaculo-semanal",
    title: "Cenáculo Semanal",
    img: cenaculo,
    category: "ESPIRITUALIDAD",
    ambito: "CENÁCULOS/ADORACIONES",
    cta: "Ver Detalle",
    duration: "En curso",
    lessons: 52,
    summary: "Encuentro semanal en pequeños grupos para orar, compartir y crecer en fe.",
  },
  {
    slug: "taller-servicio-social",
    title: "Taller de Servicio Social",
    img: servicio,
    category: "SERVICIO",
    ambito: "TALLERES",
    cta: "Ver Curso",
    duration: "6 semanas",
    lessons: 18,
    summary: "Diseñá y ejecutá proyectos concretos de servicio a los más vulnerables.",
  },
  {
    slug: "cenaculo-adoracion",
    title: "Cenáculo de Adoración",
    img: adoracion,
    category: "ESPIRITUALIDAD",
    ambito: "CENÁCULOS/ADORACIONES",
    cta: "Ver Curso",
    duration: "Mensual",
    lessons: 12,
    summary: "Adoración eucarística guiada con música, silencio y contemplación.",
  },
];