import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Icon } from "@/components/Icon";
import { ProductExplorer } from "@/components/ProductExplorer";
import { StatCounter } from "@/components/StatCounter";
import { AnimatedHeading, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { facts, pillars } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Ticker fact matrix */}
      <section className="bg-cleanroom-navy/95">
        <div className="container-pad py-space-md">
          <Stagger
            className="grid grid-cols-2 gap-space-sm lg:grid-cols-4"
            stagger={0.08}
          >
            {facts.map((f) => (
              <StaggerItem
                key={f.value}
                className="flex items-start gap-2.5 rounded-lg bg-white/5 p-space-sm ring-1 ring-white/5"
              >
                <Icon name={f.icon} className="mt-0.5 text-clinical-cyan-glow text-[22px]" />
                <div>
                  <span className="block font-mono text-spec-mono font-bold text-white">
                    {f.value}
                  </span>
                  <span className="font-body text-label-caps uppercase text-surface-variant/80">
                    {f.label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Product showcase */}
      <section id="catalog" className="scroll-mt-24 bg-surface">
        <div className="container-pad py-space-2xl md:py-space-3xl">
          <div className="mb-space-xl flex flex-col gap-space-xs">
            <Reveal>
              <span className="eyebrow text-primary">
                <Icon name="inventory_2" className="text-[18px]" />
                Hospital Catalog
              </span>
            </Reveal>
            <AnimatedHeading
              text="Engineered for Care"
              as="h2"
              className="font-display text-headline-lg-mobile font-bold text-cleanroom-navy md:text-headline-lg"
              highlight="Care"
              highlightClassName="text-primary"
            />
            <Reveal delay={0.15}>
              <p className="max-w-2xl font-body text-body-md text-on-surface-variant">
                Sterile, single-use, high-tolerance devices calibrated for clinical hospitals, blood
                banks, and critical-care units.
              </p>
            </Reveal>
          </div>

          <ProductExplorer />
        </div>
      </section>

      {/* Facility / Trust */}
      <section className="relative overflow-hidden bg-cleanroom-navy text-white">
        <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-clinical-cyan-glow/10 blur-3xl" />
        <div className="container-pad relative z-10 grid items-center gap-space-xl py-space-2xl md:py-space-3xl lg:grid-cols-2">
          <div className="flex flex-col gap-space-md">
            <Reveal>
              <span className="eyebrow text-clinical-cyan-glow">
                <Icon name="domain" className="text-[18px]" />
                Who We Are
              </span>
            </Reveal>
            <AnimatedHeading
              text="Manufacturing Trust, One Device at a Time"
              as="h2"
              className="font-display text-headline-lg-mobile font-bold md:text-headline-lg"
              highlight="Trust,"
              highlightClassName="text-clinical-cyan-glow"
            />
            <Reveal delay={0.15}>
              <p className="max-w-xl font-body text-body-lg text-surface-variant/90">
                Sanan Manufacturing SMC — Private Limited builds essential medical devices with
                surgical precision, uncompromising hygiene, and batch-tested reliability at every
                single stage of production.
              </p>
            </Reveal>

            <Stagger className="mt-2 grid grid-cols-2 gap-space-sm" stagger={0.12}>
              <StaggerItem className="rounded-xl bg-white/5 p-space-md ring-1 ring-white/5">
                <span className="block font-display text-display-hero-mobile font-extrabold leading-none text-clinical-cyan-glow">
                  <StatCounter value={50} suffix="M+" />
                </span>
                <span className="mt-1 block font-body text-label-caps uppercase text-surface-variant/80">
                  Annual Syringe Capacity
                </span>
              </StaggerItem>
              <StaggerItem className="rounded-xl bg-white/5 p-space-md ring-1 ring-white/5">
                <span className="block font-display text-display-hero-mobile font-extrabold leading-none text-clinical-cyan-glow">
                  <StatCounter value={100} suffix="%" />
                </span>
                <span className="mt-1 block font-body text-label-caps uppercase text-surface-variant/80">
                  Optical Leak Testing
                </span>
              </StaggerItem>
            </Stagger>

            <Reveal delay={0.2}>
              <Link href="/about" className="btn-on-dark mt-2 self-start">
                Learn More About Us
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            </Reveal>
          </div>

          <Reveal direction="left" className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-level-3">
              <Image
                src="/images/facility-panorama.jpg"
                alt="Interior of Sanan's cleanroom plant in Swabi with technicians in sterile suits operating injection-molding machinery"
                width={900}
                height={560}
                className="h-64 w-full object-cover md:h-[24rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cleanroom-navy to-transparent" />
              <div className="absolute bottom-4 left-4 flex flex-col">
                <span className="font-heading text-subheading font-bold text-clinical-cyan-glow">
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

      {/* Quality pillars */}
      <section className="bg-surface">
        <div className="container-pad py-space-2xl md:py-space-3xl">
          <div className="mb-space-xl flex flex-col items-center gap-space-xs text-center">
            <Reveal>
              <span className="eyebrow rounded-full bg-spec-code-bg px-3 py-1 text-primary">
                <Icon name="verified" className="text-[16px]" filled />
                Why Sanan
              </span>
            </Reveal>
            <AnimatedHeading
              text="Quality You Can Rely On"
              as="h2"
              className="font-display text-headline-lg-mobile font-bold text-cleanroom-navy md:text-headline-lg"
              highlight="Rely"
              highlightClassName="text-primary"
            />
            <Reveal delay={0.15}>
              <p className="max-w-xl font-body text-body-md text-on-surface-variant">
                Every batch undergoes strict microbial, dimensional, and biological validation before
                leaving our facility.
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
                <h3 className="font-heading text-headline-sm font-bold text-cleanroom-navy">
                  {p.title}
                </h3>
                <p className="font-body text-body-sm text-on-surface-variant">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface pb-space-3xl">
        <div className="container-pad">
          <Reveal className="relative overflow-hidden rounded-2xl bg-cleanroom-navy p-space-xl text-white shadow-level-3 md:p-space-2xl">
            <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-clinical-cyan-glow/15 blur-3xl" />
            <div className="relative z-10 flex flex-col items-start gap-space-md md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <span className="eyebrow text-clinical-cyan-glow">
                  <Icon name="handshake" className="text-[18px]" />
                  Direct Procurement
                </span>
                <h2 className="mt-2 font-display text-headline-md font-bold md:text-headline-lg">
                  Partner with a Manufacturer You Can Trust
                </h2>
                <p className="mt-2 font-body text-body-md text-surface-variant/90">
                  Get in touch to discuss product specifications, bulk orders, institutional tenders,
                  or distribution partnerships.
                </p>
              </div>
              <Link href="/contact" className="btn-primary shrink-0">
                Contact Us
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
