import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  lian,
  allow,
  infinix,
  infinixw,
  lianw,
  crystalw,
  henry,
  coder,
  academic,
  university,
  infinixqa,
  infinixsoft,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Desarrollo Web y Arquitectura de Software",
    description: "Diseñamos y desarrollamos plataformas web con arquitecturas avanzadas, seguras y escalables, optimizadas para el crecimiento del negocio.",
    icon: webArchitecture,
  },
  {
    title: "Desarrollo Mobile (iOS/Android)",
    description: "Aplicaciones móviles de alto rendimiento para plataformas nativas y multiplataforma, utilizando tecnologías como React Native y Flutter.",
    icon: mobileDevelopment,
  },
  {
    title: "Backend y Microservicios",
    description: "Soluciones backend escalables y basadas en microservicios con APIs RESTful para operaciones confiables y eficientes.",
    icon: backendMicroservices,
  },
  {
    title: "Inteligencia Artificial y Machine Learning",
    description: "Implementación de IA avanzada y sistemas de aprendizaje automático, desde NLP hasta recomendaciones personalizadas.",
    icon: aiSolutions,
  },
  {
    title: "Blockchain y Smart Contracts",
    description: "Desarrollo en blockchain, creación de contratos inteligentes y aplicaciones descentralizadas, adaptadas a las necesidades de la nueva economía digital.",
    icon: blockchainTech,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "React y React Native",
    icon: react,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS y Google Cloud",
    icon: cloud,
  },
  {
    name: "MongoDB y PostgreSQL",
    icon: database,
  },
  {
    name: "Solidity (Ethereum)",
    icon: solidity,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Decrypto.la",
    company_name: "Soluciones Full Stack y Mobile",
    icon: decrypto,
    iconBg: "#3b3b3b",
    date: "Mar 2021 - Present",
    points: [
      "Desarrollo de aplicaciones móviles y plataformas full stack para experiencias digitales integrales.",
      "Implementación de soluciones en React Native para aplicaciones móviles intuitivas y optimizadas.",
      "Arquitectura y desarrollo de soluciones web full stack, garantizando seguridad, escalabilidad y alta disponibilidad.",
    ],
    web: "https://decrypto.la",
  },
  {
    title: "Heippi",
    company_name: "Consultoría en Arquitectura de Software",
    icon: heippi,
    iconBg: "#1f1f1f",
    date: "Ene 2022 - Present",
    points: [
      "Consultoría y diseño de arquitecturas robustas y eficientes para el crecimiento escalable.",
      "Implementación de arquitecturas modulares que facilitan la integración de nuevos servicios y tecnologías.",
      "Optimización de infraestructura para asegurar un rendimiento superior en todos los niveles.",
    ],
    web: "https://heippi.com",
  },
  {
    title: "Oxygen Token",
    company_name: "Desarrollo Blockchain y Tokenización",
    icon: oxygenToken,
    iconBg: "#0a0a0a",
    date: "Ago 2023 - Present",
    points: [
      "Creación del token 'SoyCarbonoNeutral', con integración blockchain y contratos inteligentes para compensación de huella de carbono.",
      "Implementación de contratos inteligentes seguros y eficientes en Solidity, dentro de la red Ethereum.",
      "Desarrollo de soluciones descentralizadas alineadas con los objetivos de sostenibilidad y responsabilidad ambiental.",
    ],
    web: "https://oxygentoken.io",
  },
];

const testimonials = [
  {
    testimonial:
      "Gracias a Kinetica, implementamos soluciones de arquitectura innovadoras que impulsaron nuestro crecimiento de forma significativa.",
    name: "Martín Pérez",
    designation: "CTO",
    company: "Heippi",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "El equipo de Kinetica transformó nuestras ideas en una plataforma mobile potente y fácil de usar. Nos apoyaron en cada paso del desarrollo.",
    name: "Lucía Romero",
    designation: "COO",
    company: "Decrypto.la",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    testimonial:
      "Su experiencia en blockchain ha sido clave para llevar a cabo el proyecto Oxygen Token con el impacto y la seguridad que necesitábamos.",
    name: "Carlos Álvarez",
    designation: "Fundador",
    company: "Oxygen Token",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const projects = [
  {
    name: "Decrypto | Plataforma Full Stack",
    description:
      "Desarrollo de una plataforma full stack en React Native con backend escalable para soluciones de intercambio digital.",
    tags: [
      { name: "React Native", color: "white-100" },
      { name: "Node.js", color: "white-100" },
      { name: "MongoDB", color: "white-100" },
    ],
    image: decryptoProject,
    source_code_link: "https://decrypto.la",
  },
  {
    name: "Heippi | Soluciones de Arquitectura",
    description:
      "Implementación de arquitectura de software modular y escalable para optimizar rendimiento y costos en infraestructura.",
    tags: [
      { name: "AWS", color: "white-100" },
      { name: "Docker", color: "white-100" },
      { name: "Microservicios", color: "white-100" },
    ],
    image: heippiProject,
    source_code_link: "https://heippi.com",
  },
  {
    name: "Oxygen Token | SoyCarbonoNeutral",
    description:
      "Creación y despliegue del token de sostenibilidad 'SoyCarbonoNeutral' en la blockchain de Ethereum.",
    tags: [
      { name: "Blockchain", color: "white-100" },
      { name: "Solidity", color: "white-100" },
      { name: "Ethereum", color: "white-100" },
    ],
    image: oxygenTokenProject,
    source_code_link: "https://oxygentoken.io",
  },
];

export { services, technologies, experiences, testimonials, projects };
