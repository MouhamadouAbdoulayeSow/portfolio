// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Mouhamadou Abdoulaye SOW",
  shortName: "M. A. SOW",
  role: "Software Engineer · Data · Cloud & DevOps · Security",
  tagline:
    "Full-stack and cloud engineer at Atos and final-year engineering student. I build secure, data-driven software and automate how it is shipped to the cloud. My goal is to become a Cloud Security and Solutions Architect.",
  location: "Thiès / Dakar, Senegal",
  email: "sowma@ept.edu.sn",
  github: "https://github.com/MouhamadouAbdoulayeSow",
  linkedin: "https://www.linkedin.com/in/mouhamadou-abdoulaye-sow-35466b374/",
  cv: "/CV_Mouhamadou_Abdoulaye_SOW.pdf",
  focus: ["Software Engineering", "Data Engineering", "Cloud & DevOps", "Security", "Java · Python"],
};

export const about = {
  paragraphs: [
    "I am a full-stack and cloud engineer intern at Atos and a final-year student in Computer Science & Telecommunications at École Polytechnique de Thiès, Senegal's leading engineering school.",
    "My work combines four areas. I design software with Java, Spring Boot and Python APIs. I build data pipelines with Kafka, PostgreSQL and MongoDB. I containerise and deploy services to AWS with Docker and CI/CD. I secure them with Keycloak, OAuth2, JWT and RBAC. At Atos, I ship these skills to production for public-sector, banking and telecom clients.",
    "I already deploy workloads on Kubernetes and write infrastructure as code with Terraform. I am now moving towards DevSecOps and cloud security: least-privilege IAM, encryption, observability and security scanning in CI/CD. My long-term goal is to design secure, scalable cloud architectures as a Cloud Security and Solutions Architect.",
  ],
  stats: [
    { value: "2", label: "software engineering internships at Atos" },
    { value: "10+", label: "projects across software, data, cloud and security" },
    { value: "3", label: "industries served at Atos: public sector, banking, telecom" },
  ],
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  upcoming?: boolean;
  points: string[];
  stack: string[];
};

export const experiences: Experience[] = [
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
];

export type Domain = "Software" | "Data" | "Cloud & DevOps" | "Security" | "AI";

export type Project = {
  title: string;
  domains: Domain[];
  description: string;
  stack: string[];
  link?: string;
  featured?: boolean;
};

const repo = (name: string) => `https://github.com/MouhamadouAbdoulayeSow/${name}`;

export const projects: Project[] = [
  {
    title: "LMS Universities",
    domains: ["Software", "Cloud & DevOps", "Security", "AI"],
    description:
      "E-learning platform for EPT, deployed online. Spring Boot microservices behind a Spring Cloud gateway, with Eureka, Config Server, Kafka events and a PostgreSQL database per service. JWT authentication with three roles, sandboxed code execution, video meetings, real-time notifications, gamification and a RAG chatbot. A GitHub Actions pipeline rebuilds only the changed services and deploys them to AWS EC2; a Jenkins pipeline pushes images to Amazon ECR. An improved version, EduMarket, adds a course marketplace with orders and recommendations.",
    stack: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "PostgreSQL", "pgvector", "Redis", "React", "Docker", "GitHub Actions", "Jenkins", "AWS EC2"],
    link: repo("LMS_universities"),
    featured: true,
  },
  {
    title: "Hybrid Recommendation System",
    domains: ["Data", "Software"],
    description:
      "E-commerce recommender combining a content-based model, TF-IDF and cosine similarity, with item-to-item collaborative filtering trained on user events stored in MongoDB. Exposed through a Django REST API with an admin dashboard for KPIs, recommendation performance and model retraining.",
    stack: ["Python", "scikit-learn", "pandas", "Django REST", "MongoDB", "PostgreSQL", "Celery", "Redis", "React"],
    link: repo("Projet_Transversal_DIC_1"),
    featured: true,
  },
  {
    title: "LLM Deployment on Kubernetes",
    domains: ["Cloud & DevOps", "Security"],
    description:
      "Deployed Ollama and Open WebUI with Docker Compose, then on Kubernetes with Kustomize: persistent volume, Ingress, NetworkPolicy isolation, resource limits and a horizontal autoscaler tested with a load generator.",
    stack: ["Kubernetes", "Minikube", "Kustomize", "Docker Compose", "Ingress", "NetworkPolicy", "HPA", "Ollama"],
    link: repo("LLM_Deployment_Devops_Project"),
    featured: true,
  },
  {
    title: "AWS Infrastructure as Code with Terraform",
    domains: ["Cloud & DevOps"],
    description:
      "S3 and DynamoDB infrastructure written as reusable Terraform modules with validated variables, separate dev and prod environments and native Terraform tests, run against Floci, a local AWS emulator.",
    stack: ["Terraform", "AWS S3", "DynamoDB", "Floci", "IaC"],
    link: repo("LLM_Deployment_Devops_Project"),
    featured: true,
  },
  {
    title: "MS Platform – Secure Auth Service",
    domains: ["Software", "Security"],
    description:
      "Spring Boot authentication and user-management service: JWT access and refresh tokens, token revocation with a Redis blacklist, role-based access with Spring Security, password reset by e-mail, Flyway migrations, Kafka configuration and OpenAPI documentation.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "Redis", "Kafka", "PostgreSQL", "Flyway"],
    link: repo("MS_Platform"),
    featured: true,
  },
  {
    title: "Phone Number Authentication API",
    domains: ["Security", "Software"],
    description:
      "REST API where users sign up and reset their password with SMS one-time codes sent through Twilio Verify. Custom user model keyed by phone number, token authentication and token revocation on logout.",
    stack: ["Python", "Django REST", "Twilio Verify", "Token auth"],
    link: repo("auth_Tel"),
  },
  {
    title: "ShopVocal",
    domains: ["Software", "AI"],
    description:
      "Mobile sales, stock and customer-debt management app for Senegalese retailers, driven by voice. Speech is transcribed with Whisper and parsed by an LLM fallback chain. FastAPI backend on PostgreSQL with JWT authentication and secure token storage on the device.",
    stack: ["Flutter", "FastAPI", "PostgreSQL", "JWT", "Whisper", "LLM APIs"],
    link: repo("ShopVocal"),
  },
  {
    title: "SenPanier Bio",
    domains: ["Software"],
    description:
      "Marketplace for organic products in Senegal with dashboards for producers, processors and suppliers, a cart and checkout. JWT authentication on PostgreSQL and business data in MongoDB.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "PostgreSQL", "MongoDB"],
    link: repo("SenPanierFront"),
  },
  {
    title: "Parking Space Counter",
    domains: ["AI"],
    description:
      "Flask web app that counts free parking spaces in a video: each spot is located with a mask, described with VGG16 features and classified as free or occupied by an SVM.",
    stack: ["Python", "Flask", "OpenCV", "TensorFlow", "scikit-learn"],
    link: repo("FlaskProject_CV"),
  },
  {
    title: "Plant Disease Detection",
    domains: ["AI", "Software"],
    description: "Deep-learning image classifier for plant diseases, served through a Django REST API.",
    stack: ["Python", "PyTorch", "Django REST"],
    link: repo("planteDiseaseDetection"),
  },
];

export const skills: { group: string; items: string[]; core?: string[] }[] = [
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
];

export const education = [
  {
    degree: "Engineering Degree – Computer Science & Telecommunications",
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
    details: [],
  },
];

export const leadership = [
  {
    title: "Vice-President – Galsen AI Community, EPT chapter",
    period: "2023 – 2024",
    points: [
      "Organised hands-on AI workshops at the school's annual tech symposium.",
      "Guided fellow students to the Elements of AI and NVIDIA Deep Learning Institute certifications.",
      "Promoted applied AI research on campus and encouraged students to publish their work.",
    ],
  },
  {
    title: "President – Newspaper Sub-Commission",
    period: "2023 – 2024",
    points: ["Led a student editorial team and managed content production for the student body."],
  },
];

export const interests = [
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
];

export const languages = [
  { name: "French", level: "Native" },
  { name: "English", level: "Professional · C1" },
  { name: "Pulaar", level: "Native" },
  { name: "Wolof", level: "Fluent" },
];

export type RoadmapProject = {
  title: string;
  domains: string;
  goal: string;
  stack: string[];
  status: "In progress" | "Planned";
};

export const roadmapProjects: RoadmapProject[] = [
  {
    title: "DevSecOps Pipeline for a Spring Boot Microservice",
    domains: "Software · DevOps · Security",
    goal: "Containerise a Java REST API with a multi-stage, non-root image and deploy it to Kubernetes through a CI/CD pipeline with code analysis, dependency scanning, image scanning and IaC scanning.",
    stack: ["Java", "Spring Boot", "Docker", "Kubernetes", "GitHub Actions", "Semgrep", "Trivy", "Checkov"],
    status: "Planned",
  },
  {
    title: "Secure Cloud Data Pipeline with Terraform",
    domains: "Data · Cloud · Security",
    goal: "Ingest and process data with Kafka and PySpark on infrastructure fully provisioned with Terraform, using least-privilege IAM, S3 encryption with KMS, managed secrets and a CIS compliance audit with Prowler.",
    stack: ["Kafka", "PySpark", "AWS S3", "Terraform", "KMS", "Vault", "Prowler", "Grafana"],
    status: "Planned",
  },
  {
    title: "Cloud Anomaly Detection & Security Audit",
    domains: "Data · Cloud Security",
    goal: "Analyse CloudTrail and VPC Flow Logs in a data pipeline to detect suspicious behaviour such as IAM privilege escalation or abnormal storage access, with alerts and remediation steps on a dashboard.",
    stack: ["AWS CloudTrail", "VPC Flow Logs", "Python", "Spark", "ELK", "Grafana"],
    status: "Planned",
  },
];

export const certifications: { name: string; stage: string }[] = [
  { name: "AWS Certified Solutions Architect – Associate", stage: "Next" },
  { name: "HashiCorp Certified: Terraform Associate", stage: "Next" },
  { name: "CompTIA Security+ or AWS Certified Security – Specialty", stage: "Then" },
  { name: "CKA, then CKS – Kubernetes Administrator & Security", stage: "Later" },
];

export const careerGoal = {
  now: "Software · Data · Cloud & DevOps",
  next: "DevSecOps / Cloud Security Engineer",
  target: "Cloud Security Architect / Solutions Architect",
};
