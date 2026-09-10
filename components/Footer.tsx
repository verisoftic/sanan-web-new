import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { nav, offices, site, socials } from "@/lib/site";
import { Reveal } from "./motion";

function SocialGlyph({ name }: { name: string }) {
  const common = "h-4 w-4";
  if (name === "linkedin")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9V9Z" />
      </svg>
    );
  if (name === "facebook")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
      </svg>
    );
  if (name === "instagram")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
        <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.81-.32 1.71C3.21 8.5 3.2 8.85 3.2 12s.01 3.5.07 4.74c.04.9.19 1.38.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.71a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.33-.13-.81-.28-1.71-.32C15.5 4.01 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-2.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
      </svg>
    );
  return null;
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cleanroom-navy text-white">
      <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-clinical-cyan-glow/10 blur-3xl" />

      <div className="container-pad relative z-10 py-space-2xl">
        <div className="grid gap-space-xl md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <Reveal className="lg:col-span-2 max-w-md" direction="up">
            <div className="relative mb-4 h-10 w-[150px]">
              <Image
                src="/images/logo/smlogo-wt.svg"
                alt="Sanan Manufacturing"
                fill
                sizes="150px"
                className="object-contain object-left"
              />
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
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-surface-variant transition-colors hover:bg-clinical-cyan-glow hover:text-cleanroom-navy"
                >
                  <SocialGlyph name={s.icon} />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Navigation */}
          <Reveal direction="up" delay={0.1}>
            <h3 className="mb-4 font-heading text-subheading uppercase tracking-wider text-clinical-cyan-glow">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
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

          {/* Contact / offices */}
          <Reveal direction="up" delay={0.2}>
            <h3 className="mb-4 font-heading text-subheading uppercase tracking-wider text-clinical-cyan-glow">
              Contact
            </h3>
            <ul className="flex flex-col gap-4 font-body text-body-sm text-surface-variant/90">
              <li className="flex items-start gap-2.5">
                <Icon name="factory" className="mt-0.5 text-clinical-cyan-glow text-[18px]" />
                <span>
                  <span className="block font-semibold text-white">{offices.factory.label}</span>
                  {offices.factory.lines.join(", ")}
                </span>
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
