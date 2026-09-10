import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { AnimatedHeading, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { certifications, pillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quality & Compliance",
  description:
    "Sanan's quality policy, certifications, and controlled manufacturing process — ISO 13485, GMP, ISO 10993, and validated sterilization.",
};

const qcSteps = [
  { icon: "science", title: "Raw Material Testing", body: "Every batch of medical-grade polymer is tested for purity and traceability before molding." },
  { icon: "precision_manufacturing", title: "In-Process Control", body: "Dimensional and functional checks run continuously across automated production lines." },
  { icon: "biotech", title: "Microbial & Bioburden", body: "Sterility, bioburden, and residual-EO testing on every sterilization lot." },
  { icon: "fact_check", title: "Batch Release", body: "Final optical inspection and documented release against acceptance criteria." },
];

export default function QualityPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-cleanroom-navy text-white">
        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-clinical-cyan-glow/15 blur-3xl" />
        <div className="container-pad relative z-10 pb-space-2xl pt-32 md:pt-40">
          <Reveal>
            <span className="eyebrow text-clinical-cyan-glow">
              <Icon name="verified_user" className="text-[18px]" filled />
              Quality & Compliance
            </span>
          </Reveal>
          <AnimatedHeading
            text="Quality Is Engineered, Not Inspected In"
            as="h1"
            className="mt-3 max-w-3xl font-display text-display-hero-mobile font-extrabold tracking-tight md:text-display-hero"
            highlight="Engineered,"
            highlightClassName="text-clinical-cyan-glow"
          />
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-2xl font-body text-body-lg text-surface-variant/90">
              From raw polymer to sterile blister pack, every stage is controlled, traceable, and
              validated under an ISO 13485 quality-management system.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quality policy statement */}
      <section className="bg-surface">
        <div className="container-pad py-space-2xl">
          <Reveal className="mx-auto max-w-3xl rounded-2xl border border-primary/15 bg-spec-code-bg/50 p-space-xl text-center">
            <Icon name="format_quote" className="text-primary text-[36px]" />
            <p className="mt-2 font-display text-headline-md font-semibold leading-snug text-cleanroom-navy">
              &ldquo;We are committed to manufacturing safe, effective, and reliable medical devices
              that meet or exceed regulatory and customer requirements — through continual
              improvement of our quality-management system.&rdquo;
            </p>
            <p className="mt-4 font-body text-label-caps uppercase tracking-wider text-primary">
              Sanan Quality Policy
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-surface pb-space-2xl">
        <div className="container-pad">
          <Stagger className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {pillars.map((p) => (
              <StaggerItem
                key={p.title}
                className="group flex flex-col gap-3 rounded-xl border border-cleanroom-navy/[0.06] bg-sterile-surface p-space-lg shadow-level-1 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-level-2"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-spec-code-bg transition-colors duration-300 group-hover:bg-primary">
                  <Icon name={p.icon} className="text-primary text-[28px] transition-colors duration-300 group-hover:text-white" />
                </span>
                <h3 className="font-heading text-headline-sm font-bold text-cleanroom-navy">{p.title}</h3>
                <p className="font-body text-body-sm text-on-surface-variant">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* QC process */}
      <section className="relative overflow-hidden bg-cleanroom-navy text-white">
        <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-pad relative z-10 py-space-2xl md:py-space-3xl">
          <div className="mb-space-xl max-w-2xl">
            <Reveal>
              <span className="eyebrow text-clinical-cyan-glow">
                <Icon name="checklist" className="text-[18px]" />
                Controlled Process
              </span>
            </Reveal>
            <AnimatedHeading
              text="Four Gates of Quality Control"
              as="h2"
              className="mt-2 font-display text-headline-lg-mobile font-bold md:text-headline-lg"
              highlight="Quality"
              highlightClassName="text-clinical-cyan-glow"
            />
          </div>
          <Stagger className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {qcSteps.map((s, i) => (
              <StaggerItem
                key={s.title}
                className="relative rounded-xl bg-white/5 p-space-lg ring-1 ring-white/5"
              >
                <span className="font-mono text-spec-mono text-clinical-cyan-glow">
                  0{i + 1}
                </span>
                <Icon name={s.icon} className="mt-2 block text-clinical-cyan-glow text-[30px]" />
                <h3 className="mt-3 font-heading text-headline-sm font-bold text-white">{s.title}</h3>
                <p className="mt-1 font-body text-body-sm text-surface-variant/90">{s.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Certifications with downloads */}
      <section className="bg-surface">
        <div className="container-pad py-space-2xl md:py-space-3xl">
          <div className="mb-space-xl flex flex-col items-center gap-2 text-center">
            <Reveal>
              <span className="eyebrow rounded-full bg-spec-code-bg px-3 py-1 text-primary">
                <Icon name="workspace_premium" className="text-[16px]" filled />
                Certifications
              </span>
            </Reveal>
            <AnimatedHeading
              text="Accredited to Global Standards"
              as="h2"
              className="font-display text-headline-lg-mobile font-bold text-cleanroom-navy md:text-headline-lg"
              highlight="Global"
              highlightClassName="text-primary"
            />
            <Reveal delay={0.15}>
              <p className="max-w-xl font-body text-body-md text-on-surface-variant">
                Download our current certificates and compliance documents. (Placeholder files —
                official documents will replace these before launch.)
              </p>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {certifications.map((c) => (
              <StaggerItem
                key={c.code}
                className="flex items-center justify-between gap-4 rounded-xl border border-cleanroom-navy/[0.06] bg-sterile-surface p-space-md shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-level-2"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-spec-code-bg">
                    <Icon name="verified" className="text-primary text-[26px]" filled />
                  </span>
                  <div>
                    <span className="block font-mono text-spec-mono font-bold text-cleanroom-navy">
                      {c.code}
                    </span>
                    <span className="font-body text-body-sm text-on-surface-variant">{c.name}</span>
                  </div>
                </div>
                <a
                  href={c.file}
                  download
                  aria-label={`Download ${c.code} certificate`}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-white transition-colors hover:bg-primary-container"
                >
                  <Icon name="download" className="text-[20px]" />
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface pb-space-3xl">
        <div className="container-pad">
          <Reveal className="relative overflow-hidden rounded-2xl bg-cleanroom-navy p-space-xl text-white shadow-level-3 md:p-space-2xl">
            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-clinical-cyan-glow/15 blur-3xl" />
            <div className="relative z-10 flex flex-col items-start gap-space-md md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-headline-md font-bold md:text-headline-lg">
                  Need documentation for a tender?
                </h2>
                <p className="mt-2 font-body text-body-md text-surface-variant/90">
                  We provide full COA and registration dossiers for institutional and government
                  procurement.
                </p>
              </div>
              <Link href="/contact" className="btn-primary shrink-0">
                Request Documents
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
