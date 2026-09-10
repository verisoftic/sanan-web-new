"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";
import { StatCounter } from "./StatCounter";
import { AnimatedHeading, Reveal, Stagger, StaggerItem } from "./motion";
import { company, pakistanCities, pakistanPath, regions } from "@/lib/site";

const hub = pakistanCities.find((c) => c.hub) ?? pakistanCities[0];
// Vertical + horizontal graticule lines clipped to the country shape.
const vLines = Array.from({ length: 9 }, (_, i) => 40 + i * 64); // x positions
const hLines = Array.from({ length: 8 }, (_, i) => 30 + i * 66); // y positions

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
              <Icon name="location_on" className="text-[18px]" filled />
              Nationwide Footprint
            </span>
          </Reveal>
          <AnimatedHeading
            text="Trusted Across Pakistan"
            as="h2"
            className="font-display text-headline-lg-mobile font-bold md:text-headline-lg"
            highlight="Pakistan"
            highlightClassName="text-clinical-cyan-glow"
          />
          <Reveal delay={0.15}>
            <p className="max-w-xl font-body text-body-lg text-surface-variant/90">
              From tertiary-care hospitals in the major cities to district clinics and blood banks,
              Sanan devices are trusted by healthcare providers across every province of Pakistan.
            </p>
          </Reveal>

          <Stagger className="mt-2 flex flex-wrap gap-2" stagger={0.06}>
            {regions.map((r) => (
              <StaggerItem
                key={r.name}
                className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-clinical-cyan-glow" />
                <span className="font-body text-body-sm text-surface-variant/90">{r.name}</span>
                <span className="font-mono text-spec-mono text-clinical-cyan-glow">{r.cities}</span>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <div className="mt-2 flex flex-wrap gap-space-lg">
              <div>
                <span className="block font-display text-display-hero-mobile font-extrabold leading-none text-clinical-cyan-glow">
                  <StatCounter value={company.citiesServed} suffix="+" />
                </span>
                <span className="mt-1 block font-body text-label-caps uppercase text-surface-variant/80">
                  Cities Served
                </span>
              </div>
              <div>
                <span className="block font-display text-display-hero-mobile font-extrabold leading-none text-clinical-cyan-glow">
                  <StatCounter value={company.hospitals} suffix="+" />
                </span>
                <span className="mt-1 block font-body text-label-caps uppercase text-surface-variant/80">
                  Hospitals &amp; Clinics
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

        {/* Pakistan map with connected city nodes */}
        <Reveal direction="left" className="relative">
          <div className="relative mx-auto w-full max-w-lg">
            <svg viewBox="0 0 612 560" className="h-full w-full" fill="none" aria-hidden="true">
              <defs>
                <radialGradient id="pk-grad" cx="0.45" cy="0.3" r="0.8">
                  <stop offset="0" stopColor="#0e2a44" />
                  <stop offset="1" stopColor="#081426" />
                </radialGradient>
                <clipPath id="pk-clip">
                  <path d={pakistanPath} />
                </clipPath>
                <filter id="pk-glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Country fill */}
              <path d={pakistanPath} fill="url(#pk-grad)" />

              {/* Graticule clipped to country */}
              <g clipPath="url(#pk-clip)" stroke="rgba(64,181,173,0.16)" strokeWidth="1">
                {vLines.map((x) => (
                  <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="560" />
                ))}
                {hLines.map((y) => (
                  <line key={`h-${y}`} x1="0" y1={y} x2="612" y2={y} />
                ))}
              </g>

              {/* Country border */}
              <path
                d={pakistanPath}
                fill="none"
                stroke="rgba(64,181,173,0.5)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Spokes from the capital hub to each city */}
              {pakistanCities.map((c, i) =>
                c.hub ? null : (
                  <motion.line
                    key={`arc-${c.name}`}
                    x1={hub.x}
                    y1={hub.y}
                    x2={c.x}
                    y2={c.y}
                    stroke="rgba(125,239,255,0.35)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                  />
                )
              )}

              {/* City nodes */}
              {pakistanCities.map((c, i) => (
                <g key={`node-${c.name}`}>
                  {/* pulsing ring */}
                  <circle cx={c.x} cy={c.y} r={c.hub ? 6 : 4} fill="none" stroke="#7defff" strokeWidth="1.5">
                    <animate
                      attributeName="r"
                      values={c.hub ? "6;18;6" : "4;13;4"}
                      dur="2.8s"
                      begin={`${i * 0.28}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.85;0;0.85"
                      dur="2.8s"
                      begin={`${i * 0.28}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* core dot */}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={c.hub ? 5 : 3.5}
                    fill={c.hub ? "#7defff" : "#40B5AD"}
                    filter={c.hub ? "url(#pk-glow)" : undefined}
                  />
                  {/* label */}
                  <text
                    x={c.x + (c.dx ?? 8)}
                    y={c.y + (c.dy ?? 4)}
                    textAnchor={c.anchor ?? "start"}
                    className="font-mono"
                    fontSize={c.hub ? 13 : 11}
                    fontWeight={c.hub ? 700 : 500}
                    fill={c.hub ? "#eafcff" : "rgba(230,244,246,0.82)"}
                  >
                    {c.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
