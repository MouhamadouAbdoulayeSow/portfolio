import { repo, type Content } from "./types";

export const fr: Content = {
  profile: {
    name: "Mouhamadou Abdoulaye SOW",
    shortName: "M. A. SOW",
    role: "Ingénieur logiciel · Data · Cloud & DevOps · Sécurité",
    tagline:
      "Ingénieur full-stack et cloud chez Atos, élève-ingénieur en dernière année. Je conçois des logiciels sécurisés et orientés données, et j'automatise leur déploiement dans le cloud.",
    location: "Thiès / Dakar, Sénégal",
    email: "sowma@ept.edu.sn",
    github: "https://github.com/MouhamadouAbdoulayeSow",
    linkedin: "https://www.linkedin.com/in/mouhamadou-abdoulaye-sow-35466b374/",
    cv: "/CV_Mouhamadou_Abdoulaye_SOW_FR.pdf",
    focus: ["Génie logiciel", "Data Engineering", "Cloud & DevOps", "Sécurité", "Java · Python"],
  },

  about: {
    paragraphs: [
      "Je suis stagiaire ingénieur full-stack et cloud chez Atos et élève-ingénieur en dernière année d'Informatique et Télécommunications à l'École Polytechnique de Thiès, la principale école d'ingénieurs du Sénégal.",
      "L'EPT m'a donné une formation d'ingénieur généraliste. Deux années de tronc commun en mathématiques, algorithmique et programmation ont été suivies d'une spécialisation en informatique et télécommunications : data science avec Python, systèmes informatiques, réseaux, IoT, machine learning, cloud computing, sécurité et data engineering, ainsi qu'anglais, communication et gestion de projet.",
      "Chez Atos, je mets ces compétences en pratique sur des projets pour des clients du secteur public, de la banque et des télécoms : services Java et Spring Boot, modèles de données, déploiements Docker sur AWS, pipelines CI/CD et API sécurisées.",
      "Mes principaux domaines d'intérêt sont le cloud computing, le data engineering, la sécurité et le développement logiciel.",
    ],
    stats: [
      { value: "2", label: "stages en ingénierie logicielle chez Atos" },
      { value: "10+", label: "projets en logiciel, data, cloud et sécurité" },
      { value: "3", label: "secteurs servis chez Atos : public, banque, télécoms" },
    ],
  },

  experiences: [
    {
      title: "Stagiaire ingénieur logiciel – Projet de fin d'études",
      company: "Atos",
      location: "Dakar, Sénégal",
      period: "Déc. 2026 – Mai 2027",
      upcoming: true,
      points: ["Projet de fin d'études d'ingénieur et projets clients chez Atos."],
      stack: [],
    },
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
        "Création de tableaux de bord Power BI pour suivre les indicateurs clés.",
      ],
      stack: ["Docker", "Portainer", "AWS", "GitHub CI/CD", "API REST", "Power BI", "Angular"],
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
      description: "Plateforme e-learning de l'EPT en microservices Spring Boot et Kafka, déployée sur AWS par CI/CD.",
      stack: ["Spring Boot", "Kafka", "Docker", "AWS EC2"],
      link: repo("LMS_universities"),
    },
    {
      title: "Système de recommandation",
      domains: ["Data", "Software"],
      description: "Moteur de recommandation e-commerce qui combine filtrage par contenu et filtrage collaboratif, exposé par une API Django.",
      stack: ["Python", "scikit-learn", "Django REST", "MongoDB"],
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
      title: "MS Platform – Service d'authentification",
      domains: ["Software", "Security"],
      description: "Service d'authentification avec jetons JWT d'accès et de rafraîchissement, contrôle d'accès par rôles et révocation des jetons.",
      stack: ["Spring Security", "JWT", "Redis", "PostgreSQL"],
      link: repo("MS_Platform"),
    },
    {
      title: "API d'authentification par SMS",
      domains: ["Security", "Software"],
      description: "Inscription et réinitialisation du mot de passe par code SMS à usage unique envoyé avec Twilio.",
      stack: ["Django REST", "Twilio Verify", "Token auth"],
      link: repo("auth_Tel"),
    },
    {
      title: "ShopVocal",
      domains: ["Software", "AI"],
      description: "Application mobile à commande vocale pour aider les commerçants à gérer ventes, stock et clients.",
      stack: ["Flutter", "FastAPI", "PostgreSQL", "Whisper"],
      link: repo("ShopVocal"),
    },
    {
      title: "SenPanier Bio",
      domains: ["Software"],
      description: "Marketplace de produits bio au Sénégal, avec des espaces pour les producteurs et les fournisseurs.",
      stack: ["Next.js", "TypeScript", "MongoDB"],
      link: repo("SenPanierFront"),
    },
    {
      title: "Compteur de places de parking",
      domains: ["AI"],
      description: "Compte les places libres dans une vidéo grâce aux caractéristiques VGG16 et à un classifieur SVM.",
      stack: ["Python", "OpenCV", "TensorFlow", "Flask"],
      link: repo("FlaskProject_CV"),
    },
    {
      title: "Pipeline DevSecOps",
      domains: ["Cloud & DevOps", "Security", "Software"],
      description: "Pipeline CI/CD qui analyse, construit et déploie une API Spring Boot sur Kubernetes, avec analyse du code, des dépendances et des images.",
      stack: ["GitHub Actions", "Kubernetes", "Trivy", "Semgrep"],
      link: repo("devsecops-springboot-pipeline"),
      inProgress: true,
    },
    {
      title: "Pipeline de données cloud sécurisé",
      domains: ["Data", "Cloud & DevOps", "Security"],
      description: "Pipeline Kafka et PySpark sur AWS, provisionné avec Terraform, avec IAM à moindre privilège et chiffrement KMS.",
      stack: ["Kafka", "PySpark", "Terraform", "AWS KMS"],
      link: repo("secure-cloud-data-pipeline"),
      inProgress: true,
    },
    {
      title: "Détection d'anomalies cloud",
      domains: ["Security", "Data", "Cloud & DevOps"],
      description: "Analyse les journaux AWS CloudTrail et VPC Flow Logs pour détecter les activités suspectes et lever des alertes sur un tableau de bord.",
      stack: ["AWS CloudTrail", "Python", "Spark", "Grafana"],
      link: repo("cloud-anomaly-detection"),
      inProgress: true,
    },
  ],

  skills: [
    {
      group: "Génie logiciel",
      items: ["Java", "Spring Boot", "Python", "FastAPI", "Django", "API REST", "Microservices", "TypeScript", "React", "Angular", "C/C++", "Go"],
      core: ["Java", "Spring Boot", "Python", "API REST"],
    },
    {
      group: "Data Engineering",
      items: ["Apache Kafka", "PostgreSQL", "MongoDB", "Redis", "MySQL", "pgvector", "SQL", "Pandas", "NumPy", "Power BI"],
      core: ["Apache Kafka", "PostgreSQL", "SQL"],
    },
    {
      group: "Cloud & DevOps",
      items: ["AWS EC2, S3 & ECR", "Docker", "Docker Compose", "Portainer", "GitHub Actions", "Jenkins", "CI/CD", "Kubernetes", "Kustomize", "Terraform", "Linux", "Bash", "Git"],
      core: ["AWS EC2, S3 & ECR", "Docker", "Kubernetes", "Terraform"],
    },
    {
      group: "Sécurité",
      items: ["Keycloak IAM / SSO", "OAuth2", "JWT", "RBAC", "Cryptographie", "Sécurité réseau", "Sécurité des bases de données"],
      core: ["Keycloak IAM / SSO", "OAuth2", "RBAC"],
    },
    {
      group: "En apprentissage",
      items: ["Helm", "Prometheus", "Grafana", "Trivy", "Checkov", "Semgrep", "AWS IAM & KMS"],
    },
    {
      group: "IA & Machine Learning",
      items: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "RAG & API LLM"],
    },
  ],

  education: [
    {
      degree: "Diplôme d'ingénieur – Informatique et Télécommunications",
      school: "École Polytechnique de Thiès (EPT)",
      location: "Thiès, Sénégal",
      period: "Oct. 2022 – 2027",
      details: [
        "Formation en 5 ans de niveau Master, dont 2 années de classes préparatoires en mathématiques, physique et programmation.",
        "Cours : bases de données distribuées, Big Data, systèmes cloud-native, DevOps, ML/DL & MLOps, cryptographie, cybersécurité, réseaux, recherche opérationnelle, traitement du signal.",
      ],
    },
    {
      degree: "Baccalauréat scientifique – mention",
      school: "Lycée de Yeumbeul (LEID)",
      location: "Dakar, Sénégal",
      period: "Juillet 2022",
      details: [],
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
      points: ["Direction d'une équipe éditoriale étudiante et gestion de la production de contenus pour les élèves."],
    },
  ],

  interests: [
    "Architecture logicielle & clean code",
    "Microservices & conception d'API",
    "Open source",
    "Pipelines de données & streaming",
    "Modélisation & analyse de données",
    "Traitement Big Data",
    "Architecture cloud-native",
    "Infrastructure as Code",
    "Kubernetes & conteneurs",
    "Automatisation CI/CD",
    "Sécurité cloud & IAM",
    "DevSecOps",
    "Cryptographie",
    "CTF & défis de sécurité",
  ],

  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Professionnel · C1" },
    { name: "Pulaar", level: "Langue maternelle" },
    { name: "Wolof", level: "Courant" },
  ],

  ui: {
    lang: "fr",
    meta: {
      title: "Mouhamadou Abdoulaye SOW – Portfolio",
      description:
        "Ingénieur full-stack et cloud chez Atos, élève-ingénieur en dernière année. Génie logiciel, data, cloud & DevOps et sécurité.",
    },
    nav: { about: "Profil", experience: "Expérience", projects: "Projets", skills: "Compétences", education: "Formation", contact: "Contact" },
    switchLabel: "EN",
    hello: "Bonjour, je suis",
    downloadCv: "Télécharger le CV",
    portraitAlt: "Portrait de Mouhamadou Abdoulaye Sow",
    sections: {
      about: { kicker: "01 · Profil", title: "Logiciel, data, cloud et sécurité, de bout en bout" },
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
      text: "Je suis ouvert aux stages et aux postes junior en génie logiciel, data engineering, cloud/DevOps et sécurité cloud.",
    },
    footer: "Réalisé avec Next.js, déployé sur Vercel",
  },
};
