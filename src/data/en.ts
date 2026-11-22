import { repo, type Content } from "./types";

export const en: Content = {
  profile: {
    name: "Mouhamadou Abdoulaye SOW",
    shortName: "M. A. SOW",
    role: "Software Engineer · Data · Cloud & DevOps · Security",
    tagline:
      "Full-stack and cloud engineer at Atos and final-year engineering student. I build secure, data-driven software and automate how it is shipped to the cloud.",
    location: "Thiès / Dakar, Senegal",
    email: "sowma@ept.edu.sn",
    github: "https://github.com/MouhamadouAbdoulayeSow",
    linkedin: "https://www.linkedin.com/in/mouhamadou-abdoulaye-sow-35466b374/",
    cv: "/CV_Mouhamadou_Abdoulaye_SOW.pdf",
    focus: ["Software Engineering", "Data Engineering", "Cloud & DevOps", "Security", "Java · Python"],
  },

  about: {
    paragraphs: [
      "I am a full-stack and cloud engineer intern at Atos and a final-year Computer Science engineering student at École Polytechnique de Thiès, Senegal's leading engineering school.",
      "EPT gave me a broad engineering foundation. Two years of common core in mathematics, algorithms and programming were followed by a specialisation in computer science: data science with Python, computer systems, networks, IoT, machine learning, cloud computing, security and data engineering, along with English, communication and project management.",
      "At Atos, I apply these skills on projects for public-sector, banking and telecom clients: Java and Spring Boot services, data models, Docker deployments to AWS, CI/CD pipelines and secured APIs.",
      "My main areas of interest are cloud computing, data engineering, security and software development.",
    ],
    stats: [
      { value: "2", label: "software engineering internships at Atos" },
      { value: "10+", label: "projects across software, data, cloud and security" },
      { value: "3", label: "industries served at Atos: public sector, banking, telecom" },
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
      description: "E-learning platform for EPT built with Spring Boot microservices and Kafka, deployed to AWS through CI/CD.",
      stack: ["Spring Boot", "Kafka", "Docker", "AWS EC2"],
      link: repo("LMS_universities"),
    },
    {
      title: "Recommendation System",
      domains: ["Data", "Software"],
      description: "E-commerce recommender combining content-based and collaborative filtering, served through a Django API.",
      stack: ["Python", "scikit-learn", "Django REST", "MongoDB"],
      link: repo("Projet_Transversal_DIC_1"),
    },
    {
      title: "LLM on Kubernetes",
      domains: ["Cloud & DevOps", "Security"],
      description: "Deployed an LLM on Kubernetes with Ingress, network policies and autoscaling.",
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
      title: "MS Platform – Auth Service",
      domains: ["Software", "Security"],
      description: "Authentication service with JWT access and refresh tokens, role-based access and token revocation.",
      stack: ["Spring Security", "JWT", "Redis", "PostgreSQL"],
      link: repo("MS_Platform"),
    },
    {
      title: "Phone Auth API",
      domains: ["Security", "Software"],
      description: "Sign-up and password reset with SMS one-time codes sent through Twilio.",
      stack: ["Django REST", "Twilio Verify", "Token auth"],
      link: repo("auth_Tel"),
    },
    {
      title: "ShopVocal",
      domains: ["Software", "AI"],
      description: "Voice-driven mobile app for retailers to manage sales, stock and customers.",
      stack: ["Flutter", "FastAPI", "PostgreSQL", "Whisper"],
      link: repo("ShopVocal"),
    },
    {
      title: "SenPanier Bio",
      domains: ["Software"],
      description: "Marketplace for organic products in Senegal, with dashboards for producers and suppliers.",
      stack: ["Next.js", "TypeScript", "MongoDB"],
      link: repo("SenPanierFront"),
    },
    {
      title: "Parking Space Counter",
      domains: ["AI"],
      description: "Counts free parking spaces in a video with VGG16 features and an SVM classifier.",
      stack: ["Python", "OpenCV", "TensorFlow", "Flask"],
      link: repo("FlaskProject_CV"),
    },
    {
      title: "DevSecOps Pipeline",
      domains: ["Cloud & DevOps", "Security", "Software"],
      description: "CI/CD pipeline that scans, builds and deploys a Spring Boot API to Kubernetes with code, dependency and image scanning.",
      stack: ["GitHub Actions", "Kubernetes", "Trivy", "Semgrep"],
      link: repo("devsecops-springboot-pipeline"),
      inProgress: true,
    },
    {
      title: "Secure Cloud Data Pipeline",
      domains: ["Data", "Cloud & DevOps", "Security"],
      description: "Kafka and PySpark pipeline on AWS, provisioned with Terraform, with least-privilege IAM and KMS encryption.",
      stack: ["Kafka", "PySpark", "Terraform", "AWS KMS"],
      link: repo("secure-cloud-data-pipeline"),
      inProgress: true,
    },
    {
      title: "Cloud Anomaly Detection",
      domains: ["Security", "Data", "Cloud & DevOps"],
      description: "Analyses AWS CloudTrail and VPC Flow Logs to detect suspicious activity and raise alerts on a dashboard.",
      stack: ["AWS CloudTrail", "Python", "Spark", "Grafana"],
      link: repo("cloud-anomaly-detection"),
      inProgress: true,
    },
  ],

  skills: [
    {
      group: "Software Engineering",
      items: ["Java", "Spring Boot", "Python", "FastAPI", "Django", "REST APIs", "Microservices", "TypeScript", "React", "Angular", "C/C++", "Go"],
      core: ["Java", "Spring Boot", "Python", "REST APIs"],
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
      group: "Security",
      items: ["Keycloak (IAM / SSO)", "OAuth2", "JWT", "RBAC", "Cryptography", "Network security", "Database security"],
      core: ["Keycloak (IAM / SSO)", "OAuth2", "RBAC"],
    },
    {
      group: "Learning now",
      items: ["Helm", "Prometheus", "Grafana", "Trivy", "Checkov", "Semgrep", "AWS IAM & KMS"],
    },
    {
      group: "AI & Machine Learning",
      items: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "RAG & LLM APIs"],
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
    "Open source",
    "Data pipelines & streaming",
    "Data modelling & analytics",
    "Big Data processing",
    "Cloud-native architecture",
    "Infrastructure as Code",
    "Kubernetes & containers",
    "CI/CD automation",
    "Cloud security & IAM",
    "DevSecOps",
    "Cryptography",
    "CTF & security challenges",
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
        "Full-stack and cloud engineer at Atos and final-year engineering student. Software engineering, data, cloud & DevOps and security.",
    },
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact" },
    switchLabel: "FR",
    hello: "Hello, I'm",
    downloadCv: "Download CV",
    portraitAlt: "Portrait of Mouhamadou Abdoulaye Sow",
    sections: {
      about: { kicker: "01 · About", title: "Software, data, cloud and security, end to end" },
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
      text: "I am open to internships and junior roles in software engineering, data engineering, cloud/DevOps and cloud security.",
    },
    footer: "Built with Next.js, deployed on Vercel",
  },
};
