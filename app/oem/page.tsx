import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { EcgBackground } from "@/components/EcgBackground";
import { AnimatedHeading, Reveal, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "OEM & Private Label",
  description:
    "Turnkey OEM and private-label medical device manufacturing — custom extrusion, branding, blister assembly, and validated sterilization.",
};

const capabilities = [
  { icon: "label", title: "Private Labelling", body: "Your brand, print, and packaging on validated device platforms — from artwork to shelf-ready cartons." },
  { icon: "straighten", title: "Custom Extrusion", body: "Custom lumen sizes, tubing lengths, and needle/gauge configurations to your specification." },
  { icon: "inventory_2", title: "Custom Blister Assembly", body: "Tyvek and film blister formats, kit assembly, and multi-component packing." },
  { icon: "cyclone", title: "Validated Sterilization", body: "EO and gamma sterilization cycles, validated and documented per lot." },
  { icon: "description", title: "Regulatory Support", body: "COA, DRAP registration dossiers, and documentation packages for tenders and export." },
  { icon: "local_shipping", title: "Export Logistics", body: "Export-grade packaging and documentation for international distribution." },
];

const steps = [
  { title: "Requirement & NDA", body: "Share your specification, target market, and volumes. We align under NDA." },
  { title: "Technical Review", body: "Feasibility, tooling, materials, and regulatory pathway are confirmed." },
  { title: "Sampling & Validation", body: "Prototype samples, pilot run, and process validation with documentation." },
  { title: "Production & Supply", body: "Scaled production, QC release, and scheduled supply to your destinations." },
];

export default function OemPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-cleanroom-navy text-white">
        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-clinical-cyan-glow/15 blur-3xl" />
        <EcgBackground className="opacity-[0.22]" />
        <div className="container-pad relative z-10 grid items-center gap-space-xl pb-space-2xl pt-32 md:pt-40 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow text-clinical-cyan-glow">
                <Icon name="factory" className="text-[18px]" />
                OEM & Private Label
              </span>
            </Reveal>
            <AnimatedHeading
              text="Your Brand, Our Precision Manufacturing"
              as="h1"
              className="mt-3 font-display text-display-hero-mobile font-extrabold tracking-tight md:text-display-hero"
              highlight="Precision"
              highlightClassName="text-clinical-cyan-glow"
            />
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-xl font-body text-body-lg text-surface-variant/90">
                Partner with a Class 10,000 cleanroom manufacturer for turnkey private-label and
                custom device programs — from tooling to sterile, shelf-ready product.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-space-md flex flex-wrap gap-space-sm">
                <Link href="/contact" className="btn-primary">
                  <Icon name="handshake" className="text-[18px]" />
                  Start a Partnership
                </Link>
                <a href="/docs/company-profile.pdf" download className="btn-on-dark">
                  <Icon name="download" className="text-[18px]" />
                  Company Profile
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-level-3">
              <Image
                src="/images/facility-panorama.jpg"
                alt="Sanan OEM manufacturing facility"
                width={900}
                height={620}
                priority
                className="h-64 w-full object-cover md:h-[22rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cleanroom-navy/80 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-surface">
        <div className="container-pad py-space-2xl md:py-space-3xl">
          <div className="mb-space-xl max-w-2xl">
            <Reveal>
              <span className="eyebrow text-primary">
                <Icon name="build" className="text-[18px]" />
                Capabilities
              </span>
            </Reveal>
            <AnimatedHeading
              text="Full-Service Contract Manufacturing"
              as="h2"
              className="mt-2 font-display text-headline-lg-mobile font-bold text-cleanroom-navy md:text-headline-lg"
              highlight="Contract"
              highlightClassName="text-primary"
            />
          </div>
          <Stagger className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {capabilities.map((c) => (
              <StaggerItem
                key={c.title}
                className="group flex flex-col gap-3 rounded-xl border border-cleanroom-navy/[0.06] bg-sterile-surface p-space-lg shadow-level-1 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-level-2"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-spec-code-bg transition-colors duration-300 group-hover:bg-primary">
                  <Icon name={c.icon} className="text-primary text-[28px] transition-colors duration-300 group-hover:text-white" />
                </span>
                <h3 className="font-heading text-headline-sm font-bold text-cleanroom-navy">{c.title}</h3>
                <p className="font-body text-body-sm text-on-surface-variant">{c.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-cleanroom-navy text-white">
        <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-pad relative z-10 py-space-2xl md:py-space-3xl">
          <div className="mb-space-xl max-w-2xl">
            <Reveal>
              <span className="eyebrow text-clinical-cyan-glow">
                <Icon name="route" className="text-[18px]" />
                How It Works
              </span>
            </Reveal>
            <AnimatedHeading
              text="From Concept to Scaled Supply"
              as="h2"
              className="mt-2 font-display text-headline-lg-mobile font-bold md:text-headline-lg"
              highlight="Supply"
              highlightClassName="text-clinical-cyan-glow"
            />
          </div>
          <Stagger className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {steps.map((s, i) => (
              <StaggerItem key={s.title} className="rounded-xl bg-white/5 p-space-lg ring-1 ring-white/5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-clinical-cyan-glow/15 font-mono text-spec-mono text-clinical-cyan-glow ring-1 ring-clinical-cyan-glow/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-headline-sm font-bold text-white">{s.title}</h3>
                <p className="mt-1 font-body text-body-sm text-surface-variant/90">{s.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-space-2xl md:py-space-3xl">
        <div className="container-pad">
          <Reveal className="relative overflow-hidden rounded-2xl bg-cleanroom-navy p-space-xl text-center text-white shadow-level-3 md:p-space-2xl">
            <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-64 w-64 rounded-full bg-clinical-cyan-glow/15 blur-3xl" />
            <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-space-md">
              <h2 className="font-display text-headline-md font-bold md:text-headline-lg">
                Let&apos;s build your product line
              </h2>
              <p className="font-body text-body-md text-surface-variant/90">
                Tell us about your specifications and volumes — we&apos;ll respond with a tailored OEM
                proposal.
              </p>
              <Link href="/contact" className="btn-primary">
                <Icon name="request_quote" className="text-[18px]" />
                Request OEM Proposal
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
