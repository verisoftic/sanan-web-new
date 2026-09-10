import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ProductExplorer } from "@/components/ProductExplorer";
import { EcgBackground } from "@/components/EcgBackground";
import { AnimatedHeading, Reveal, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Medical Device Catalog",
  description:
    "Browse Sanan's precision-engineered sterile disposables — syringes, IV sets, drips, cannulas, and blood management systems manufactured to ISO 13485 & GMP standards.",
};

const oemStats = [
  { value: "ISO 13485:2016", label: "Certified Facility", icon: "verified" },
  { value: "±0.03mm", label: "Precision Molding", icon: "target" },
  { value: "EO / Gamma", label: "Sterilization Options", icon: "cyclone" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-cleanroom-navy text-white">
        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-clinical-cyan-glow/15 blur-3xl" />
        <EcgBackground className="opacity-[0.22]" />
        <div className="container-pad relative z-10 pb-space-xl pt-32 md:pt-40">
          <Reveal>
            <span className="eyebrow text-clinical-cyan-glow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clinical-cyan-glow opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-clinical-cyan-glow" />
              </span>
              Validated Production • Class 10,000 Cleanroom
            </span>
          </Reveal>
          <AnimatedHeading
            text="Medical Device Catalog"
            as="h1"
            className="mt-3 font-display text-display-hero-mobile font-extrabold tracking-tight md:text-display-hero"
            highlight="Catalog"
            highlightClassName="text-clinical-cyan-glow"
          />
          <Reveal delay={0.15}>
            <p className="mt-3 max-w-2xl font-body text-body-lg text-surface-variant/90">
              Precision-engineered sterile disposables, IV sets, and blood management systems
              manufactured to ISO 13485 &amp; GMP standards.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Catalog */}
      <section className="bg-surface">
        <div className="container-pad py-space-2xl">
          <ProductExplorer withSearch useCatalogImage />
        </div>
      </section>

      {/* OEM / Institutional block */}
      <section className="bg-surface pb-space-3xl">
        <div className="container-pad">
          <Reveal className="relative overflow-hidden rounded-2xl bg-cleanroom-navy p-space-xl text-white shadow-level-3 md:p-space-2xl">
            <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-primary-container/25 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-space-lg">
              <div className="max-w-2xl">
                <span className="eyebrow text-clinical-cyan-glow">
                  <Icon name="factory" className="text-[18px]" />
                  Institutional Manufacturing
                </span>
                <h2 className="mt-2 font-display text-headline-md font-bold md:text-headline-lg">
                  Custom Specifications &amp; OEM Manufacturing Available
                </h2>
                <p className="mt-2 font-body text-body-md text-surface-variant/90">
                  SMC provides turnkey private labelling, custom lumen extrusion, custom blister
                  assembly, and validated ethylene-oxide / gamma sterilization for national hospital
                  procurement tenders.
                </p>
              </div>

              <Stagger className="grid grid-cols-1 gap-space-sm sm:grid-cols-3" stagger={0.1}>
                {oemStats.map((s) => (
                  <StaggerItem
                    key={s.label}
                    className="flex items-center gap-3 rounded-xl bg-white/5 p-space-md ring-1 ring-white/5"
                  >
                    <Icon name={s.icon} className="text-clinical-cyan-glow text-[26px]" />
                    <div className="flex flex-col leading-none">
                      <span className="font-mono text-spec-mono font-bold text-white">{s.value}</span>
                      <span className="mt-1 font-body text-label-caps uppercase text-surface-variant/80">
                        {s.label}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <Link href="/contact" className="btn-primary self-start">
                <Icon name="inventory" className="text-[18px]" />
                Request Bulk Sample Kit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
