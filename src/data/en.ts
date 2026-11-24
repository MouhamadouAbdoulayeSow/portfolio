import { repo, type Content } from "./types";

export const en: Content = {
  profile: {
    name: "Mouhamadou Abdoulaye SOW",
    shortName: "M. A. SOW",
    role: "Java Developer · Spring Boot · Full-Stack",
    tagline:
      "Full-stack Java developer, intern at Atos and final-year engineering student. For two and a half years I have been building REST APIs and Spring Boot microservices, testing them and shipping them with Docker and CI/CD.",
    location: "Thiès / Dakar, Senegal",
    email: "sowma@ept.edu.sn",
    github: "https://github.com/MouhamadouAbdoulayeSow",
    linkedin: "https://www.linkedin.com/in/mouhamadou-abdoulaye-sow-35466b374/",
    cv: "/CV_Mouhamadou_Abdoulaye_SOW_Java_FR.pdf",
    focus: ["Java · Spring Boot", "REST APIs & microservices", "JPA / Hibernate · SQL", "Docker · CI/CD", "Angular · React"],
  },

  about: {
    paragraphs: [
      "I am a full-stack Java developer, intern at Atos and final-year Computer Science engineering student at École Polytechnique de Thiès, Senegal's leading engineering school.",
      "I have been working with Java, Spring Boot, Docker and CI/CD for two and a half years. I started with EPT courses and projects in object-oriented programming, JPA, software architecture and DevOps, then continued during my Atos internships and in personal projects.",
      "At Atos, I built secured REST APIs with Spring Boot, designed PostgreSQL and MongoDB data models, built Angular and React screens and shipped containerised services to AWS through CI/CD pipelines, in Agile/Scrum teams.",
      "What drives me: clean, tested code, well-split microservices, application security and performance.",
    ],
    stats: [
      { value: "2.5 yrs", label: "of Java, Spring Boot, Docker and CI/CD practice" },
      { value: "2", label: "full-stack developer internships at Atos" },
      { value: "10", label: "Spring Boot services in the LMS project" },
    ],
  },

  experiences: [
    {
      title: "Software Engineer Intern – Final-year Project",
      company: "Atos",
      location: "Dakar, Senegal",
      period: "Dec. 2026 – May 2027",
      upcoming: true,
      points: ["Final-year engineering project and client projects at Atos."],
      stack: [],
    },
    {
      title: "Full-Stack Developer Intern – FONSIS & Atos Digital Push",
      company: "Atos",
      location: "Dakar, Senegal",
      period: "Jul. 2026 – Nov. 2026",
      points: [
        "Maintained and extended FONSIS, a national investment-management platform, delivering improvements requested directly by the client's CIO.",
        "Deployed and operated containerised services with Docker and Portainer on AWS.",
        "Maintained GitHub CI/CD pipelines that automate build, test and release.",
        "Integrated Atos Digital Push, a multi-channel notification platform for SMS, e-mail, WhatsApp and voice campaigns used by Orange, BCEAO and YAS.",
        "Built Power BI dashboards to monitor key indicators.",
      ],
      stack: ["Docker", "Portainer", "AWS", "GitHub CI/CD", "REST APIs", "Power BI", "Angular"],
    },
    {
      title: "Full-Stack Developer Intern – FONSIS",
      company: "Atos",
      location: "Dakar, Senegal",
      period: "Jul. 2025 – Oct. 2025",
      points: [
        "Developed enterprise web applications and secure REST APIs with Spring Boot, Angular and React.",
        "Designed and administered PostgreSQL and MongoDB data models; containerised services with Docker.",
        "Ran functional tests and fixed defects in an Agile/Scrum team using Jira and Confluence.",
      ],
      stack: ["Spring Boot", "Angular", "React", "PostgreSQL", "MongoDB", "Docker"],
    },
  ],

  projects: [
    {
      title: "LMS Universities",
      domains: ["Software", "DevOps", "Security", "AI"],
      description: "EPT e-learning platform: 10 Spring Boot services behind a Spring Cloud gateway, Kafka, JPA and PostgreSQL, JWT security, deployed to AWS through CI/CD.",
      stack: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "PostgreSQL", "Docker"],
      link: repo("LMS_universities"),
    },
    {
      title: "MS Platform – Auth Service",
      domains: ["Software", "Security"],
      description: "Spring Security service with JWT access and refresh tokens, roles, Redis revocation, Flyway migrations and JUnit and Mockito tests.",
      stack: ["Java", "Spring Security", "JPA", "Flyway", "JUnit", "Mockito"],
      link: repo("MS_Platform"),
    },
    {
      title: "Microcommerce – Product API",
      domains: ["Software"],
      description: "Spring Boot REST API with Spring Data JPA, input validation, error handling and OpenAPI documentation.",
      stack: ["Spring Boot", "Spring Data JPA", "Bean Validation", "Swagger"],
      link: repo("microcommerce"),
    },
    {
      title: "SenPanier Bio",
      domains: ["Software"],
      description: "Organic produce marketplace for Senegal, with spaces for producers and suppliers.",
      stack: ["Next.js", "TypeScript", "MongoDB"],
      link: repo("SenPanierFront"),
    },
    {
      title: "Recommendation System",
      domains: ["Data", "Software"],
      description: "E-commerce recommender combining content-based and collaborative filtering, served through a REST API.",
      stack: ["Python", "scikit-learn", "Django REST", "React"],
      link: repo("Projet_Transversal_DIC_1"),
    },
    {
      title: "LLM on Kubernetes",
      domains: ["Cloud & DevOps", "Security"],
      description: "LLM deployment on Kubernetes with Ingress, network policies and autoscaling.",
      stack: ["Kubernetes", "Kustomize", "Docker", "HPA"],
      link: repo("LLM_Deployment_Devops_Project"),
    },
    {
      title: "AWS Infrastructure with Terraform",
      domains: ["Cloud & DevOps"],
      description: "Reusable Terraform modules for S3 and DynamoDB, with dev and prod environments and tests.",
      stack: ["Terraform", "AWS S3", "DynamoDB"],
      link: repo("LLM_Deployment_Devops_Project"),
    },
    {
      title: "ShopVocal",
      domains: ["AI", "Software"],
      description: "Voice-driven mobile app that helps shopkeepers manage sales, stock and customers.",
      stack: ["Flutter", "FastAPI", "PostgreSQL", "Whisper"],
      link: repo("ShopVocal"),
    },
    {
      title: "Spring Boot DevSecOps Pipeline",
      domains: ["Software", "Cloud & DevOps", "Security"],
      description: "CI/CD pipeline that tests, scans, builds and deploys a Spring Boot API to Kubernetes.",
      stack: ["Maven", "GitHub Actions", "Docker", "Kubernetes"],
      link: repo("devsecops-springboot-pipeline"),
      inProgress: true,
    },
  ],

  skills: [
    {
      group: "Java & Spring",
      items: ["Java 17", "OOP", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "Spring Security", "Spring Cloud", "OpenFeign", "Maven", "Lombok"],
      core: ["Java 17", "Spring Boot", "Spring Data JPA", "Spring Security"],
    },
    {
      group: "APIs & architecture",
      items: ["REST APIs", "OpenAPI / Swagger", "Microservices", "Spring Cloud Gateway", "Eureka", "Apache Kafka", "Layered architecture", "Postman"],
      core: ["REST APIs", "Microservices", "Apache Kafka"],
    },
    {
      group: "Databases",
      items: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Flyway", "H2"],
      core: ["SQL", "PostgreSQL", "MySQL"],
    },
    {
      group: "Front-end",
      items: ["TypeScript", "JavaScript", "Angular", "React", "HTML5", "CSS3", "Tailwind CSS"],
      core: ["Angular", "React", "TypeScript"],
    },
    {
      group: "Testing & DevOps",
      items: ["JUnit 5", "Mockito", "Spring Boot Test", "Git", "GitHub Actions", "GitLab CI", "Jenkins", "Docker", "Docker Compose", "Kubernetes", "AWS EC2, S3 & ECR", "Linux"],
      core: ["JUnit 5", "Mockito", "Docker", "Git"],
    },
    {
      group: "Methods & security",
      items: ["Agile / Scrum", "Jira", "Confluence", "UML", "JWT", "OAuth2", "Keycloak", "RBAC"],
      core: ["Agile / Scrum", "JWT"],
    },
    {
      group: "Learning now",
      items: ["Vue.js 3", "Gradle", "RabbitMQ", "Testcontainers"],
    },
  ],

  education: [
    {
      degree: "Engineering Degree – Computer Science",
      school: "École Polytechnique de Thiès (EPT)",
      location: "Thiès, Senegal",
      period: "Oct. 2022 – 2027",
      details: [
        "5-year programme, Master's level, including a 2-year preparatory cycle in mathematics, physics and programming.",
        "Coursework: distributed databases, Big Data, cloud-native systems, DevOps, ML/DL & MLOps, cryptography, cybersecurity, networking, operations research, signal processing.",
      ],
    },
    {
      degree: "Scientific Baccalaureate – with honours",
      school: "Lycée de Yeumbeul (LEID)",
      location: "Dakar, Senegal",
      period: "July 2022",
      details: ["Ranked 1st in the entire exam centre."],
    },
  ],

  leadership: [
    {
      title: "Vice-President – Galsen AI Community, EPT chapter",
      period: "2023 – 2024",
      points: [
        "Organised hands-on AI workshops at the school's annual tech symposium.",
        "Guided fellow students to the Elements of AI and NVIDIA Deep Learning Institute certifications.",
      ],
    },
    {
      title: "President – Newspaper Sub-Commission",
      period: "2023 – 2024",
      points: [
        "Led a student editorial team and managed content production for the student body.",
        "Published two titles: Polybrève, a quarterly, and Polynews, the annual edition.",
      ],
    },
  ],

  interests: [
    "Software architecture & clean code",
    "Microservices & API design",
    "Automated testing & code quality",
    "Application performance",
    "Application security",
    "CI/CD automation",
    "Open source",
  ],

  languages: [
    { name: "French", level: "Full proficiency · C2" },
    { name: "English", level: "Professional · C1" },
    { name: "Pulaar", level: "Native" },
    { name: "Wolof", level: "Fluent" },
  ],

  ui: {
    lang: "en",
    meta: {
      title: "Mouhamadou Abdoulaye SOW – Portfolio",
      description:
        "Full-stack Java developer: Spring Boot, REST APIs, microservices, JPA, Angular and React, Docker and CI/CD.",
    },
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact" },
    switchLabel: "FR",
    hello: "Hello, I'm",
    downloadCv: "Download CV",
    portraitAlt: "Portrait of Mouhamadou Abdoulaye Sow",
    sections: {
      about: { kicker: "01 · About", title: "Full-stack Java developer, from code to production" },
      experience: { kicker: "02 · Experience", title: "Where I have worked" },
      projects: { kicker: "03 · Projects", title: "Things I have built" },
      skills: { kicker: "04 · Skills", title: "Technical toolbox" },
      education: { kicker: "05 · Education", title: "Education & leadership" },
    },
    upcoming: "Upcoming",
    viewCode: "View code",
    inProgress: "In progress",
    interestsTitle: "Interests",
    languagesTitle: "Languages",
    domains: {
      Software: "Software",
      Data: "Data",
      "Cloud & DevOps": "Cloud & DevOps",
      DevOps: "DevOps",
      Security: "Security",
      AI: "AI",
    },
    contact: {
      kicker: "06 · Contact",
      title: "Let's build something together",
      text: "I am open to Java and full-stack Java developer roles in Dakar.",
    },
    footer: "Built with Next.js, deployed on Vercel",
  },
};
