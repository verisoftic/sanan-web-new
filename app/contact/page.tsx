import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { RfqForm } from "@/components/RfqForm";
import { AnimatedHeading, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Procurement",
  description:
    "Connect directly with Sanan's Gadoon cleanroom manufacturing plant engineering and sales team for government tenders, bulk hospital supply, and authorized distributor contracts.",
};

const auditProtocol = [
  { icon: "schedule", label: "Audit Window", value: "Mon – Sat · 08:00 – 17:00 PKT" },
  { icon: "checkroom", label: "Gowning Protocol", value: "Full Sterile Air Shower Pass" },
  { icon: "event_available", label: "Prior Notice", value: "5 Business Days" },
];

export default function ContactPage() {
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
              ISO 13485:2016 Certified Plant
            </span>
          </Reveal>
          <AnimatedHeading
            text="Direct Procurement & Institutional Inquiries"
            as="h1"
            className="mt-3 max-w-3xl font-display text-display-hero-mobile font-extrabold tracking-tight md:text-display-hero"
            highlight="Procurement"
            highlightClassName="text-clinical-cyan-glow"
          />
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-2xl font-body text-body-lg text-surface-variant/90">
              Connect directly with our Gadoon cleanroom manufacturing plant engineering and sales
              team for government tenders, bulk hospital supply, and authorized distributor
              contracts.
            </p>
          </Reveal>

          <Stagger className="mt-space-lg grid max-w-xl grid-cols-2 gap-space-sm" stagger={0.1}>
            <StaggerItem className="rounded-xl bg-white/5 p-space-md ring-1 ring-white/5">
              <span className="block font-mono text-spec-mono font-bold text-clinical-cyan-glow">
                Class 10,000
              </span>
              <span className="font-body text-label-caps uppercase text-surface-variant/80">
                Cleanroom Facilities
              </span>
            </StaggerItem>
            <StaggerItem className="rounded-xl bg-white/5 p-space-md ring-1 ring-white/5">
              <span className="block font-mono text-spec-mono font-bold text-clinical-cyan-glow">
                &lt; 24h Response
              </span>
              <span className="font-body text-label-caps uppercase text-surface-variant/80">
                Turnaround SLA
              </span>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Body: channels + form */}
      <section className="bg-surface">
        <div className="container-pad grid gap-space-xl py-space-2xl lg:grid-cols-[1fr_1.15fr]">
          {/* Left: channels */}
          <div className="flex flex-col gap-space-md">
            <Reveal>
              <span className="eyebrow text-primary">
                <Icon name="bolt" className="text-[18px]" />
                Immediate Action Channels
              </span>
            </Reveal>

            <Stagger className="flex flex-col gap-space-sm" stagger={0.08}>
              {/* Phone */}
              <StaggerItem className="flex items-center justify-between gap-3 rounded-xl border border-cleanroom-navy/[0.06] bg-sterile-surface p-space-md shadow-level-1">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-spec-code-bg">
                    <Icon name="call" className="text-primary text-[22px]" />
                  </span>
                  <div>
                    <span className="font-body text-label-caps uppercase text-on-surface-variant">
                      Direct Line & Urgent Procurement
                    </span>
                    <a
                      href={site.phoneHref}
                      className="block font-mono text-headline-sm font-bold text-cleanroom-navy hover:text-primary"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>
                <span className="rounded-full bg-status-sterile/15 px-2.5 py-1 font-body text-label-caps uppercase text-status-sterile">
                  24/7
                </span>
              </StaggerItem>

              {/* Two buttons */}
              <StaggerItem className="grid grid-cols-2 gap-space-sm">
                <a href={site.phoneHref} className="btn-primary h-12">
                  <Icon name="call" className="text-[18px]" />
                  Call Desk
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost h-12"
                >
                  <Icon name="chat" className="text-[18px]" />
                  WhatsApp
                </a>
              </StaggerItem>

              {/* Email */}
              <StaggerItem>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 rounded-xl border border-cleanroom-navy/[0.06] bg-sterile-surface p-space-md shadow-level-1 transition-all hover:-translate-y-0.5 hover:shadow-level-2"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-spec-code-bg">
                    <Icon name="mail" className="text-primary text-[22px]" />
                  </span>
                  <div>
                    <span className="font-body text-label-caps uppercase text-on-surface-variant">
                      Official Corporate Inquiries
                    </span>
                    <span className="block font-mono text-body-md font-semibold text-cleanroom-navy">
                      {site.email}
                    </span>
                  </div>
                </a>
              </StaggerItem>

              {/* Address */}
              <StaggerItem className="rounded-xl border border-cleanroom-navy/[0.06] bg-sterile-surface p-space-md shadow-level-1">
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-spec-code-bg">
                    <Icon name="pin_drop" className="text-primary text-[22px]" />
                  </span>
                  <div>
                    <span className="font-body text-label-caps uppercase text-on-surface-variant">
                      Manufacturing Campus
                    </span>
                    <p className="font-heading text-headline-sm font-bold text-cleanroom-navy">
                      {site.legalName}
                    </p>
                    <p className="font-body text-body-sm text-on-surface-variant">
                      {site.addressFull}
                    </p>
                  </div>
                </div>
                {/* Map */}
                <div className="relative mt-space-md overflow-hidden rounded-lg">
                  <Image
                    src="/images/contact-map.jpg"
                    alt="Map showing Sanan's manufacturing campus in Gadoon Amazai, Swabi"
                    width={800}
                    height={400}
                    className="h-44 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cleanroom-navy/70 to-transparent" />
                  <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded bg-cleanroom-navy/80 px-2.5 py-1.5 backdrop-blur">
                    <span className="font-mono text-spec-mono text-clinical-cyan-glow">
                      {site.coordinates}
                    </span>
                    <span className="rounded bg-status-sterile/20 px-1.5 py-0.5 font-body text-label-caps uppercase text-status-sterile">
                      Plant Operational
                    </span>
                  </div>
                </div>
              </StaggerItem>
            </Stagger>
          </div>

          {/* Right: form */}
          <Reveal direction="left">
            <RfqForm />
          </Reveal>
        </div>
      </section>

      {/* Audit protocol */}
      <section className="bg-surface pb-space-2xl">
        <div className="container-pad">
          <Reveal className="rounded-2xl border border-cleanroom-navy/[0.06] bg-sterile-surface p-space-lg shadow-level-1 md:p-space-xl">
            <div className="mb-space-md flex items-center gap-2">
              <Icon name="policy" className="text-primary text-[24px]" />
              <h2 className="font-heading text-headline-sm font-bold text-cleanroom-navy">
                Facility Audits & Visiting Protocol
              </h2>
            </div>
            <p className="mb-space-lg max-w-3xl font-body text-body-md text-on-surface-variant">
              {site.legalName} welcomes scheduled in-person GMP conformance audits, hospital
              pharmacist inspections, and third-party regulatory assessments of our Class 10,000
              cleanroom suite in Gadoon Amazai.
            </p>
            <Stagger className="grid grid-cols-1 gap-space-sm sm:grid-cols-3" stagger={0.1}>
              {auditProtocol.map((a) => (
                <StaggerItem
                  key={a.label}
                  className="flex items-center gap-3 rounded-xl bg-surface-container-low p-space-md"
                >
                  <Icon name={a.icon} className="text-primary text-[24px]" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-body text-label-caps uppercase text-on-surface-variant">
                      {a.label}
                    </span>
                    <span className="font-mono text-spec-mono font-semibold text-cleanroom-navy">
                      {a.value}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </section>

      {/* Sanitary guarantee band */}
      <section className="bg-surface pb-space-3xl">
        <div className="container-pad">
          <Reveal className="flex items-center justify-center gap-3 rounded-2xl bg-cleanroom-navy px-space-lg py-space-md text-center">
            <Icon name="health_and_safety" className="text-clinical-cyan-glow text-[24px]" filled />
            <p className="font-heading text-subheading uppercase tracking-wider text-white">
              Sanitary Shield Guarantee ·{" "}
              <span className="text-clinical-cyan-glow">
                100% Non-Pyrogenic, Non-Toxic &amp; Ethylene Oxide Sterilized
              </span>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
