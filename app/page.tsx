import Image from "next/image";
import ThemeToggle from "./theme-toggle";
import {
  Container,
  Section,
  SectionHead,
  FieldLabel,
  Button,
  CardStack,
  Card,
  CardHead,
  Badges,
  Highlights,
  Figures,
  TextLink,
} from "./ui";

const EMAIL = "rajukr90797@gmail.com";
const PHONE = "+91 89695 48127";
const PHONE_HREF = "+918969548127";
const LINKEDIN = "https://www.linkedin.com/in/raju-kumar-914444241";
const RESUME = "/raju-kumar-resume.pdf";

const ask = (project: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(`About your project: ${project}`)}`;

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "6", label: "Independent environmental analytics projects" },
  { value: "9.12", label: "SGPA, 6th semester" },
  { value: "2", label: "Field & industry roles" },
  { value: "GHG · LCA · GIS", label: "Core methods" },
];

// Hairlines between stat cells: 1 column on mobile, 2 on sm, 4 on lg.
const statBorders = [
  "",
  "border-t sm:border-t-0 sm:border-l",
  "border-t lg:border-t-0 lg:border-l",
  "border-t sm:border-l lg:border-t-0",
];

const experience = [
  {
    title: "Environmental Intern — TOWASO",
    tag: "May – Jul 2025 · Jamshedpur, Jharkhand",
    points: [
      "Worked on Extended Producer Responsibility (EPR) compliance for a waste management solutions company",
      "Analysed waste generation and disposal data — how much material a producer puts into the market and what is demonstrably recovered from it",
      "Supported the reporting side of producer obligations under EPR",
    ],
  },
  {
    title: "District Coordinator, Dhanbad — Indian Biodiversity Conservation Society",
    tag: "Mar 2024 – present · Dhanbad, Jharkhand",
    points: [
      "Coordinate IBCS activity across Dhanbad district",
      "Lead conservation outreach and on-ground biodiversity work in a district defined by coal",
    ],
  },
];

type Project = {
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  figures?: { value: string; label: string }[];
  points: string[];
  note?: string;
};

const projects: Project[] = [
  {
    title: "Urban Heat Island Analysis",
    tag: "remote sensing · 2026",
    desc: "A comparative geospatial study of Patna, Jaipur and Guwahati built from Landsat imagery, identifying where cities are dangerously hot and why.",
    stack: ["qgis", "landsat", "lst", "ndvi", "remote sensing"],
    figures: [
      { value: "3", label: "cities compared" },
      { value: "55.90 °C", label: "peak mean LST, Jaipur" },
      { value: "LST + NDVI", label: "indices read together" },
      { value: "Landsat", label: "satellite source" },
    ],
    points: [
      "Derived land surface temperature per pixel and read it against NDVI, so heat is explained by what is on the ground",
      "Found Jaipur had the most severe heat island conditions (mean LST 55.90 °C); Guwahati, the greenest, showed markedly lower thermal stress",
      "Produced heat-vulnerability zones showing where green infrastructure would do the most work — a form planning departments can act on",
    ],
  },
  {
    title: "Corporate Carbon Footprint Calculator",
    tag: "python · ghg protocol",
    desc: "A Python tool that estimates an organisation's greenhouse gas emissions across Scope 1, 2 and 3 in line with GHG Protocol principles.",
    stack: ["python", "pandas", "matplotlib", "excel"],
    points: [
      "Takes activity data as a spreadsheet and applies emission factors automatically",
      "Covers direct fuel use (Scope 1), purchased energy via grid factors (Scope 2) and value-chain emissions (Scope 3)",
      "Returns a footprint with the scope and category breakdown intact — the breakdown is what tells you where to cut",
    ],
  },
  {
    title: "Comparative LCA: Plastic vs. Paper Bags",
    tag: "openlca · cradle-to-grave",
    desc: "A full life cycle assessment comparing plastic and paper carrier bags across carbon, energy, water and resource depletion.",
    stack: ["openlca", "excel", "gwp100"],
    figures: [
      { value: "2", label: "product systems" },
      { value: "4", label: "impact categories" },
      { value: "GWP100", label: "headline indicator" },
      { value: "Cradle → grave", label: "system boundary" },
    ],
    points: [
      "Modelled both product systems end to end in OpenLCA",
      "Paper scored lower on GWP100, but lost ground on water and land use",
      "Concluded that sustainable packaging depends on the supply chain, reuse rate and disposal route — not the material alone",
    ],
  },
  {
    title: "Jharia Coalfield — Mining Impact Assessment",
    tag: "ndvi time series · 2014 – 2024",
    desc: "A decade-long remote sensing study of one of India's most intensively mined and fire-affected landscapes.",
    stack: ["qgis", "remote sensing", "ndvi"],
    figures: [
      { value: "+0.196", label: "net NDVI change" },
      { value: "10 yrs", label: "observation window" },
      { value: "Jharia", label: "coalfield, Jharkhand" },
    ],
    points: [
      "Compared NDVI between 2014 and 2024 across the coalfield",
      "Found a net positive change of +0.196 — evidence of vegetation regeneration, most plausibly from reclamation and closure of surface workings",
    ],
    note: "NDVI measures green cover, not ecological quality or underground fires — a starting point for ground verification",
  },
  {
    title: "ESG Intelligence Dashboard",
    tag: "power bi · in progress",
    desc: "A single reporting view of sustainability indicators, aligned to GRI and BRSR disclosure requirements.",
    stack: ["power bi", "python", "excel", "gri", "brsr"],
    points: [
      "Tracks five indicator families: carbon emissions, energy, water, waste and workforce metrics",
      "Separates water withdrawal, discharge and consumption, and splits waste by disposal route",
      "Aims to close the gap between operations spreadsheets and the disclosures a reporting team has to file",
    ],
    note: "Currently in build",
  },
  {
    title: "Water Quality of Odisha — GIS Analysis",
    tag: "catchment analysis · in progress",
    desc: "A GIS study of ten years of water quality records across Odisha, analysed by catchment rather than by sampling point.",
    stack: ["qgis", "thematic mapping", "catchment analysis"],
    points: [
      "Mapped a decade of water quality data thematically across the state",
      "Aggregated to catchment level so degrading trends can be traced to what is happening upstream, not read as noise at one station",
    ],
  },
];

const skills = [
  { k: "Environmental science", v: ["esg reporting", "ghg accounting", "carbon footprinting", "eia", "lca", "air, water & soil quality", "wastewater treatment"] },
  { k: "Geospatial", v: ["qgis", "remote sensing", "spatial analysis", "lst & ndvi", "thematic mapping", "catchment analysis"] },
  { k: "Data & analytics", v: ["python", "pandas", "matplotlib", "plotly", "advanced excel", "power bi", "statistical analysis"] },
  { k: "Assessment software", v: ["openlca", "workiva"] },
  { k: "Frameworks", v: ["ghg protocol", "gri", "brsr", "net zero fundamentals"] },
  { k: "Professional", v: ["technical report writing", "research", "presentation", "project management"] },
];

const education = [
  {
    course: "B.Sc (Hons.) Environmental Science",
    inst: "Tribhuvan College of Environment & Development Sciences · Nalanda University",
    year: "Pursuing · 7th semester · 9.12 SGPA (6th sem)",
  },
  { course: "Senior Secondary (10+2)", inst: "R.S. More College · JAC", year: "2022 – 23" },
  { course: "Secondary (10th)", inst: "DAV Public School · CBSE", year: "2020 – 21" },
];

const certifications = [
  "Waste Management — NPTEL (Oct – Dec 2025)",
  "Certified Environmental Professional — Environmental Research & Education (Oct 2024)",
  "MS Excel — IBM via Coursera (Feb – Mar 2024)",
  "Building Resilience — LinkedIn Learning (Jul 2024)",
  "Developing Your Emotional Intelligence — LinkedIn Learning (Jul 2024)",
  "Teamwork Foundations — LinkedIn Learning (Jul 2024)",
];

const references = [
  { n: "Dr. Seema Mishra", r: "Former Director, Mumbai University", e: "seema.mishra@tribhuvancollege.ac.in" },
  { n: "Dr. Subodh Chaturvedi", r: "Associate Professor", e: "subodhchaturvedi@teds.ac.in" },
];

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

const LinkedInIcon = ({ className = "w-[17px] h-[17px]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

const BrandMark = () => <span className="w-2.5 h-2.5 bg-accent" aria-hidden="true" />;

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-paper border-b border-line">
        <Container className="flex items-center justify-between gap-6 py-3.5">
          <a href="#" className="flex items-center gap-2.5 font-bold text-[1.15rem] text-ink">
            <BrandMark />
            Raju Kumar
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-[0.92rem] font-medium text-muted hover:text-ink transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button href="#contact" size="sm">
              Contact
            </Button>
          </div>
        </Container>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section className="relative pt-28 sm:pt-36 pb-16 border-b border-line">
          <Container>
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
              <div className="intro max-lg:text-center">
                <span className="block font-mono text-[0.9rem] text-accent mb-4">
                  Environmental Science · Geospatial &amp; ESG Analytics
                </span>
                <h1 className="text-ink font-bold tracking-tight leading-[1.08] text-[2.2rem] sm:text-[3.1rem]">
                  Environmental Data Analyst
                </h1>
                <p className="mt-5 max-w-[520px] max-lg:mx-auto text-[1.08rem]">
                  Final-year Environmental Science student at Tribhuvan College
                  (Nalanda University centre). I turn environmental questions into
                  numbers people can act on — carbon accounting, life cycle
                  assessment and geospatial analysis with QGIS, OpenLCA, Python and
                  Power BI, reported against the GHG Protocol, GRI and BRSR.
                </p>
                <div className="mt-8 flex flex-wrap gap-3.5 max-lg:justify-center">
                  <Button href={RESUME}>
                    <DownloadIcon />
                    View Resume
                  </Button>
                  <Button href={LINKEDIN} variant="ghost" external>
                    <LinkedInIcon />
                    LinkedIn Profile
                  </Button>
                </div>
              </div>

              <figure className="intro-delay max-lg:order-first max-w-[420px] lg:max-w-none w-full mx-auto">
                <div className="border border-line-strong rounded overflow-hidden aspect-[16/15]">
                  <Image
                    src="/raju.jpg"
                    alt="Portrait of Raju Kumar"
                    width={900}
                    height={1350}
                    priority
                    className="w-full h-full object-cover object-[center_25%]"
                  />
                </div>
                <figcaption className="mt-3 pt-2.5 border-t border-line flex justify-between gap-3 font-mono text-[0.9rem] text-accent">
                  <span>Raju Kumar</span>
                  <span className="text-muted">Dhanbad, India</span>
                </figcaption>
              </figure>
            </div>

            {/* Spec strip */}
            <dl className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-accent rounded overflow-hidden bg-card">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-6 py-5 border-accent ${statBorders[i]}`}
                >
                  <dt className="font-mono font-semibold text-[1.15rem] text-ink tabular">{s.value}</dt>
                  <dd className="mt-1 text-[0.8rem] text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <Section id="experience">
          <SectionHead title="Experience" />
          <CardStack>
            {experience.map((e) => (
              <Card key={e.title}>
                <CardHead title={e.title} tag={e.tag} />
                <Highlights items={e.points} />
              </Card>
            ))}
          </CardStack>
        </Section>

        {/* ================= PROJECTS ================= */}
        <Section id="projects" alt>
          <SectionHead
            title="Featured Projects"
            lead="Independent studies and tools that turn environmental data into decisions — from satellite imagery to corporate emissions."
          />
          <CardStack>
            {projects.map((p) => (
              <Card key={p.title}>
                <CardHead title={p.title} tag={p.tag} />
                <p className="text-[0.95rem] text-muted max-w-[680px] mb-5">{p.desc}</p>
                <div className="space-y-5">
                  <Badges items={p.stack} />
                  {p.figures ? <Figures items={p.figures} /> : null}
                  <Highlights items={p.points} note={p.note} />
                  <TextLink href={ask(p.title)}>Ask about this project</TextLink>
                </div>
              </Card>
            ))}
          </CardStack>
        </Section>

        {/* ================= SKILLS ================= */}
        <Section id="skills">
          <SectionHead title="Skills" />
          <div className="border border-line rounded overflow-hidden bg-card divide-y divide-line">
            {skills.map((row) => (
              <div key={row.k} className="grid md:grid-cols-[220px_1fr]">
                <div className="px-5 py-4 md:py-5 font-mono text-[0.82rem] text-ink bg-panel border-b md:border-b-0 md:border-r border-line">
                  {row.k}
                </div>
                <div className="px-5 py-4 flex items-center">
                  <Badges items={row.v} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ================= EDUCATION ================= */}
        <Section id="education" alt>
          <SectionHead title="Education & Certifications" />
          <div className="grid md:grid-cols-2 border border-accent rounded overflow-hidden divide-y md:divide-y-0 md:divide-x divide-accent">
            <div className="bg-card p-6 sm:p-10">
              <FieldLabel>Education</FieldLabel>
              <ul className="space-y-6">
                {education.map((e) => (
                  <li key={e.course}>
                    <h3 className="text-ink font-bold text-[1.08rem]">{e.course}</h3>
                    <p className="text-[0.94rem] text-muted mt-1">{e.inst}</p>
                    <p className="font-mono text-[0.76rem] text-accent mt-1">{e.year}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-6 sm:p-10">
              <FieldLabel>Certifications</FieldLabel>
              <Highlights items={certifications} />
            </div>
          </div>
        </Section>

        {/* ================= RECOGNITION ================= */}
        <Section id="recognition">
          <SectionHead title="Recognition & Leadership" />
          <div className="grid md:grid-cols-2 border border-accent rounded overflow-hidden divide-y md:divide-y-0 md:divide-x divide-accent">
            <div className="bg-card p-6 sm:p-10">
              <FieldLabel>Speaking &amp; awards</FieldLabel>
              <h3 className="text-ink font-bold text-[1.08rem] mb-2">
                International conference paper — Nov 2024
              </h3>
              <p className="text-[0.94rem] text-muted mb-6">
                Presented &ldquo;Causes, Consequences and Remedial Measures of
                Tsunami: A Case Study of the 26 December 2004 Indian Ocean
                Tsunami&rdquo; at the international conference on Research,
                Innovation and IPR for Sustainable Development and Viksit Bharat.
              </p>
              <Highlights
                items={[
                  "Winner, Waste to Wealth competition",
                  <>Winner, case study competition on &ldquo;The Floating Gardens of Bangladesh&rdquo;</>,
                  "Winner, college debate competition",
                ]}
              />
            </div>
            <div className="bg-card p-6 sm:p-10">
              <FieldLabel>Beyond the lab</FieldLabel>
              <Highlights
                items={[
                  "Captained the Dhanbad cricket team to a championship win",
                  "Perform in drama productions and stand-up comedy — useful in a field that is mostly persuading a room that a number matters",
                  "Helped plan and run college festivals, working with teams to deliver events",
                ]}
              />
              <div className="mt-8 pt-6 border-t border-line">
                <FieldLabel>References</FieldLabel>
                <ul className="space-y-4">
                  {references.map((r) => (
                    <li key={r.n}>
                      <p className="text-ink font-semibold">{r.n}</p>
                      <p className="text-[0.88rem] text-muted">{r.r}</p>
                      <a href={`mailto:${r.e}`} className="font-mono text-[0.78rem] text-accent hover:underline underline-offset-4 break-all">
                        {r.e}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ================= CONTACT CTA ================= */}
        <section id="contact" className="relative py-16 sm:py-20 lg:py-28">
          <Container>
            <div className="text-center border border-accent rounded bg-panel px-6 py-12 sm:p-16">
              <FieldLabel>Open to opportunities</FieldLabel>
              <h2 className="text-ink font-bold tracking-tight leading-tight text-[1.6rem] sm:text-[2.1rem] max-w-[680px] mx-auto">
                Open to ESG, sustainability and geospatial analytics roles.
              </h2>
              <p className="mt-4 text-muted max-w-[560px] mx-auto">
                Environmental consulting, sustainability reporting, and climate
                analytics — work where the job is to measure something properly
                and explain it to the people who decide.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3.5">
                <Button href={RESUME}>
                  <DownloadIcon />
                  View Resume
                </Button>
                <Button href={`mailto:${EMAIL}`} variant="ghost">
                  Get in Touch
                </Button>
              </div>
              <p className="mt-8 font-mono text-[0.8rem] text-muted flex flex-wrap justify-center gap-x-6 gap-y-2">
                <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors">{EMAIL}</a>
                <a href={`tel:${PHONE_HREF}`} className="hover:text-accent transition-colors">{PHONE}</a>
                <span>Dhanbad, Jharkhand, India</span>
              </p>
            </div>
          </Container>
        </section>
      </main>

      <footer className="relative border-t border-line py-6">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <a href="#" className="flex items-center gap-2.5 font-bold text-ink">
              <BrandMark />
              Raju Kumar
            </a>
            <div className="flex gap-2.5">
              {[
                { href: LINKEDIN, label: "LinkedIn", icon: <LinkedInIcon className="w-[15px] h-[15px]" />, external: true },
                { href: `mailto:${EMAIL}`, label: "Email", icon: <MailIcon /> },
                { href: `tel:${PHONE_HREF}`, label: "Phone", icon: <PhoneIcon /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded border border-line-strong text-muted hover:text-accent hover:border-accent transition-colors"
                  {...(s.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-line flex flex-wrap justify-between gap-2.5 font-mono text-[0.76rem] text-muted">
            <span>© {new Date().getFullYear()} Raju Kumar</span>
            <span>Environmental Science · Geospatial &amp; ESG Analytics</span>
          </div>
        </Container>
      </footer>
    </>
  );
}
