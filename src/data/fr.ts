import { repo, type Content } from "./types";

export const fr: Content = {
  profile: {
    name: "Mouhamadou Abdoulaye SOW",
    shortName: "M. A. SOW",
    role: "Développeur Java · Spring Boot · Full-Stack",
    tagline:
      "Développeur Java full-stack, stagiaire chez Atos et élève-ingénieur en dernière année. Depuis deux ans et demi, je conçois des API REST et des microservices Spring Boot, je les teste et je les livre avec Docker et la CI/CD.",
    location: "Thiès / Dakar, Sénégal",
    email: "mamadoualassane2003@gmail.com",
    github: "https://github.com/MouhamadouAbdoulayeSow",
    linkedin: "https://www.linkedin.com/in/mouhamadou-abdoulaye-sow-35466b374/",
    cv: "/CV_Mouhamadou_Abdoulaye_SOW_Java.pdf",
    focus: ["Java · Spring Boot", "API REST & microservices", "JPA / Hibernate · SQL", "Vue.js · Angular · React", "Docker · CI/CD"],
  },

  about: {
    paragraphs: [
      "Je suis développeur Java full-stack, stagiaire chez Atos et élève-ingénieur en dernière année d'Informatique à l'École Polytechnique de Thiès, la principale école d'ingénieurs du Sénégal.",
      "Je pratique Java, Spring Boot, Docker et la CI/CD depuis deux ans et demi. J'ai commencé avec les cours et projets de l'EPT en programmation orientée objet, JPA, architecture logicielle et DevOps, puis j'ai continué en stage chez Atos et dans mes projets personnels.",
      "Chez Atos, j'ai développé des API REST sécurisées avec Spring Boot, conçu des modèles de données PostgreSQL et MongoDB, réalisé des écrans Angular et React, écrit des tests d'intégration avec Testcontainers et livré des services conteneurisés sur AWS par des pipelines CI/CD, au sein d'équipes Agile/Scrum.",
      "Ce qui me motive : un code propre et testé, des microservices bien découpés, la sécurité applicative et la performance.",
    ],
    stats: [
      { value: "2,5 ans", label: "de pratique Java, Spring Boot, Docker et CI/CD" },
      { value: "2", label: "stages de développeur full-stack chez Atos" },
      { value: "10", label: "services Spring Boot dans le projet LMS" },
    ],
  },

  experiences: [
    {
      title: "Stagiaire développeur full-stack – FONSIS & Atos Digital Push",
      company: "Atos",
      location: "Dakar, Sénégal",
      period: "Juil. 2026 – Nov. 2026",
      points: [
        "Maintenance et évolution de FONSIS, plateforme nationale de gestion des investissements, avec des améliorations demandées directement par le DSI du client.",
        "Déploiement et exploitation de services conteneurisés avec Docker et Portainer sur AWS.",
        "Maintenance des pipelines CI/CD GitHub qui automatisent le build, les tests et la livraison.",
        "Intégration d'Atos Digital Push, plateforme de notifications multicanal pour des campagnes SMS, e-mail, WhatsApp et vocales utilisée par Orange, la BCEAO et YAS.",
        "Tests d'intégration avec Testcontainers pendant l'intégration d'Atos Digital Push.",
        "Création de tableaux de bord Power BI pour suivre les indicateurs clés.",
      ],
      stack: ["Docker", "Portainer", "AWS", "GitHub CI/CD", "Testcontainers", "API REST", "Angular", "Power BI"],
    },
    {
      title: "Stagiaire développeur full-stack – FONSIS",
      company: "Atos",
      location: "Dakar, Sénégal",
      period: "Juil. 2025 – Oct. 2025",
      points: [
        "Développement d'applications web d'entreprise et d'API REST sécurisées avec Spring Boot, Angular et React.",
        "Conception et administration de modèles de données PostgreSQL et MongoDB ; conteneurisation des services avec Docker.",
        "Tests fonctionnels et correction d'anomalies dans une équipe Agile/Scrum, avec Jira et Confluence.",
      ],
      stack: ["Spring Boot", "Angular", "React", "PostgreSQL", "MongoDB", "Docker"],
    },
  ],

  projects: [
    {
      title: "LMS Universities",
      domains: ["Software", "DevOps", "Security", "AI"],
      description: "Plateforme e-learning de l'EPT : 10 services Spring Boot derrière une passerelle Spring Cloud, Kafka, JPA et PostgreSQL, sécurité JWT, déployée sur AWS par CI/CD.",
      stack: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "PostgreSQL", "Docker"],
      link: repo("LMS_universities"),
    },
    {
      title: "MS Platform – Service d'authentification",
      domains: ["Software", "Security"],
      description: "Service Spring Security avec jetons JWT, rôles, révocation par Redis et migrations Flyway, couvert par 36 tests JUnit 5, Mockito et Testcontainers.",
      stack: ["Java", "Spring Security", "JPA", "JUnit 5", "Mockito", "Testcontainers"],
      link: repo("MS_Platform"),
    },
    {
      title: "Microcommerce – Catalogue full-stack",
      domains: ["Software"],
      description: "Front-end Vue.js 3 branché sur une API REST Spring Boot : recherche, filtres, CRUD avec validation, tests JUnit, Mockito et Vitest.",
      stack: ["Vue.js 3", "Spring Boot", "Spring Data JPA", "Vitest", "Mockito"],
      link: repo("microcommerce"),
    },
    {
      title: "SenPanier Bio",
      domains: ["Software"],
      description: "Marketplace de produits bio au Sénégal, avec des espaces pour les producteurs et les fournisseurs.",
      stack: ["Next.js", "TypeScript", "MongoDB"],
      link: repo("SenPanierFront"),
    },
    {
      title: "Système de recommandation",
      domains: ["Data", "Software"],
      description: "Moteur de recommandation e-commerce qui combine filtrage par contenu et filtrage collaboratif, exposé par une API REST.",
      stack: ["Python", "scikit-learn", "Django REST", "React"],
      link: repo("Projet_Transversal_DIC_1"),
    },
    {
      title: "LLM sur Kubernetes",
      domains: ["Cloud & DevOps", "Security"],
      description: "Déploiement d'un LLM sur Kubernetes avec Ingress, politiques réseau et autoscaling.",
      stack: ["Kubernetes", "Kustomize", "Docker", "HPA"],
      link: repo("LLM_Deployment_Devops_Project"),
    },
    {
      title: "Infrastructure AWS avec Terraform",
      domains: ["Cloud & DevOps"],
      description: "Modules Terraform réutilisables pour S3 et DynamoDB, avec environnements dev et prod et tests.",
      stack: ["Terraform", "AWS S3", "DynamoDB"],
      link: repo("LLM_Deployment_Devops_Project"),
    },
    {
      title: "ShopVocal",
      domains: ["AI", "Software"],
      description: "Application mobile à commande vocale pour aider les commerçants à gérer ventes, stock et clients.",
      stack: ["Flutter", "FastAPI", "PostgreSQL", "Whisper"],
      link: repo("ShopVocal"),
    },
    {
      title: "Pipeline DevSecOps Spring Boot",
      domains: ["Software", "Cloud & DevOps", "Security"],
      description: "Pipeline CI/CD qui teste, analyse, construit et déploie une API Spring Boot sur Kubernetes.",
      stack: ["Maven", "GitHub Actions", "Docker", "Kubernetes"],
      link: repo("devsecops-springboot-pipeline"),
      inProgress: true,
    },
  ],

  skills: [
    {
      group: "Java & Spring",
      items: ["Java 17", "POO", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "Spring Security", "Spring Cloud", "OpenFeign", "Maven", "Gradle", "Lombok"],
      core: ["Java 17", "Spring Boot", "Spring Data JPA", "Spring Security"],
    },
    {
      group: "API & architecture",
      items: ["API REST", "OpenAPI / Swagger", "Microservices", "Spring Cloud Gateway", "Eureka", "Apache Kafka", "RabbitMQ", "Architecture en couches", "Postman"],
      core: ["API REST", "Microservices", "Apache Kafka"],
    },
    {
      group: "Bases de données",
      items: ["SQL", "PostgreSQL", "MySQL", "Oracle", "SQL Server", "MongoDB", "Redis", "Flyway", "H2"],
      core: ["SQL", "PostgreSQL", "MySQL"],
    },
    {
      group: "Front-end",
      items: ["Vue.js 3", "Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      core: ["Vue.js 3", "Angular", "React", "JavaScript"],
    },
    {
      group: "Tests & DevOps",
      items: ["JUnit 5", "Mockito", "Testcontainers", "Spring Boot Test", "Vitest", "Git", "GitHub Actions", "GitLab CI", "Jenkins", "Docker", "Docker Compose", "Kubernetes", "AWS EC2, S3 & ECR", "Linux"],
      core: ["JUnit 5", "Mockito", "Testcontainers", "Docker"],
    },
    {
      group: "Méthodes & sécurité",
      items: ["Agile / Scrum", "Jira", "Confluence", "UML", "JWT", "OAuth2", "Keycloak", "RBAC"],
      core: ["Agile / Scrum", "JWT"],
    },
  ],

  education: [
    {
      degree: "Diplôme d'ingénieur – Informatique",
      school: "École Polytechnique de Thiès (EPT)",
      location: "Thiès, Sénégal",
      period: "Oct. 2022 – 2027",
      details: [
        "Formation en 5 ans de niveau Master, dont 2 années de classes préparatoires en mathématiques, physique et programmation.",
        "Cours : bases de données distribuées, Big Data, systèmes cloud-native, DevOps, ML/DL & MLOps, cryptographie, cybersécurité, réseaux, recherche opérationnelle, traitement du signal.",
      ],
    },
    {
      degree: "Baccalauréat scientifique – mention Bien",
      school: "Lycée de Yeumbeul (LEID)",
      location: "Dakar, Sénégal",
      period: "Juillet 2022",
      details: ["Classé 1er de tout le centre d'examen."],
    },
  ],

  leadership: [
    {
      title: "Vice-président – Communauté Galsen AI, section EPT",
      period: "2023 – 2024",
      points: [
        "Organisation d'ateliers pratiques d'IA lors du symposium technologique annuel de l'école.",
        "Accompagnement d'étudiants vers les certifications Elements of AI et NVIDIA Deep Learning Institute.",
      ],
    },
    {
      title: "Président – Sous-commission Journal",
      period: "2023 – 2024",
      points: [
        "Direction d'une équipe éditoriale étudiante et gestion de la production de contenus pour les élèves.",
        "Publication de deux journaux : Polybrève, trimestriel, et Polynews, l'édition annuelle.",
      ],
    },
  ],

  interests: [
    "Architecture logicielle & clean code",
    "Microservices & conception d'API",
    "Tests automatisés & qualité du code",
    "Performance des applications",
    "Sécurité applicative",
    "Automatisation CI/CD",
    "Open source",
  ],

  languages: [
    { name: "Français", level: "Maîtrise complète · C2" },
    { name: "Anglais", level: "Professionnel · C1" },
    { name: "Pulaar", level: "Langue maternelle" },
    { name: "Wolof", level: "Courant" },
  ],

  ui: {
    lang: "fr",
    meta: {
      title: "Mouhamadou Abdoulaye SOW – Portfolio",
      description:
        "Développeur Java full-stack : Spring Boot, API REST, microservices, JPA, Vue.js, Angular et React, Docker et CI/CD.",
    },
    nav: { about: "Profil", experience: "Expérience", projects: "Projets", skills: "Compétences", education: "Formation", contact: "Contact" },
    switchLabel: "EN",
    hello: "Bonjour, je suis",
    downloadCv: "Télécharger le CV",
    portraitAlt: "Portrait de Mouhamadou Abdoulaye Sow",
    sections: {
      about: { kicker: "01 · Profil", title: "Développeur Java full-stack, du code à la production" },
      experience: { kicker: "02 · Expérience", title: "Mon parcours professionnel" },
      projects: { kicker: "03 · Projets", title: "Ce que j'ai réalisé" },
      skills: { kicker: "04 · Compétences", title: "Boîte à outils technique" },
      education: { kicker: "05 · Formation", title: "Formation & engagement" },
    },
    upcoming: "À venir",
    viewCode: "Voir le code",
    inProgress: "En cours",
    interestsTitle: "Centres d'intérêt",
    languagesTitle: "Langues",
    domains: {
      Software: "Logiciel",
      Data: "Data",
      "Cloud & DevOps": "Cloud & DevOps",
      DevOps: "DevOps",
      Security: "Sécurité",
      AI: "IA",
    },
    contact: {
      kicker: "06 · Contact",
      title: "Construisons quelque chose ensemble",
      text: "Je suis ouvert aux postes de développeur Java et Java full-stack à Dakar.",
    },
    footer: "Réalisé avec Next.js, déployé sur Vercel",
  },
};
