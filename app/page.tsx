import Image from "next/image";
import ThemeToggle from "./theme-toggle";
import {
  SectionHeading,
  Project,
  Metrics,
  Steps,
  Prose,
  ImageSlot,
} from "./ui";

const EMAIL = "rajukr90797@gmail.com";
const PHONE = "+91 89695 48127";
const PHONE_HREF = "+918969548127";
const LINKEDIN = "https://www.linkedin.com/in/raju-kumar-914444241";

const linkClass =
  "underline underline-offset-4 decoration-ink/25 dark:decoration-white/25 hover:decoration-ink dark:hover:decoration-white transition-colors";

const monoLink =
  "font-mono text-xs text-ink/50 hover:text-ink dark:text-white/50 dark:hover:text-white transition-colors";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-20">
        <a href="#" className="font-display text-sm font-semibold">
          Raju
        </a>
        <nav className="flex items-center gap-5 font-mono text-xs">
          <a href="#work" className={monoLink}>
            work
          </a>
          <a href="#experience" className={monoLink}>
            experience
          </a>
          <a href="/raju-kumar-resume.pdf" className={monoLink}>
            resume
          </a>
          <a href={`mailto:${EMAIL}`} className={monoLink}>
            contact
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <main>
        {/* ---------------------------------------------------------------- */}
        <section className="grid sm:grid-cols-[1fr_auto] gap-10 items-start mb-28">
          <div className="space-y-5">
            <div className="space-y-1">
              <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.05]">
                Raju Kumar
              </h1>
              <p className="font-mono text-xs text-moss dark:text-moss-light">
                Environmental Science · Geospatial &amp; ESG Analytics
              </p>
            </div>

            <Prose>
              I am a final-year Environmental Science student at Tribhuvan
              College of Environment &amp; Development Sciences, a Nalanda
              University centre in Neemrana, Rajasthan. I work on the
              measurement side of sustainability — carbon accounting, life
              cycle assessment, and geospatial analysis of environmental
              change.
            </Prose>

            <Prose>
              Most of what I build is an attempt to turn an environmental
              question into a number someone can act on: which wards of a city
              are dangerously hot, whether a coalfield is actually regrowing,
              what a company&rsquo;s Scope 3 emissions really come to. The tools
              are QGIS, OpenLCA, Python and Power BI; the standards are the GHG
              Protocol, GRI and BRSR.
            </Prose>

            <div className="flex flex-wrap gap-5 pt-1">
              <a href={LINKEDIN} className={monoLink} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={`mailto:${EMAIL}`} className={monoLink}>
                Email
              </a>
              <a href={`tel:${PHONE_HREF}`} className={monoLink}>
                Phone
              </a>
            </div>
          </div>

          <Image
            src="/raju.jpg"
            alt="Raju Kumar"
            width={900}
            height={1350}
            priority
            className="w-full sm:w-52 h-auto rounded-sm border border-ink/10 dark:border-white/10"
          />
        </section>

        {/* ---------------------------------------------------------------- */}
        <section id="work" className="mb-28">
          <SectionHeading>selected work</SectionHeading>

          <div className="space-y-24">
            {/* -------------------------------------------------- */}
            <Project
              title="Corporate Carbon Footprint Calculator"
              stack={["Python", "Pandas", "Matplotlib", "Excel"]}
              meta="GHG Protocol"
            >
              <Steps
                caption="three emission scopes, calculated separately"
                items={[
                  {
                    title: "Scope 1 — direct emissions",
                    body: "Fuel burned in owned or controlled sources: company vehicles, on-site boilers, process emissions.",
                  },
                  {
                    title: "Scope 2 — purchased energy",
                    body: "Emissions embodied in bought electricity, steam, heating and cooling, converted through grid emission factors.",
                  },
                  {
                    title: "Scope 3 — value chain",
                    body: "Everything upstream and downstream — the category that is largest for most organisations and the one most often left out.",
                  },
                ]}
              />
              <Prose>
                A Python tool that estimates an organisation&rsquo;s greenhouse
                gas emissions across all three scopes in line with GHG Protocol
                principles. Activity data goes in as a spreadsheet; the
                calculator applies the emission factors, aggregates by scope and
                category, and returns a footprint with the breakdown intact
                rather than a single headline figure — because the breakdown is
                what tells you where to cut.
              </Prose>
              <a href={LINKEDIN} className={monoLink} target="_blank" rel="noreferrer">
                write-up ↗
              </a>
            </Project>

            {/* -------------------------------------------------- */}
            <Project
              title="Comparative LCA: Plastic vs. Paper Bags"
              stack={["OpenLCA", "Excel", "Cradle-to-grave"]}
              meta="GWP100"
            >
              <Metrics
                items={[
                  { value: "2", label: "product systems" },
                  { value: "4", label: "impact categories" },
                  { value: "GWP100", label: "headline indicator" },
                  { value: "Cradle → grave", label: "system boundary" },
                ]}
              />
              <Prose>
                A full cradle-to-grave life cycle assessment comparing plastic
                and paper carrier bags across carbon emissions, energy use,
                water consumption and resource depletion. On GWP100 the paper
                bag came out lower than plastic — but that is exactly the result
                that should not be quoted alone.
              </Prose>
              <Prose>
                Paper wins on global warming potential and loses ground on water
                and land. The honest conclusion from the study is that
                &ldquo;sustainable packaging&rdquo; is not a property of a
                material but of a specific supply chain, reuse rate and disposal
                route, and that a single-indicator comparison will mislead
                whoever reads it.
              </Prose>
              <a href={LINKEDIN} className={monoLink} target="_blank" rel="noreferrer">
                write-up ↗
              </a>
            </Project>

            {/* -------------------------------------------------- */}
            <Project
              title="Urban Heat Island Analysis"
              stack={["QGIS", "Landsat", "Remote Sensing", "LST / NDVI"]}
              meta="2026"
            >
              <Metrics
                items={[
                  { value: "3", label: "cities compared" },
                  { value: "55.90 °C", label: "peak mean LST, Jaipur" },
                  { value: "2", label: "indices — LST and NDVI" },
                  { value: "Landsat", label: "satellite source" },
                ]}
              />
              <Prose>
                A comparative geospatial study of Patna, Jaipur and Guwahati,
                built from Landsat imagery. Land surface temperature is derived
                per pixel and read against NDVI, so heat is explained by what is
                on the ground rather than reported on its own. Jaipur showed the
                most severe heat island conditions of the three, with a mean LST
                of 55.90 °C; Guwahati, the greenest of the three, showed
                markedly lower thermal stress.
              </Prose>
              <Prose>
                The output is a set of heat-vulnerability zones — the specific
                areas where green infrastructure would do the most work — which
                is the form a city planning department can actually use.
              </Prose>
              <a href={LINKEDIN} className={monoLink} target="_blank" rel="noreferrer">
                write-up ↗
              </a>
            </Project>

            {/* -------------------------------------------------- */}
            <Project
              title="ESG Intelligence Dashboard"
              stack={["Power BI", "Python", "Excel"]}
              meta="ongoing"
            >
              <Steps
                caption="five indicator families tracked in one view"
                items={[
                  { title: "Carbon emissions", body: "Scope 1, 2 and 3 totals and intensity, trended over reporting periods." },
                  { title: "Energy consumption", body: "Total draw, renewable share, and energy per unit of output." },
                  { title: "Water usage", body: "Withdrawal, discharge and consumption, separated rather than netted." },
                  { title: "Waste generation", body: "Volumes by stream and by disposal route — landfill, recycling, recovery." },
                  { title: "Workforce metrics", body: "The social half of ESG: headcount, diversity and safety indicators." },
                ]}
              />
              <Prose>
                An ESG analytics dashboard, currently in build, that pulls
                sustainability indicators into a single reporting view aligned
                to GRI and BRSR disclosure requirements. The intent is to
                collapse the gap between the spreadsheets an operations team
                keeps and the disclosures a reporting team has to file.
              </Prose>
              <ImageSlot
                name="esg-dashboard.png"
                spec="16:10 · 1440×900"
                note="Power BI view, once the build is far enough along"
                className="aspect-[16/10]"
              />
            </Project>

            {/* -------------------------------------------------- */}
            <Project
              title="Jharia Coalfield — Mining Impact Assessment"
              stack={["Remote Sensing", "QGIS", "NDVI time series"]}
              meta="2014 – 2024"
            >
              <Metrics
                items={[
                  { value: "+0.196", label: "net NDVI change" },
                  { value: "10 yrs", label: "observation window" },
                  { value: "Jharia", label: "coalfield, Jharkhand" },
                ]}
              />
              <Prose>
                A decade-long remote sensing study of the Jharia coalfield, one
                of the most intensively mined and fire-affected landscapes in
                India. Comparing NDVI between 2014 and 2024 returned a positive
                change of +0.196 — evidence of genuine vegetation regeneration
                across parts of the field, most plausibly from reclamation work
                and the closure of some surface workings.
              </Prose>
              <Prose>
                NDVI recovery is a measure of green cover, not of ecological
                quality or of the underground fires that still burn there. The
                number is a starting point for ground verification, not a
                verdict on the site.
              </Prose>
              <a href={LINKEDIN} className={monoLink} target="_blank" rel="noreferrer">
                write-up ↗
              </a>
            </Project>

            {/* -------------------------------------------------- */}
            <Project
              title="Water Quality of Odisha — GIS Analysis"
              stack={["QGIS", "Thematic mapping", "Catchment analysis"]}
              meta="ongoing"
            >
              <Metrics
                items={[
                  { value: "10 yrs", label: "of water quality records" },
                  { value: "Odisha", label: "study region" },
                  { value: "Catchment", label: "unit of analysis" },
                ]}
              />
              <Prose>
                A GIS-based study of ten years of water quality data across
                Odisha, mapped thematically and analysed at catchment level
                rather than by sampling point. Aggregating to the catchment is
                the part that matters: it lets a degrading trend be attributed
                to what is happening upstream instead of being read as noise at
                a single monitoring station.
              </Prose>
            </Project>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section id="experience" className="mb-28">
          <SectionHeading>experience</SectionHeading>
          <div className="space-y-12">
            <div className="space-y-3">
              <header className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    Environmental Intern — TOWASO
                  </h3>
                  <p className="font-mono text-xs text-ink/50 dark:text-white/50">
                    Jamshedpur, Jharkhand
                  </p>
                </div>
                <span className="font-mono text-xs text-ink/40 dark:text-white/40 whitespace-nowrap pt-1">
                  May – Jul 2025
                </span>
              </header>
              <Prose>
                TOWASO works on waste management solutions. I worked on Extended
                Producer Responsibility (EPR) compliance and on analysis of
                waste generation and disposal — the reporting side of how much
                material a producer puts into the market and what is
                demonstrably recovered from it.
              </Prose>
            </div>

            <div className="space-y-3">
              <header className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    District Coordinator, Dhanbad — Indian Biodiversity
                    Conservation Society
                  </h3>
                  <p className="font-mono text-xs text-ink/50 dark:text-white/50">
                    Dhanbad, Jharkhand
                  </p>
                </div>
                <span className="font-mono text-xs text-ink/40 dark:text-white/40 whitespace-nowrap pt-1">
                  Mar 2024 – present
                </span>
              </header>
              <Prose>
                Coordinating IBCS activity for Dhanbad district — conservation
                outreach and on-ground biodiversity work in a district defined
                by coal.
              </Prose>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section className="mb-28">
          <SectionHeading>toolkit</SectionHeading>
          <dl className="space-y-6">
            {[
              {
                k: "Environmental science",
                v: "ESG & sustainability reporting · Carbon footprinting & GHG accounting · EIA · LCA · Air, water & soil quality assessment · Wastewater treatment (primary, secondary, tertiary)",
              },
              {
                k: "Geospatial",
                v: "QGIS · Spatial analysis · Remote sensing · LST & NDVI derivation · Thematic mapping · Catchment analysis",
              },
              {
                k: "Data & analytics",
                v: "Python (Pandas, Matplotlib, Plotly) · Advanced Excel · Power BI · Data visualisation · Statistical analysis",
              },
              {
                k: "Assessment software",
                v: "OpenLCA · Workiva",
              },
              {
                k: "Frameworks & standards",
                v: "GHG Protocol · GRI · BRSR · Net Zero fundamentals",
              },
              {
                k: "Professional",
                v: "Research & technical report writing · Presentation · Project management",
              },
            ].map((row) => (
              <div
                key={row.k}
                className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6"
              >
                <dt className="font-mono text-xs text-ink/40 dark:text-white/40 pt-1">
                  {row.k}
                </dt>
                <dd className="text-ink/75 dark:text-white/75 leading-relaxed">
                  {row.v}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section className="mb-28">
          <SectionHeading>education</SectionHeading>
          <div className="space-y-0">
            {[
              {
                course: "B.Sc (Hons.) Environmental Science",
                inst: "Tribhuvan College of Environment & Development Sciences",
                board: "Nalanda University",
                year: "Pursuing · 7th semester",
              },
              {
                course: "Senior Secondary (10+2)",
                inst: "R.S. More College",
                board: "JAC",
                year: "2022 – 23",
              },
              {
                course: "Secondary (10th)",
                inst: "DAV Public School",
                board: "CBSE",
                year: "2020 – 21",
              },
            ].map((e) => (
              <div
                key={e.course}
                className="grid sm:grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-5 border-b border-ink/10 dark:border-white/10 first:border-t first:border-ink/10 dark:first:border-white/10"
              >
                <div className="space-y-1">
                  <p className="font-display text-base font-semibold">
                    {e.course}
                  </p>
                  <p className="text-ink/70 dark:text-white/70 leading-relaxed">
                    {e.inst}
                  </p>
                  <p className="font-mono text-[11px] text-ink/40 dark:text-white/40">
                    {e.board}
                  </p>
                </div>
                <span className="font-mono text-xs text-ink/50 dark:text-white/50 sm:text-right whitespace-nowrap pt-1">
                  {e.year}
                </span>
              </div>
            ))}
          </div>
          <p className="font-mono text-xs text-ink/50 dark:text-white/50 mt-5">
            6th semester — 9.12 SGPA
          </p>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section className="mb-28">
          <SectionHeading>training &amp; certification</SectionHeading>
          <ul className="space-y-0">
            {[
              {
                t: "Waste Management",
                o: "NPTEL",
                d: "Oct – Dec 2025",
              },
              {
                t: "Certified Environmental Professional",
                o: "Environmental Research & Education",
                d: "Oct 2024",
              },
              {
                t: "MS Excel (2-month course)",
                o: "IBM via Coursera",
                d: "Feb – Mar 2024",
              },
              {
                t: "Building Resilience",
                o: "LinkedIn Learning",
                d: "Jul 2024",
              },
              {
                t: "Developing Your Emotional Intelligence",
                o: "LinkedIn Learning",
                d: "Jul 2024",
              },
              {
                t: "Teamwork Foundations",
                o: "LinkedIn Learning",
                d: "Jul 2024",
              },
            ].map((c) => (
              <li
                key={c.t}
                className="flex items-baseline justify-between gap-4 py-4 border-b border-ink/10 dark:border-white/10 first:border-t first:border-ink/10 dark:first:border-white/10"
              >
                <div>
                  <p className="font-display text-base font-semibold">{c.t}</p>
                  <p className="font-mono text-[11px] text-ink/45 dark:text-white/45">
                    {c.o}
                  </p>
                </div>
                <span className="font-mono text-xs text-ink/50 dark:text-white/50 whitespace-nowrap">
                  {c.d}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section className="mb-28">
          <SectionHeading>speaking &amp; recognition</SectionHeading>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-display text-base font-semibold">
                International conference paper — Nov 2024
              </h3>
              <Prose>
                Presented &ldquo;Causes, Consequences and Remedial Measures of
                Tsunami: A Case Study of the Infamous 26 December 2004 Indian
                Ocean Tsunami&rdquo; at the international conference on Research,
                Innovation and IPR for Sustainable Development and Viksit
                Bharat.
              </Prose>
            </div>
            <ul className="space-y-2 text-ink/75 dark:text-white/75 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-moss dark:text-moss-light">—</span>
                Winner, Waste to Wealth competition
              </li>
              <li className="flex gap-3">
                <span className="text-moss dark:text-moss-light">—</span>
                Winner, case study competition on &ldquo;The Floating Gardens of
                Bangladesh&rdquo;
              </li>
              <li className="flex gap-3">
                <span className="text-moss dark:text-moss-light">—</span>
                Winner, college debate competition
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section className="mb-28">
          <SectionHeading>beyond the lab</SectionHeading>
          <Prose>
            I captained the Dhanbad cricket team to a championship win. I
            perform — drama productions and stand-up comedy — which is more
            useful to this work than it sounds, because most of environmental
            science is persuading a room that a number matters. I have also
            helped plan and run college festivals, working with teams to get
            events actually delivered.
          </Prose>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section className="mb-28">
          <SectionHeading>references</SectionHeading>
          <ul className="space-y-0">
            {[
              {
                n: "Dr. Seema Mishra",
                r: "Former Director, Mumbai University",
                e: "seema.mishra@tribhuvancollege.ac.in",
              },
              {
                n: "Dr. Subodh Chaturvedi",
                r: "Associate Professor",
                e: "subodhchaturvedi@teds.ac.in",
              },
            ].map((p) => (
              <li
                key={p.n}
                className="grid sm:grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-4 border-b border-ink/10 dark:border-white/10 first:border-t first:border-ink/10 dark:first:border-white/10"
              >
                <div>
                  <p className="font-display text-base font-semibold">{p.n}</p>
                  <p className="font-mono text-[11px] text-ink/45 dark:text-white/45">
                    {p.r}
                  </p>
                </div>
                <a
                  href={`mailto:${p.e}`}
                  className={`font-mono text-xs text-ink/50 dark:text-white/50 sm:text-right ${linkClass}`}
                >
                  {p.e}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------------------------- */}
        <section className="mb-8">
          <SectionHeading>get in touch</SectionHeading>
          <div className="space-y-5">
            <Prose>
              I am looking for work in environmental consulting, ESG and
              sustainability reporting, and climate &amp; geospatial analytics —
              roles where the job is to measure something properly and then
              explain it to the people who have to decide.
            </Prose>
            <div className="font-mono text-xs space-y-2 text-ink/70 dark:text-white/70">
              <p>
                <a href={`mailto:${EMAIL}`} className={linkClass}>
                  {EMAIL}
                </a>
              </p>
              <p>
                <a href={`tel:${PHONE_HREF}`} className={linkClass}>
                  {PHONE}
                </a>
              </p>
              <p>Dhanbad, Jharkhand 828109, India</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-32 pt-8 border-t border-ink/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs text-ink/50 dark:text-white/50">
        <span>Raju Kumar — Dhanbad, Jharkhand</span>
        <div className="flex gap-5">
          <a href={LINKEDIN} className={monoLink} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`} className={monoLink}>
            Email
          </a>
          <a href={`tel:${PHONE_HREF}`} className={monoLink}>
            Phone
          </a>
        </div>
      </footer>
    </>
  );
}
