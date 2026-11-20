// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Mouhamadou Abdoulaye SOW",
  shortName: "M. A. SOW",
  role: "Software Engineer · Data · Cloud & DevOps · Security",
  tagline:
    "Full-stack and cloud engineer at Atos and final-year engineering student. I build secure, data-driven software and automate how it is shipped to the cloud. My goal is to become a Cloud Security and Solutions Architect.",
  location: "Thiès / Dakar, Senegal",
  email: "sowma@ept.edu.sn",
  github: "https://github.com/cloudDevML",
  linkedin: "https://www.linkedin.com/in/mouhamadou-abdoulaye-sow-35466b374/",
  cv: "/CV_Mouhamadou_Abdoulaye_SOW.pdf",
  focus: ["Software Engineering", "Data Engineering", "Cloud & DevOps", "Security", "Java · Python"],
};

export const about = {
  paragraphs: [
    "I am a full-stack and cloud engineer intern at Atos and a final-year student in Computer Science & Telecommunications at École Polytechnique de Thiès, Senegal's leading engineering school.",
    "My work combines four areas. I design software with Java, Spring Boot and Python APIs. I build data pipelines with Kafka, PostgreSQL and MongoDB. I containerise and deploy services to AWS with Docker and CI/CD. I secure them with Keycloak, OAuth2, JWT and RBAC. At Atos, I ship these skills to production for public-sector, banking and telecom clients.",
    "I am now moving towards DevSecOps and cloud security: infrastructure as code with Terraform, Kubernetes, least-privilege IAM, encryption and security scanning in CI/CD. My long-term goal is to design secure, scalable cloud architectures as a Cloud Security and Solutions Architect.",
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

export type Project = {
  title: string;
  category: "Software" | "Data" | "Cloud & DevOps" | "Security" | "AI";
  description: string;
  stack: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Raft Consensus Algorithm",
    category: "Cloud & DevOps",
    description:
      "Implementation of leader election and log replication across containerised nodes to study fault tolerance and consistency in distributed systems.",
    stack: ["Go", "Python", "Docker", "etcd"],
    featured: true,
  },
  {
    title: "LMS Universities",
    category: "Software",
    description:
      "Distributed e-learning platform for EPT: 8 Spring Boot microservices communicating through Kafka events, secured with Keycloak single sign-on, OAuth2/JWT and role-based access control. Includes sandboxed code execution with Judge0, real-time notifications and a RAG-based AI assistant.",
    stack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "MongoDB", "Keycloak", "pgvector"],
    featured: true,
  },
  {
    title: "MS Platform",
    category: "Data",
    description:
      "Event-driven backend where services exchange data through Kafka streams, with Redis caching, service discovery and centralised configuration.",
    stack: ["Spring Cloud", "Kafka", "Redis", "PostgreSQL", "Docker"],
    featured: true,
  },
  {
    title: "Automated CI/CD Pipeline",
    category: "Cloud & DevOps",
    description: "GitHub Actions pipeline that builds, tests and publishes Docker images for Java services on every push.",
    stack: ["GitHub Actions", "Maven", "Docker"],
  },
  {
    title: "Parking Space Counter",
    category: "AI",
    description:
      "Containerised real-time computer-vision service that processes live video streams to detect and count free parking spaces.",
    stack: ["Python", "OpenCV", "PyTorch", "Docker"],
  },
  {
    title: "Plant Disease Detection",
    category: "AI",
    description: "Deep-learning image classifier for plant diseases, served through a Django REST API.",
    stack: ["Python", "PyTorch", "Django"],
  },
  {
    title: "Waste Classification",
    category: "AI",
    description: "Image classifier that sorts waste into organic and recyclable, with an interactive web interface.",
    stack: ["TensorFlow", "Streamlit"],
  },
  {
    title: "Recommendation Engine",
    category: "Data",
    description: "Recommendation system built on the analysis of user behaviour data stored in PostgreSQL.",
    stack: ["Python", "scikit-learn", "PostgreSQL"],
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
    items: ["AWS EC2 & S3", "Docker", "Docker Compose", "Portainer", "GitHub Actions", "CI/CD", "Linux", "Bash", "Git", "Raft / etcd"],
    core: ["AWS EC2 & S3", "Docker", "GitHub Actions"],
  },
  {
    group: "Security",
    items: ["Keycloak (IAM / SSO)", "OAuth2", "JWT", "RBAC", "Cryptography", "Network security", "Database security"],
    core: ["Keycloak (IAM / SSO)", "OAuth2", "RBAC"],
  },
  {
    group: "Learning now",
    items: ["Kubernetes", "Terraform", "Prometheus", "Grafana", "Trivy", "Checkov", "Semgrep", "AWS IAM & KMS"],
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
