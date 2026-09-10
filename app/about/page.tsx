import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { StatCounter } from "@/components/StatCounter";
import { AnimatedHeading, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { certifications, company, pillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sanan Manufacturing SMC — Private Limited builds essential medical devices with precision, hygiene, and reliability at every stage of production.",
};

const stats = [
  { value: 50, suffix: "M+", label: "Annual Syringe Capacity" },
  { value: 120, suffix: "K", label: "Sq.Ft Cleanroom Plant" },
  { value: 100, suffix: "%", label: "Optical Leak Testing" },
  { value: 6, suffix: "", label: "Core Product Lines" },
];

// DUMMY milestone years — replace with the real timeline before launch.
const timeline = [
  {
    year: "2015",
    title: "Built on Clinical Trust",
    body: "Sanan Manufacturing was established to supply hospitals and blood banks with locally manufactured, globally compliant medical consumables.",
  },
  {
    year: "2017",
    title: "Class 10,000 Facility",
    body: "A 120,000 sq.ft positive-pressure cleanroom in Gadoon Industrial Estate, Swabi, with laminar airflow and automated injection molding.",
  },
  {
    year: "2019",
    title: "ISO 13485 & GMP",
    body: "Full quality-management certification with ISO 10993 biocompatibility evaluation and validated EO / gamma sterilization cycles.",
  },
  {
    year: "2023",
    title: "Institutional Supply",
    body: "Serving teaching hospitals, provincial health departments, and distribution partners through direct procurement and OEM programs.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cleanroom-navy text-white">
        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-clinical-cyan-glow/15 blur-3xl" />
        <div className="container-pad relative z-10 grid items-center gap-space-xl pb-space-2xl pt-32 md:pt-40 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow text-clinical-cyan-glow">
                <Icon name="domain" className="text-[18px]" />
                About Sanan
              </span>
            </Reveal>
            <AnimatedHeading
              text="Manufacturing Trust, One Device at a Time"
              as="h1"
              className="mt-3 font-display text-display-hero-mobile font-extrabold tracking-tight md:text-display-hero"
              highlight="Trust,"
              highlightClassName="text-clinical-cyan-glow"
            />
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-xl font-body text-body-lg text-surface-variant/90">
                Sanan Manufacturing SMC — Private Limited builds essential medical devices with
                surgical precision, uncompromising hygiene, and batch-tested reliability at every
                single stage of production.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-space-md flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 font-mono text-spec-mono text-primary-fixed">
                  <Icon name="flag" className="text-[14px]" /> Est. {company.founded}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 font-mono text-spec-mono text-primary-fixed">
                  <Icon name="workspace_premium" className="text-[14px]" /> {company.yearsExperience} Years
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 font-mono text-spec-mono text-primary-fixed">
                  <Icon name="public" className="text-[14px]" /> {company.countriesServed}+ Countries
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-level-3">
              <Image
                src="/images/hero-cleanroom.jpg"
                alt="Automated sterile production line inside Sanan's cleanroom"
                width={900}
                height={620}
                priority
                className="h-72 w-full object-cover md:h-[24rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cleanroom-navy/80 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative z-10 bg-surface">
        <div className="container-pad relative z-10 -mt-10 md:-mt-14">
          <Stagger className="grid grid-cols-2 gap-space-md rounded-2xl border border-cleanroom-navy/[0.06] bg-sterile-surface p-space-lg shadow-level-2 md:grid-cols-4" stagger={0.1}>
            {stats.map((s) => (
              <StaggerItem key={s.label} className="flex flex-col items-center text-center">
                <span className="font-display text-headline-lg-mobile font-extrabold text-primary md:text-headline-lg">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-1 font-body text-label-caps uppercase text-on-surface-variant">
                  {s.label}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Mission / values */}
      <section className="bg-surface">
        <div className="container-pad py-space-2xl md:py-space-3xl">
          <div className="mb-space-xl max-w-2xl">
            <Reveal>
              <span className="eyebrow text-primary">
                <Icon name="target" className="text-[18px]" />
                Our Mission
              </span>
            </Reveal>
            <AnimatedHeading
              text="Precision That Protects Patients"
              as="h2"
              className="mt-2 font-display text-headline-lg-mobile font-bold text-cleanroom-navy md:text-headline-lg"
              highlight="Protects"
              highlightClassName="text-primary"
            />
            <Reveal delay={0.15}>
              <p className="mt-3 font-body text-body-md text-on-surface-variant">
                From raw medical-grade polymer to final sterile blister pack, every step is controlled,
                traceable, and validated — because the reliability of a single device can define a
                patient outcome.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {pillars.map((p) => (
              <StaggerItem
                key={p.title}
                className="group flex flex-col gap-3 rounded-xl border border-cleanroom-navy/[0.06] bg-sterile-surface p-space-lg shadow-level-1 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-level-2"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-spec-code-bg transition-colors duration-300 group-hover:bg-primary">
                  <Icon
                    name={p.icon}
                    className="text-primary text-[28px] transition-colors duration-300 group-hover:text-white"
                  />
                </span>
                <h3 className="font-heading text-headline-sm font-bold text-cleanroom-navy">{p.title}</h3>
                <p className="font-body text-body-sm text-on-surface-variant">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Managing Director message */}
      <section className="bg-surface pb-space-2xl">
        <div className="container-pad">
          <Reveal className="grid items-center gap-space-xl rounded-2xl border border-cleanroom-navy/[0.06] bg-sterile-surface p-space-lg shadow-level-1 md:grid-cols-[280px_1fr] md:p-space-xl">
            {/* Portrait placeholder */}
            <div className="mx-auto w-full max-w-[240px]">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-[#30424c] to-[#025e7a]">
                <div className="absolute inset-0 grid place-items-center">
                  <Icon name="person" className="text-white/80 text-[96px]" filled />
                </div>
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded bg-black/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/80">
                  Portrait placeholder
                </span>
              </div>
              <div className="mt-3 text-center">
                <p className="font-heading text-headline-sm font-bold text-cleanroom-navy">
                  Mr. Ahmad Sanan
                </p>
                <p className="font-body text-label-caps uppercase tracking-wider text-primary">
                  Managing Director
                </p>
              </div>
            </div>
            {/* Message */}
            <div>
              <span className="eyebrow text-primary">
                <Icon name="record_voice_over" className="text-[18px]" />
                Message from the Managing Director
              </span>
              <Icon name="format_quote" className="mt-3 block text-primary/30 text-[40px]" />
              <p className="font-display text-headline-md font-semibold leading-snug text-cleanroom-navy">
                A precise medication deserves an equally precise instrument. Every device we build
                carries that responsibility — to protect the patient at the other end.
              </p>
              <p className="mt-4 font-body text-body-md text-on-surface-variant">
                Since {company.founded}, our commitment has stayed the same: uncompromising quality,
                controlled manufacturing, and long-term reliability our partners can trust — from a
                single hospital order to a national procurement tender.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journey / timeline over facility image */}
      <section className="relative overflow-hidden bg-cleanroom-navy text-white">
        <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-pad relative z-10 grid gap-space-xl py-space-2xl md:py-space-3xl lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow text-clinical-cyan-glow">
                <Icon name="timeline" className="text-[18px]" />
                Our Journey
              </span>
            </Reveal>
            <AnimatedHeading
              text="Engineering Excellence, Step by Step"
              as="h2"
              className="mt-2 font-display text-headline-lg-mobile font-bold md:text-headline-lg"
              highlight="Excellence,"
              highlightClassName="text-clinical-cyan-glow"
            />
            <div className="mt-space-lg flex flex-col">
              {timeline.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.08} className="relative flex gap-4 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-clinical-cyan-glow/15 font-mono text-spec-mono text-clinical-cyan-glow ring-1 ring-clinical-cyan-glow/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < timeline.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-white/15" />
                    )}
                  </div>
                  <div className="pb-2">
                    <span className="font-body text-label-caps uppercase tracking-wider text-clinical-cyan-glow">
                      {t.year}
                    </span>
                    <h3 className="font-heading text-headline-sm font-bold text-white">{t.title}</h3>
                    <p className="mt-1 font-body text-body-sm text-surface-variant/90">{t.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="left" className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-level-3">
              <Image
                src="/images/facility-panorama.jpg"
                alt="Panoramic view of Sanan's cleanroom manufacturing facility"
                width={900}
                height={640}
                className="h-72 w-full object-cover md:h-[30rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cleanroom-navy via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="block font-heading text-subheading font-bold text-clinical-cyan-glow">
                  Gadoon Industrial Estate, Swabi
                </span>
                <span className="font-mono text-spec-mono text-surface-variant/90">
                  120,000 sq.ft ISO Class 10k Facility
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-surface">
        <div className="container-pad py-space-2xl md:py-space-3xl">
          <div className="mb-space-xl flex flex-col items-center gap-2 text-center">
            <Reveal>
              <span className="eyebrow rounded-full bg-spec-code-bg px-3 py-1 text-primary">
                <Icon name="workspace_premium" className="text-[16px]" filled />
                Compliance
              </span>
            </Reveal>
            <AnimatedHeading
              text="Certified to Global Standards"
              as="h2"
              className="font-display text-headline-lg-mobile font-bold text-cleanroom-navy md:text-headline-lg"
              highlight="Global"
              highlightClassName="text-primary"
            />
          </div>
          <Stagger className="grid grid-cols-2 gap-space-sm sm:grid-cols-3 lg:grid-cols-6" stagger={0.06}>
            {certifications.map((c) => (
              <StaggerItem key={c.code}>
                <a
                  href={c.file}
                  download
                  className="flex h-full flex-col items-center gap-1 rounded-xl border border-primary/15 bg-spec-code-bg/60 p-space-md text-center transition-transform duration-300 hover:-translate-y-1"
                >
                  <Icon name="verified" className="text-primary text-[24px]" filled />
                  <span className="font-mono text-spec-mono font-bold text-cleanroom-navy">{c.code}</span>
                  <span className="font-body text-label-caps uppercase text-on-surface-variant">
                    {c.name}
                  </span>
                  <span className="mt-1 inline-flex items-center gap-1 font-body text-label-caps uppercase tracking-wider text-primary">
                    <Icon name="download" className="text-[14px]" />
                    PDF
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1} className="mt-space-lg text-center">
            <Link href="/quality" className="btn-ghost">
              View Full Quality & Compliance
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </Reveal>
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
                  Let&apos;s Build a Reliable Supply Partnership
                </h2>
                <p className="mt-2 font-body text-body-md text-surface-variant/90">
                  Talk to our biomedical sales team about specifications, bulk orders, and OEM
                  programs.
                </p>
              </div>
              <Link href="/contact" className="btn-primary shrink-0">
                Get in Touch
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
