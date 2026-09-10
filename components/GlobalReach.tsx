"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";
import { StatCounter } from "./StatCounter";
import { AnimatedHeading, Reveal, Stagger, StaggerItem } from "./motion";
import { company, regions } from "@/lib/site";

// Node positions (relative %) on the stylized globe.
const nodes = [
  { x: 30, y: 40 },
  { x: 46, y: 30 },
  { x: 58, y: 45 },
  { x: 68, y: 34 },
  { x: 40, y: 58 },
  { x: 62, y: 62 },
  { x: 74, y: 52 },
];

export function GlobalReach() {
  return (
    <section className="relative overflow-hidden bg-cleanroom-navy text-white">
      <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-16 top-0 h-80 w-80 rounded-full bg-clinical-cyan-glow/10 blur-3xl" />
      <div className="container-pad relative z-10 grid items-center gap-space-xl py-space-2xl md:py-space-3xl lg:grid-cols-2">
        {/* Copy */}
        <div className="flex flex-col gap-space-md">
          <Reveal>
            <span className="eyebrow text-clinical-cyan-glow">
              <Icon name="public" className="text-[18px]" />
              Global Footprint
            </span>
          </Reveal>
          <AnimatedHeading
            text={`Trusted Across ${company.countriesServed}+ Countries`}
            as="h2"
            className="font-display text-headline-lg-mobile font-bold md:text-headline-lg"
            highlight={`${company.countriesServed}+`}
            highlightClassName="text-clinical-cyan-glow"
          />
          <Reveal delay={0.15}>
            <p className="max-w-xl font-body text-body-lg text-surface-variant/90">
              From regional blood banks to national procurement tenders, Sanan devices reach
              healthcare providers across four continents.
            </p>
          </Reveal>

          <Stagger className="mt-2 flex flex-wrap gap-2" stagger={0.08}>
            {regions.map((r) => (
              <StaggerItem
                key={r.name}
                className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-clinical-cyan-glow" />
                <span className="font-body text-body-sm text-surface-variant/90">{r.name}</span>
                <span className="font-mono text-spec-mono text-clinical-cyan-glow">{r.countries}</span>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <div className="mt-2 flex gap-space-lg">
              <div>
                <span className="block font-display text-display-hero-mobile font-extrabold leading-none text-clinical-cyan-glow">
                  <StatCounter value={company.countriesServed} suffix="+" />
                </span>
                <span className="mt-1 block font-body text-label-caps uppercase text-surface-variant/80">
                  Countries Served
                </span>
              </div>
              <div>
                <span className="block font-display text-display-hero-mobile font-extrabold leading-none text-clinical-cyan-glow">
                  <StatCounter value={company.annualCapacity} suffix="M+" />
                </span>
                <span className="mt-1 block font-body text-label-caps uppercase text-surface-variant/80">
                  Units / Year
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stylized network globe */}
        <Reveal direction="left" className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <svg viewBox="0 0 400 400" className="h-full w-full" fill="none" aria-hidden="true">
              <defs>
                <radialGradient id="globe-grad" cx="0.4" cy="0.35" r="0.75">
                  <stop offset="0" stopColor="#0e2a44" />
                  <stop offset="1" stopColor="#081426" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="160" fill="url(#globe-grad)" stroke="rgba(64,181,173,0.25)" strokeWidth="1.5" />
              {/* Longitude / latitude arcs */}
              {[0.35, 0.6, 0.85].map((k, i) => (
                <ellipse key={`lat-${i}`} cx="200" cy="200" rx="160" ry={160 * k} fill="none" stroke="rgba(64,181,173,0.15)" strokeWidth="1" />
              ))}
              {[0.35, 0.6, 0.85].map((k, i) => (
                <ellipse key={`lon-${i}`} cx="200" cy="200" rx={160 * k} ry="160" fill="none" stroke="rgba(64,181,173,0.12)" strokeWidth="1" />
              ))}
              <line x1="40" y1="200" x2="360" y2="200" stroke="rgba(64,181,173,0.18)" strokeWidth="1" />
              <line x1="200" y1="40" x2="200" y2="360" stroke="rgba(64,181,173,0.12)" strokeWidth="1" />

              {/* Connection arcs between nodes */}
              {nodes.map((n, i) => {
                if (i === 0) return null;
                const a = nodes[0];
                return (
                  <motion.line
                    key={`arc-${i}`}
                    x1={(a.x / 100) * 400}
                    y1={(a.y / 100) * 400}
                    x2={(n.x / 100) * 400}
                    y2={(n.y / 100) * 400}
                    stroke="rgba(125,239,255,0.35)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                  />
                );
              })}

              {/* Pulsing nodes */}
              {nodes.map((n, i) => (
                <g key={`node-${i}`}>
                  <circle cx={(n.x / 100) * 400} cy={(n.y / 100) * 400} r="4" fill="#7defff" />
                  <circle cx={(n.x / 100) * 400} cy={(n.y / 100) * 400} r="4" fill="none" stroke="#7defff" strokeWidth="1.5" className="ecg-base" style={{ transformOrigin: "center" }}>
                    <animate attributeName="r" values="4;14;4" dur="2.8s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="2.8s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
