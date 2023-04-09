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
  lianw
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Lian Productions Ghost Production Site",
    company_name: "Lian Productions",
    icon: lian,
    iconBg: "black",
    date: "August 2019 - Present",
    points: [
      "Developing main brand guidelines, in-remote brand development and fundational syle guidelines.",
      "Collaborating with a marketing team to ensure accurately SEO and related visual assets",
      "Implementing cross-compatibility designer-client platforms as Figma and Google Tools",
      "Participating in content assets and scheduling calendars related to.",
    ],
  },
  {
    title: "Allow Audio",
    company_name: "Designer",
    icon: allow,
    iconBg: "black",
    date: "Jan 2020 - Feb 2023",
    points: [
      "Developing the foundational stone of the brandquest"
    ],
  },
  {
    title: "Infinix Holding",
    company_name: "Designer + Web Developer",
    icon: infinix,
    iconBg: "black",
    date: "Feb 2022 - Today",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Henry Bootcamp | Full stack Developer",
    company_name: "Full-Time Bootcamp, +900hr completed",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Infinix | Quality Assurance",
    description:
      "HTLM5 web based page quirugicaly prepared with social engineering and SEO improvements of our Quality Assurance side.",
    tags: [
      {
        name: "HTML5",
        color: "white-100",
      },
      {
        name: "JavaScript",
        color: "white-100",
      },
      {
        name: "Bootstrap",
        color: "white-100",
      },
    ],
    image: infinixw,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lian Productions | Ghost Productions",
    description:
      "Landing page react-based of one of the top production services at Europe. Frontend improvations with Tailwind and React Drei.",
    tags: [
      {
        name: "react",
        color: "white-100",
      },
      {
        name: "restapi",
        color: "white-100t",
      },
      {
        name: "scss",
        color: "white-100",
      },
    ],
    image: lianw,
    source_code_link: "https://github.com/",
  },
  {
    name: "Crystal | Main Projects",
    description:
      "Along years, developing different projects as performer/curator for artwork. With the underground lot of art development.",
    tags: [
      {
        name: "nextjs",
        color: "white-100",
      },
      {
        name: "supabase",
        color: "white-100t",
      },
      {
        name: "css",
        color: "white-100",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
