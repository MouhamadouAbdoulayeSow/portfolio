import {
  about,
  careerGoal,
  certifications,
  roadmapProjects,
  education,
  experiences,
  interests,
  languages,
  leadership,
  profile,
  projects,
  skills,
} from "@/data/profile";
import { Icon, Section, Tag } from "@/components/ui";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const categoryOrder = ["Software", "Data", "Cloud & DevOps", "Security", "AI"];
const sortedProjects = [...projects].sort(
  (a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category),
);

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="shrink-0 whitespace-nowrap font-mono text-sm font-semibold text-ink">
            {profile.shortName}
          </a>
          <ul className="flex gap-4 overflow-x-auto text-sm text-muted sm:gap-6">
            {nav.map((n) => (
              <li key={n.href} className="shrink-0">
                <a href={n.href} className="transition-colors hover:text-accent">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
            <p className="font-mono text-sm text-[#7fd6d8]">Hello, I&apos;m</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
            <p className="mt-4 text-lg text-[#bfe3e3] sm:text-xl">{profile.role}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{profile.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.focus.map((f) => (
                <span key={f} className="rounded-full border border-white/25 px-3 py-1 text-xs text-white/90">
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={profile.cv}
                className="inline-flex items-center gap-2 rounded-lg bg-[#0e8388] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0b6d71]"
              >
                <Icon name="download" /> Download CV
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10"
              >
                <Icon name="github" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10"
              >
                <Icon name="linkedin" /> LinkedIn
              </a>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-white/60">
              <Icon name="pin" /> {profile.location}
            </p>
          </div>
        </section>

        {/* About */}
        <Section id="about" kicker="01 · About" title="Software, data, cloud and security, end to end">
          <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
            <div className="space-y-4 leading-relaxed text-muted">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <div className="grid gap-3">
              {about.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-line bg-surface p-5">
                  <p className="text-3xl font-bold text-accent">{s.value}</p>
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Experience */}
        <div className="bg-surface-2/50">
          <Section id="experience" kicker="02 · Experience" title="Where I have worked">
            <ol className="relative space-y-10 border-l-2 border-line pl-6 sm:pl-8">
              {experiences.map((e) => (
                <li key={e.title + e.period} className="relative">
                  <span className="absolute top-1.5 -left-[33px] h-4 w-4 rounded-full border-4 border-bg bg-accent sm:-left-[41px]" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-semibold">
                      {e.title}
                      {e.upcoming && (
                        <span className="ml-2 rounded bg-accent-soft px-2 py-0.5 align-middle text-xs font-medium text-accent">
                          Upcoming
                        </span>
                      )}
                    </h3>
                    <span className="shrink-0 font-mono text-xs text-accent">{e.period}</span>
                  </div>
                  <p className="text-sm text-muted">
                    {e.company} · {e.location}
                  </p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  {e.stack.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {e.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </Section>
        </div>

        {/* Projects */}
        <Section id="projects" kicker="03 · Projects" title="Things I have built">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((p) => (
              <article
                key={p.title}
                className={`flex flex-col rounded-xl border bg-surface p-5 transition hover:-translate-y-0.5 hover:shadow-lg ${
                  p.featured ? "border-accent/50" : "border-line"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent">{p.category}</span>
                  {p.featured && <span className="text-[11px] font-medium text-muted">★ Featured</span>}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
                <a
                  href={p.link ?? profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  <Icon name="github" /> View code
                </a>
              </article>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <div className="bg-surface-2/50">
          <Section id="skills" kicker="04 · Skills" title="Technical toolbox">
            <div className="grid gap-6 sm:grid-cols-2">
              {skills.map((g) => (
                <div key={g.group} className="rounded-xl border border-line bg-surface p-5">
                  <h3 className="text-sm font-semibold">{g.group}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <Tag key={i} strong={g.core?.includes(i)}>
                        {i}
                      </Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Roadmap */}
        <Section id="roadmap" kicker="05 · Roadmap" title="Where I am heading">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Today", value: careerGoal.now },
              { label: "Next", value: careerGoal.next },
              { label: "Target", value: careerGoal.target },
            ].map((step, i) => (
              <div
                key={step.label}
                className={`rounded-xl border p-5 ${i === 2 ? "border-accent bg-accent-soft" : "border-line bg-surface"}`}
              >
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {i + 1}. {step.label}
                </p>
                <p className="mt-2 font-semibold">{step.value}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-lg font-semibold">Projects I am building next</h3>
          <div className="mt-4 grid gap-5 lg:grid-cols-3">
            {roadmapProjects.map((r) => (
              <article key={r.title} className="flex flex-col rounded-xl border border-dashed border-line bg-surface p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent">{r.domains}</span>
                  <span className="shrink-0 rounded bg-surface-2 px-2 py-0.5 text-[11px] font-medium text-muted">
                    {r.status}
                  </span>
                </div>
                <h4 className="mt-2 font-semibold">{r.title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{r.goal}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {r.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <h3 className="mt-12 text-lg font-semibold">Certification path</h3>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
                <span className="mt-0.5 shrink-0 rounded bg-accent-soft px-2 py-0.5 font-mono text-[11px] text-accent">
                  {c.stage}
                </span>
                <span className="text-sm">{c.name}</span>
              </li>
            ))}
          </ol>
        </Section>

        {/* Education & leadership */}
        <div className="bg-surface-2/50">
        <Section id="education" kicker="06 · Education" title="Education & leadership">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              {education.map((ed) => (
                <div key={ed.degree} className="rounded-xl border border-line bg-surface p-5">
                  <p className="font-mono text-xs text-accent">{ed.period}</p>
                  <h3 className="mt-1 font-semibold">{ed.degree}</h3>
                  <p className="text-sm text-muted">
                    {ed.school} · {ed.location}
                  </p>
                  {ed.details.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                      {ed.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {leadership.map((l) => (
                <div key={l.title} className="rounded-xl border border-line bg-surface p-5">
                  <p className="font-mono text-xs text-accent">{l.period}</p>
                  <h3 className="mt-1 font-semibold">{l.title}</h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                    {l.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-surface p-5">
                  <h3 className="text-sm font-semibold">Languages</h3>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {languages.map((l) => (
                      <li key={l.name} className="flex justify-between gap-2">
                        <span>{l.name}</span>
                        <span className="text-muted">{l.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-line bg-surface p-5">
                  <h3 className="text-sm font-semibold">Interests</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {interests.map((i) => (
                      <Tag key={i}>{i}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        </div>

        {/* Contact */}
        <section id="contact" className="bg-navy text-white">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7fd6d8]">07 · Contact</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Let&apos;s build something together</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
              I am open to internships and junior roles in software engineering, data engineering, cloud/DevOps
              and cloud security.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-[#0e8388] px-5 py-2.5 text-sm font-semibold transition hover:bg-[#0b6d71]"
              >
                <Icon name="mail" /> {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10"
              >
                <Icon name="linkedin" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10"
              >
                <Icon name="github" /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js, deployed on Vercel
      </footer>
    </>
  );
}
