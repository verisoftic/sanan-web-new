import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { FaqAccordion } from "@/components/FaqAccordion";
import { EcgBackground } from "@/components/EcgBackground";
import { AnimatedHeading, Reveal } from "@/components/motion";
import { faqGroups } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Sanan's products, quality standards, procurement, OEM manufacturing, and international shipping.",
};

export default function FaqPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-cleanroom-navy text-white">
        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-clinical-cyan-glow/15 blur-3xl" />
        <EcgBackground className="opacity-[0.22]" />
        <div className="container-pad relative z-10 pb-space-2xl pt-32 md:pt-40">
          <Reveal>
            <span className="eyebrow text-clinical-cyan-glow">
              <Icon name="help" className="text-[18px]" filled />
              Help Center
            </span>
          </Reveal>
          <AnimatedHeading
            text="Frequently Asked Questions"
            as="h1"
            className="mt-3 max-w-3xl font-display text-display-hero-mobile font-extrabold tracking-tight md:text-display-hero"
            highlight="Questions"
            highlightClassName="text-clinical-cyan-glow"
          />
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-2xl font-body text-body-lg text-surface-variant/90">
              Everything procurement teams, distributors, and clinicians ask us most — about quality,
              ordering, OEM, and shipping.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Groups */}
      <section className="bg-surface">
        <div className="container-pad flex flex-col gap-space-2xl py-space-2xl">
          {faqGroups.map((group) => (
            <div key={group.category} className="grid gap-space-lg lg:grid-cols-[280px_1fr]">
              <Reveal>
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-spec-code-bg">
                    <Icon name={group.icon} className="text-primary text-[26px]" />
                  </span>
                  <h2 className="mt-3 font-display text-headline-md font-bold text-cleanroom-navy">
                    {group.category}
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <FaqAccordion items={group.items} />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface pb-space-3xl">
        <div className="container-pad">
          <Reveal className="relative overflow-hidden rounded-2xl bg-cleanroom-navy p-space-xl text-center text-white shadow-level-3 md:p-space-2xl">
            <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-64 w-64 rounded-full bg-clinical-cyan-glow/15 blur-3xl" />
            <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-space-md">
              <h2 className="font-display text-headline-md font-bold md:text-headline-lg">
                Still have a question?
              </h2>
              <p className="font-body text-body-md text-surface-variant/90">
                Our biomedical sales team responds to institutional inquiries within 24 business hours.
              </p>
              <Link href="/contact" className="btn-primary">
                <Icon name="support_agent" className="text-[18px]" />
                Contact Our Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
