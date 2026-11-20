// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Mouhamadou Abdoulaye SOW",
  shortName: "M. A. SOW",
  role: "Final-year Engineering Student · Computer Science & Telecommunications",
  tagline:
    "I build distributed systems, machine-learning models and cloud infrastructure, and I learn by implementing things from scratch.",
  location: "Thiès / Dakar, Senegal",
  email: "mamadoualassane2003@gmail.com",
  github: "https://github.com/cloudDevML",
  linkedin: "https://www.linkedin.com/in/mouhamadou-abdoulaye-sow-35466b374/",
  cv: "/CV_Mouhamadou_Abdoulaye_SOW.pdf",
  focus: ["Distributed Systems", "Machine Learning", "Cloud & Containers", "Data Processing", "Linux & DevOps"],
};

export const about = {
  paragraphs: [
    "I am a final-year engineering student at École Polytechnique de Thiès, Senegal's leading engineering school, with a strong foundation in mathematics and computer science.",
    "I work at the intersection of distributed systems, machine learning and cloud infrastructure. I implemented the Raft consensus algorithm to understand fault tolerance, designed event-driven platforms on Apache Kafka and trained computer-vision models with PyTorch. Two internships at Atos taught me to ship reliable software to production.",
    "I read research papers out of curiosity, enjoy mathematics, and love working in international teams. My goal is to apply these skills to large-scale scientific computing.",
  ],
  stats: [
    { value: "2", label: "software engineering internships at Atos" },
    { value: "10+", label: "projects in distributed systems, ML and cloud" },
    { value: "4", label: "languages spoken, including French and English" },
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
    stack: ["Docker", "Portainer", "AWS", "CI/CD", "Power BI", "REST APIs"],
  },
  {
    title: "Full-Stack Developer Intern",
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
  category: "Distributed Systems" | "Machine Learning" | "Cloud & DevOps";
  description: string;
  stack: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Raft Consensus Algorithm",
    category: "Distributed Systems",
    description:
      "Implementation of leader election and log replication across containerised nodes to study fault tolerance and consistency in distributed systems.",
    stack: ["Go", "Python", "Docker", "etcd"],
    featured: true,
  },
  {
    title: "LMS Universities",
    category: "Distributed Systems",
    description:
      "Distributed e-learning platform for EPT: 8 microservices communicating through Kafka events, real-time WebSocket notifications, sandboxed code execution with Judge0, Keycloak single sign-on and a RAG-based AI assistant.",
    stack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "MongoDB", "Keycloak", "pgvector"],
    featured: true,
  },
  {
    title: "Parking Space Counter",
    category: "Machine Learning",
    description:
      "Containerised real-time computer-vision service that processes live video streams to detect and count free parking spaces.",
    stack: ["Python", "OpenCV", "PyTorch", "Docker"],
    featured: true,
  },
  {
    title: "MS Platform",
    category: "Distributed Systems",
    description:
      "Event-driven microservice backend with service discovery, centralised configuration, asynchronous messaging and Redis caching.",
    stack: ["Spring Cloud", "Kafka", "Redis", "PostgreSQL", "Docker"],
  },
  {
    title: "Plant Disease Detection",
    category: "Machine Learning",
    description: "Deep-learning image classifier for plant diseases, served through a Django REST API.",
    stack: ["Python", "PyTorch", "Django"],
  },
  {
    title: "Waste Classification",
    category: "Machine Learning",
    description: "Image classifier that sorts waste into organic and recyclable, with an interactive web interface.",
    stack: ["TensorFlow", "Streamlit"],
  },
  {
    title: "Recommendation Engine",
    category: "Machine Learning",
    description: "Recommendation system based on the analysis of user behaviour data.",
    stack: ["Python", "scikit-learn", "PostgreSQL"],
  },
  {
    title: "Automated CI/CD Pipeline",
    category: "Cloud & DevOps",
    description: "Automated build, testing and container-image publication for Java services.",
    stack: ["GitHub Actions", "Maven", "Docker"],
  },
];

export const skills: { group: string; items: string[]; core?: string[] }[] = [
  { group: "Programming", items: ["Python", "Java", "C/C++", "Go", "TypeScript", "SQL", "Bash"], core: ["Python", "Java"] },
  { group: "Machine Learning & Data", items: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "NumPy", "Pandas", "RAG & LLM APIs", "Power BI"], core: ["PyTorch"] },
  { group: "Distributed Systems", items: ["Apache Kafka", "Raft / etcd", "Redis", "Microservices", "Spring Cloud", "WebSocket"], core: ["Apache Kafka"] },
  { group: "Cloud & DevOps", items: ["Linux", "Docker", "Docker Compose", "Portainer", "AWS EC2 & S3", "GitHub Actions", "Git"], core: ["Linux", "Docker"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "pgvector", "MySQL", "Redis"] },
  { group: "Software & Security", items: ["Spring Boot", "Django", "FastAPI", "React", "Angular", "Cryptography", "OAuth2 / JWT", "Keycloak"] },
  { group: "Familiar with", items: ["Kubernetes", "Terraform", "Prometheus", "Grafana"] },
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
  "Reading research papers",
  "Discovering new things",
  "Mathematics",
  "AI agents",
  "Machine learning",
  "Robotics",
  "IoT",
];

export const languages = [
  { name: "French", level: "Native" },
  { name: "English", level: "Professional · C1" },
  { name: "Pulaar", level: "Native" },
  { name: "Wolof", level: "Fluent" },
];
