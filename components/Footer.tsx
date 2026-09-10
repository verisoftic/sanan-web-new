import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { nav, site } from "@/lib/site";
import { Reveal } from "./motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cleanroom-navy text-white">
      <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-clinical-cyan-glow/10 blur-3xl" />

      <div className="container-pad relative z-10 py-space-2xl">
        <div className="grid gap-space-xl md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <Reveal className="lg:col-span-2 max-w-md" direction="up">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 backdrop-blur">
                <Icon name="vaccines" className="text-clinical-cyan-glow text-[22px]" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-headline-sm font-bold text-white">SANAN</span>
                <span className="font-body text-label-caps uppercase tracking-[0.12em] text-clinical-cyan-glow mt-0.5">
                  Manufacturing SMC — Pvt Ltd
                </span>
              </div>
            </div>
            <p className="font-body text-body-md text-surface-variant/90">
              Precision-manufactured medical devices — syringes, IV systems, and blood transfusion
              solutions trusted for uncompromised clinical safety.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="spec-pill bg-white/10 text-primary-fixed">ISO 13485:2016</span>
              <span className="spec-pill bg-white/10 text-primary-fixed">GMP Certified</span>
              <span className="spec-pill bg-white/10 text-primary-fixed">Class 10,000</span>
            </div>
          </Reveal>

          {/* Navigation */}
          <Reveal direction="up" delay={0.1}>
            <h3 className="mb-4 font-heading text-subheading uppercase tracking-wider text-clinical-cyan-glow">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 font-body text-body-md text-surface-variant/90 transition-colors hover:text-white"
                  >
                    <span className="h-px w-3 bg-clinical-cyan-glow/60 transition-all duration-300 group-hover:w-5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal direction="up" delay={0.2}>
            <h3 className="mb-4 font-heading text-subheading uppercase tracking-wider text-clinical-cyan-glow">
              Contact
            </h3>
            <ul className="flex flex-col gap-4 font-body text-body-sm text-surface-variant/90">
              <li className="flex items-start gap-2.5">
                <Icon name="pin_drop" className="mt-0.5 text-clinical-cyan-glow text-[18px]" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="call" className="text-clinical-cyan-glow text-[18px]" />
                <a href={site.phoneHref} className="font-mono hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="mail" className="text-clinical-cyan-glow text-[18px]" />
                <a href={`mailto:${site.email}`} className="font-mono hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-space-xl flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-mono text-spec-mono text-surface-variant/70">
            © 2026 {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-spec-mono text-surface-variant/70">
            Precision • Sterility • Reliability
          </p>
        </div>
      </div>
    </footer>
  );
}
