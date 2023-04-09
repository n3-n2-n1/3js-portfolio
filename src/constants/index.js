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
    title: "Lian Productions | Ghost Production Service",
    company_name: "Lian Productions",
    icon: lian,
    iconBg: "black",
    date: "August 2019 - Present",
    points: [
      "Spearheaded the development and implementation of a comprehensive brand identity and style guidelines for a discographic brand, resulting in a cohesive and impactful brand presence",
      "Directed a team of talented designers to produce visually captivating projects that exceed client expectations.",
      "Collaborated with a marketing team to ensure that SEO and visually appealing assets are incorporated seamlessly into projects",
      "Contributed to content assets and scheduling calendars to ensure timely and successful project completion.",
    ],
    web: "https://www.lianproductions.com",
  },
  {
    title:"Allow Audio",
    company_name: "Designer",
    icon: allow,
    iconBg: "black",
    date: "Jan 2020 - Feb 2023",
    points: [
      "Developed and implemented a comprehensive brand identity and style guidelines for a discographic brand, resulting in a cohesive and impactful brand presence.",
      "Created visually stunning artwork and promotional materials that effectively communicate the brand's unique voice and identity.",
      "Established and maintained consistent branding guidelines across all channels, including social media, website, and product packaging.",
      "Utilized cross-compatible designer-client platforms such as Figma and Google Tools to streamline workflow and enhance communication.",
    ],
    web: "https://www.allowaudio.bandcamp.com"
  },
  {
    title: "Infinix Holding",
    company_name: "Designer + Web Developer",
    icon: infinix,
    iconBg: "black",
    date: "Feb 2022 - Today",
    points: [
      "Designed and developed a dynamic website using React, HTML5, and CSS to provide a cutting-edge online experience.",
      "Created an intuitive and user-friendly interface that engages potential customers and drives conversions.",
      "Established and maintained consistent branding guidelines to promote brand recognition and loyalty.",
      "Contributed to the successful launch of multiple products and campaigns, driving significant revenue growth for the brand.",
    ],
    web: "https://www.infinixholdinggroup.com"
  },
 
  {
    title: "Qualifications | Overview",
    company_name: "I hold a distinguished academic record, including a certificate of First Degree (English) from Cambridge University, as well as certifications in Python, testing, and design, and a degree in React/JavaScript.",
    icon: academic,
    iconBg: "#f0f0f0",
    date: "Until nowadays!",
    points: [
      
    ],
    web:"#home"
  },
  {
    title: "Henry Bootcamp | Full stack Developer",
    company_name: "Full-Time Bootcamp, +900hr completed",
    icon: henry,
    iconBg: "#FFFF00",
    date: "May 2022 - December 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    web:""

  },  {
    title: "CoderHouse | Python Certification",
    company_name: "Intermediate certification for Python with use of Django, mySQL, Postgres and SCSS",
    icon: coder,
    iconBg: "#E8FF3C",
    date: "Jan 2023 - Present",
    points: [
      "Completed certification in Python, mastering various technologies including Mongo, Django, Postgres, and MySQL to develop real-world applications.",
      "Utilized version control systems such as Git to manage and collaborate on code with ease.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    web:"#home"
  },  {
    title: "CoderHouse | Testing QA Manual",
    company_name: "Intermediate certification for Testing Quality Assurance with PostMan/ThunderClient",
    icon: coder,
    iconBg: "#E8FF3C",
    date: "Jun 2022 - Sept 2022",
    points: [
      "Participated in group projects to test real-world applications and gain practical experience.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Contributed to the creation and maintenance of testing documentation and schedules to ensure high-quality and reliable applications..",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    web:"#home"

  },
  {
    title: "University of Cambridge | First I Certification",
    company_name: "Advanced Certification from Cambridge's University",
    icon: university,
    iconBg: "#EF4B5A",
    date: "Jun 2006 - Sept 2013",
    points: [
      "Achieved Cambridge University's certificate, demonstrating exceptional oral and written communication skills in English.",
      "Successfully completed rigorous coursework and assessments, earning a distinction for outstanding performance.",
      "Utilized advanced grammar, vocabulary, and syntax to create polished and professional written work.",
      'Continuously sought out opportunities to refine language skills, including through immersion experiences and independent study.'

    ],
    web:"#home"

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
    name: "Infinix | Holding Group",
    description:
      "HTLM5 web based page quirugicaly prepared with social engineering and SEO improvements of our Quality Assurance side.",
    tags: [
      {
        name: "HTML5",
        color: "white-100",
      },
      {
        name: "javaScript",
        color: "white-100",
      },
      {
        name: "bootstrap",
        color: "white-100",
      },
    ],
    image: infinixw,
    source_code_link: "https://infinixholdinggroup.com/",
  },
  {
    name: "Lian Productions ",
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
    source_code_link: "https://lianproductions.com",
  },
  {
    name: "Crystal | Main Projects",
    description:
      "Along years, developing different projects as performer/curator for artwork. With the underground of art & development.",
    tags: [
      {
        name: "maxMSP",
        color: "white-100",
      },
      {
        name: "touchDesigner",
        color: "white-100t",
      },
      {
        name: "cinema4D",
        color: "white-100",
      },
    ],
    image: crystalw,
    source_code_link: "#home",
  },
];

export { services, technologies, experiences, testimonials, projects };
