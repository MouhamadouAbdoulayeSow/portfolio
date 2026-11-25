"""Build the two French CVs targeted at Java offers from one template.

Usage: python3 cv/build_java_cv.py, then render each HTML to PDF with headless Chrome.
- CV_Mouhamadou_Abdoulaye_SOW_Java_FR.html: Java Software Engineer, backend focus
- CV_Mouhamadou_Abdoulaye_SOW_Java_VueJS_FR.html: Java / Vue.js developer, full-stack focus
The page style and contact block are taken from CV_Mouhamadou_Abdoulaye_SOW_FR.html.
"""
from pathlib import Path

HERE = Path(__file__).parent
base = (HERE / "CV_Mouhamadou_Abdoulaye_SOW_FR.html").read_text(encoding="utf-8")
head = base[: base.index("</style>")] + """  .quality { margin-bottom: 1.6mm; }
  .quality b { color: var(--navy); display:block; font-size: 8.3pt; }
  .quality span { color: var(--muted); font-size: 7.7pt; }
</style>
</head>
<body>
"""
contact = base[base.index("    <section>\n      <h3>Contact</h3>") : base.index("    <section>\n      <h3>Compétences techniques</h3>")]
# Personal e-mail for job applications
contact = contact.replace("mailto:sowma@ept.edu.sn", "mailto:mamadoualassane2003@gmail.com").replace(
    ">sowma@ept.edu.sn<", ">mamadoualassane2003@gmail.com<")


def chips(strong, normal):
    return "".join(f'<span class="strong">{s}</span>' for s in strong) + "".join(f"<span>{s}</span>" for s in normal)


GROUPS = {
    "java": ("Java &amp; Spring", ["Java 17", "Spring Boot", "Spring Data JPA", "Spring Security"],
             ["POO", "Spring MVC", "Hibernate", "Spring Cloud", "OpenFeign", "Bean Validation", "Lombok", "Gradle"]),
    "api": ("API &amp; architecture", ["API REST", "Microservices", "Apache Kafka"],
            ["RabbitMQ", "OpenAPI / Swagger", "Spring Cloud Gateway", "Eureka", "Config Server", "Systèmes distribués"]),
    "sql": ("SQL &amp; bases de données", ["SQL", "PostgreSQL", "MySQL"], ["Oracle", "SQL Server", "MongoDB", "Redis", "Flyway", "H2"]),
    "tests": ("Tests &amp; qualité", ["JUnit 5", "Mockito", "Testcontainers"], ["Spring Boot Test", "MockMvc", "Vitest", "Postman", "Tests fonctionnels"]),
    "devops": ("Build, CI/CD &amp; DevOps", ["Maven", "Git", "Docker", "CI/CD"],
               ["GitHub Actions", "GitLab CI", "Jenkins", "Docker Compose", "Kubernetes", "AWS EC2, S3 &amp; ECR", "Linux"]),
    "front": ("Front-end", ["Angular", "React", "Vue.js 3"], ["TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]),
    "front_vue": ("Front-end", ["Vue.js 3", "JavaScript", "HTML5", "CSS3", "Angular", "React"],
                  ["TypeScript", "Composition API", "Vite", "Vitest", "Tailwind CSS", "Responsive design"]),
    "methods": ("Méthodes &amp; sécurité", ["Agile / Scrum"], ["Jira", "Confluence", "UML", "JWT", "OAuth2", "Keycloak", "RBAC"]),
}

VARIANTS = {
    "CV_Mouhamadou_Abdoulaye_SOW_Java_FR.html": {
        "title": "CV – Mouhamadou Abdoulaye SOW – Ingénieur logiciel Java",
        "role": "Ingénieur logiciel Java · Spring Boot · Microservices",
        "tags": ["Java 17", "Spring Boot", "API REST", "Microservices", "JPA / Hibernate", "Docker · CI/CD"],
        "mini": "Ingénieur logiciel Java · Spring Boot",
        "groups": ["java", "api", "sql", "tests", "devops"],
        "groups2": ["front", "methods"],
        "projects_title": "Projets Java sélectionnés",
        "profile": """Ingénieur logiciel Java, stagiaire chez <b>Atos</b> et élève-ingénieur en dernière année à l'École Polytechnique de Thiès.
      Je pratique <b>Java, Spring Boot, Docker et la CI/CD depuis deux ans et demi</b>, à l'EPT, en stage et dans mes projets.
      Je conçois des <b>services backend et des API REST</b> sécurisées, des <b>architectures microservices</b> avec Spring Cloud et Kafka,
      des modèles de données <b>SQL avec JPA / Hibernate</b>, je les teste avec <b>JUnit, Mockito et Testcontainers</b> et je les livre avec Maven, Docker et des pipelines CI/CD.
      Habitué au travail en équipe <b>Agile/Scrum</b>.""",
    },
    "CV_Mouhamadou_Abdoulaye_SOW_Java_VueJS_FR.html": {
        "title": "CV – Mouhamadou Abdoulaye SOW – Développeur Java / Vue.js",
        "role": "Développeur Java full-stack · Spring Boot · Front-end JavaScript",
        "tags": ["Java 17", "Spring Boot", "API REST", "Vue.js 3", "JavaScript · HTML5 · CSS3", "Docker · CI/CD"],
        "mini": "Développeur Java full-stack",
        "groups": ["java", "front_vue", "api", "sql", "tests"],
        "groups2": ["devops", "methods"],
        "projects_title": "Projets sélectionnés",
        "profile": """Développeur Java full-stack, stagiaire chez <b>Atos</b> et élève-ingénieur en dernière année à l'École Polytechnique de Thiès.
      Je pratique <b>Java, Spring Boot, Docker et la CI/CD depuis deux ans et demi</b>, à l'EPT, en stage et dans mes projets.
      Côté back-end, je conçois des <b>API REST</b> et des <b>microservices Spring Boot</b> avec JPA et SQL ; côté front-end, je réalise des
      interfaces responsives en <b>Vue.js 3</b>, Angular et React, avec <b>JavaScript, TypeScript, HTML5 et CSS3</b>.
      Livraison avec Git, Maven, Docker et la CI/CD, en équipe <b>Agile/Scrum</b>.""",
    },
}

PAGE1_MAIN = """
    <section>
      <h2>Profil</h2>
      <p class="profile">{profile}</p>
      <div class="highlights">
        <div><b>2,5 ans</b>de pratique Java, Spring Boot, Docker et CI/CD</div>
        <div><b>2</b>stages de développeur full-stack chez Atos</div>
        <div><b>10</b>services Spring Boot dans le projet LMS</div>
      </div>
    </section>

    <section>
      <h2>Expérience</h2>
      <div class="entry">
        <div class="entry-head"><span class="entry-title">Stagiaire développeur full-stack – FONSIS &amp; Atos Digital Push</span><span class="entry-date">Juil. 2026 – Nov. 2026</span></div>
        <div class="entry-org"><b>Atos</b> · Dakar, Sénégal</div>
        <ul>
          <li><b>Maintenance corrective et évolutive</b> de FONSIS, plateforme nationale de gestion des investissements, sur demande du DSI du client.</li>
          <li>Maintenance des <b>pipelines CI/CD</b> GitHub : build, tests et livraison des services.</li>
          <li>Déploiement et exploitation de services conteneurisés avec <b>Docker</b> et Portainer sur <b>AWS</b>.</li>
          <li>Intégration d'<b>Atos Digital Push</b>, plateforme de notifications SMS, e-mail, WhatsApp et vocales utilisée par Orange, la BCEAO et YAS, avec des <b>tests d'intégration Testcontainers</b>.</li>
          <li>Écrans front-end <b>Angular</b> et tableaux de bord Power BI de suivi des indicateurs.</li>
        </ul>
      </div>
      <div class="entry">
        <div class="entry-head"><span class="entry-title">Stagiaire développeur full-stack – FONSIS</span><span class="entry-date">Juil. 2025 – Oct. 2025</span></div>
        <div class="entry-org"><b>Atos</b> · Dakar, Sénégal</div>
        <ul>
          <li>Développement d'<b>API REST</b> sécurisées avec <b>Java et Spring Boot</b> et d'écrans <b>Angular</b> et <b>React</b> pour des applications web d'entreprise.</li>
          <li>Conception de modèles de données <b>PostgreSQL</b> et MongoDB et de leurs requêtes ; conteneurisation des services avec <b>Docker</b>.</li>
          <li>Tests fonctionnels et correction d'anomalies en préproduction, en équipe <b>Agile/Scrum</b> avec Jira et Confluence.</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Formation</h2>
      <div class="entry">
        <div class="entry-head"><span class="entry-title">Diplôme d'ingénieur – Informatique, Bac+5</span><span class="entry-date">Oct. 2022 – 2027</span></div>
        <div class="entry-org"><b>École Polytechnique de Thiès (EPT)</b> · Thiès, Sénégal · niveau Master</div>
        <ul>
          <li><b>Génie logiciel :</b> programmation orientée objet et Java, Spring Boot et JPA, architecture logicielle moderne, bases de données distribuées, DevOps et systèmes cloud-native.</li>
          <li><b>Aussi :</b> algorithmique, réseaux, cryptographie et cybersécurité, ML/DL ; 2 années de classes préparatoires en mathématiques, physique et programmation.</li>
        </ul>
      </div>
      <div class="entry">
        <div class="entry-head"><span class="entry-title">Baccalauréat scientifique – mention Bien</span><span class="entry-date">Juillet 2022</span></div>
        <div class="entry-org"><b>Lycée de Yeumbeul (LEID)</b> · Dakar, Sénégal · Classé 1er de tout le centre d'examen</div>
      </div>
    </section>
"""

PAGE2 = """
<div class="page">
  <div class="mini-header"><span>Mouhamadou Abdoulaye SOW</span><span>{mini}</span></div>

  <aside>
    <section>
      <h3>Compétences, suite</h3>
{groups2}    </section>

    <section>
      <h3>Qualités</h3>
      <div class="quality"><b>Analyse &amp; résolution de problèmes</b><span>Correction d'anomalies en préproduction chez Atos, débogage de microservices distribués.</span></div>
      <div class="quality"><b>Rigueur &amp; sens de la qualité</b><span>1er de tout le centre d'examen au baccalauréat ; code testé et documenté.</span></div>
      <div class="quality"><b>Autonomie &amp; initiative</b><span>Projets personnels conçus, déployés et documentés de bout en bout.</span></div>
      <div class="quality"><b>Esprit d'équipe &amp; communication</b><span>Équipes Scrum chez Atos ; vice-président Galsen AI et président du journal de l'EPT.</span></div>
      <div class="quality"><b>Curiosité</b><span>Veille sur l'écosystème Java, Spring et les pratiques DevOps.</span></div>
    </section>

    <section>
      <h3>Langues</h3>
      <div class="lang"><div>Français<small>Maîtrise complète · C2</small></div><div class="dots"><i></i><i></i><i></i><i></i><i></i></div></div>
      <div class="lang"><div>Anglais<small>Niveau professionnel · C1</small></div><div class="dots"><i></i><i></i><i></i><i></i><i class="off"></i></div></div>
      <div class="lang"><div>Pulaar<small>Langue maternelle</small></div><div class="dots"><i></i><i></i><i></i><i></i><i></i></div></div>
      <div class="lang"><div>Wolof<small>Courant</small></div><div class="dots"><i></i><i></i><i></i><i></i><i class="off"></i></div></div>
    </section>

    <section>
      <h3>Centres d'intérêt</h3>
      <div class="chips">
        <span>Architecture logicielle</span><span>Clean code</span><span>Tests automatisés</span><span>Sécurité applicative</span><span>Performance</span>
      </div>
    </section>
  </aside>

  <main>
    <section>
      <h2>{projects_title}</h2>

      <div class="project">
        <div class="entry-title">LMS Universities – Plateforme e-learning de l'EPT en microservices, déployée en ligne</div>
        <div class="stack">Java 17 · Spring Boot · Spring Cloud Gateway · Eureka · Config Server · OpenFeign · Kafka · JPA / Hibernate · PostgreSQL · Redis · React · Docker · Jenkins · AWS</div>
        <ul>
          <li><b>10 services Spring Boot</b> derrière une passerelle Spring Cloud, avec découverte Eureka, configuration centralisée, appels OpenFeign et événements <b>Kafka</b>.</li>
          <li>Une base <b>PostgreSQL</b> par service avec Spring Data JPA ; sécurité <b>Spring Security et JWT</b> avec trois rôles ; documentation OpenAPI.</li>
          <li>Extension e-commerce en équipe : panier et commandes, <b>tests JUnit 5 et Mockito</b> du service et du contrôleur de commandes.</li>
          <li>Build <b>Maven</b>, images <b>Docker</b> ; GitHub Actions déploie les services modifiés sur AWS EC2 et Jenkins pousse les images vers Amazon ECR.</li>
        </ul>
      </div>

      <div class="project">
        <div class="entry-title">MS Platform – Service d'authentification sécurisé</div>
        <div class="stack">Java · Spring Boot · Spring Security · JWT · Spring Data JPA · PostgreSQL · Flyway · Redis · Kafka · JUnit 5 · Mockito · Testcontainers</div>
        Jetons JWT d'accès et de rafraîchissement, révocation par liste noire Redis, contrôle d'accès par rôles, réinitialisation du mot de passe par e-mail
        et migrations <b>Flyway</b>. <b>36 tests</b> : unitaires avec <b>JUnit 5 et Mockito</b>, couche web avec MockMvc et la vraie configuration de sécurité,
        intégration avec <b>Testcontainers</b> sur PostgreSQL, Redis et Kafka.
      </div>

      <div class="project">
        <div class="entry-title">Microcommerce – Catalogue produits full-stack</div>
        <div class="stack">Vue.js 3 · Vite · JavaScript · HTML5 · CSS3 · Vitest · Spring Boot · Spring Data JPA · H2 · springdoc-openapi · JUnit 5 · Mockito</div>
        Front-end <b>Vue.js 3</b> en Composition API, responsive, avec recherche, filtre par prix et formulaire validé, branché sur une <b>API REST Spring Boot</b> :
        CRUD, validation, erreurs JSON par champ, CORS et documentation Swagger. Tests <b>Vitest</b> côté front, <b>MockMvc et Mockito</b> côté API.
      </div>

      <div class="project">
        <div class="entry-title">Modules Spring Boot &amp; JPA de l'EPT</div>
        <div class="stack">Java · JPA / Hibernate · Spring Boot · MySQL · Maven</div>
        Mapping de relations un-à-un, un-à-plusieurs et plusieurs-à-plusieurs, héritage d'entités, listeners de cycle de vie, couche service et profils Spring.
      </div>

      <div class="project">
        <div class="entry-title">Pipeline DevSecOps Spring Boot <span class="badge">En cours</span></div>
        <div class="stack">Maven · JUnit · GitHub Actions · Docker · Trivy · Kubernetes</div>
        Pipeline CI/CD qui teste, analyse le code et les dépendances, construit l'image et déploie une API Spring Boot sur Kubernetes.
      </div>

      <div class="project">
        <div class="entry-title">Autres projets</div>
        <div class="stack">Kubernetes · Terraform · Python · Django REST · React · Next.js · Flutter</div>
        Déploiement d'un LLM sur Kubernetes, infrastructure AWS avec Terraform, système de recommandation hybride, marketplace SenPanier Bio et application mobile ShopVocal.
      </div>
    </section>

    <section>
      <h2>Engagement associatif</h2>
      <div class="entry">
        <div class="entry-head"><span class="entry-title">Vice-président – Communauté Galsen AI, section EPT</span><span class="entry-date">2023 – 2024</span></div>
        <ul><li>Ateliers pratiques d'IA au symposium technologique de l'école et accompagnement d'étudiants vers des certifications.</li></ul>
      </div>
      <div class="entry">
        <div class="entry-head"><span class="entry-title">Président – Sous-commission Journal</span><span class="entry-date">2023 – 2024</span></div>
        <ul><li>Direction d'une équipe éditoriale et publication de deux journaux : Polybrève, trimestriel, et Polynews, annuel.</li></ul>
      </div>
    </section>
  </main>
</div>
"""

def render_groups(keys):
    return "".join(
        f'      <div class="skill-group"><b>{GROUPS[g][0]}</b>\n        <div class="chips">{chips(GROUPS[g][1], GROUPS[g][2])}</div></div>\n'
        for g in keys
    )


for filename, v in VARIANTS.items():
    groups = render_groups(v["groups"])
    tags = "".join(f"<span>{t}</span>" for t in v["tags"])
    html = (
        head.replace("<title>CV – Mouhamadou Abdoulaye SOW</title>", f"<title>{v['title']}</title>")
        + f"""
<div class="page">
  <header>
    <h1>Mouhamadou Abdoulaye SOW</h1>
    <div class="role">{v['role']}</div>
    <div class="tags">{tags}</div>
  </header>

  <aside>
{contact}    <section>
      <h3>Compétences techniques</h3>
{groups}    </section>
  </aside>

  <main>{PAGE1_MAIN.format(profile=v['profile'])}  </main>
</div>
{PAGE2.format(mini=v['mini'], groups2=render_groups(v['groups2']), projects_title=v['projects_title'])}
</body>
</html>
"""
    )
    (HERE / filename).write_text(html, encoding="utf-8")
    print("wrote", filename)
