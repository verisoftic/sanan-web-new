"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "./Icon";
import { EcgBackground } from "./EcgBackground";

const EASE = [0.22, 1, 0.36, 1] as const;

const slides = [
  {
    src: "/images/hero-cleanroom.jpg",
    unit: "Sanan Automated Unit #04",
    tag: "99.998% Sterile Yield",
  },
  {
    src: "/images/facility-panorama.jpg",
    unit: "Gadoon Cleanroom · Swabi",
    tag: "ISO Class 10,000",
  },
  {
    src: "/images/cat-syringes.jpg",
    unit: "Nova Syringe Line",
    tag: "Laser-Etched Barrels",
  },
  {
    src: "/images/cat-blood-bags.jpg",
    unit: "Blood Management Systems",
    tag: "CPDA-1 Validated",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.15 + i * 0.12 },
  }),
};

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, [reduce]);

  const slide = slides[index];

  return (
    <section className="relative overflow-hidden bg-cleanroom-navy text-white">
      {/* Ambient cleanroom glow */}
      <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden="true" />
      {/* Dim animated ECG heartbeat */}
      <EcgBackground className="opacity-[0.22]" />
      <motion.div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-clinical-cyan-glow/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-primary-container/25 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-pad relative z-10 grid items-center gap-space-xl py-space-2xl md:py-space-3xl lg:grid-cols-2">
        {/* Copy */}
        <div className="flex flex-col gap-space-md">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clinical-cyan-glow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-clinical-cyan-glow" />
            </span>
            <span className="font-mono text-spec-mono uppercase tracking-wider text-primary-fixed">
              ISO 13485 &amp; GMP Certified
            </span>
          </motion.div>

          <motion.span
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-body text-label-caps uppercase tracking-[0.16em] text-clinical-cyan-glow"
          >
            Medical Device Manufacturing
          </motion.span>

          <h1 className="font-display text-display-hero-mobile font-extrabold tracking-tight md:text-[56px] md:leading-[1.05]">
            <motion.span custom={2} variants={fadeUp} initial="hidden" animate="show" className="block">
              Medical Precision.
            </motion.span>
            <motion.span
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="block bg-gradient-to-r from-white via-primary-fixed to-clinical-cyan-glow bg-clip-text text-transparent"
            >
              Engineered for Care.
            </motion.span>
          </h1>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-xl font-body text-body-lg text-surface-variant/90"
          >
            Precision-engineered syringes, IV systems, and blood transfusion devices — built for
            global clinical trust.
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-space-sm pt-2"
          >
            <Link href="/products" className="btn-primary">
              Explore Products
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
            <Link href="/contact" className="btn-on-dark">
              Bulk RFQ
              <Icon name="request_quote" className="text-[18px]" />
            </Link>
          </motion.div>
        </div>

        {/* Visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          className="relative"
        >
          <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 shadow-level-3 md:h-[26rem]">
            <AnimatePresence mode="sync">
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: EASE }}
              >
                <Image
                  src={slide.src}
                  alt={slide.unit}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-cleanroom-navy via-cleanroom-navy/30 to-transparent" />

            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`label-${index}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <Icon name="precision_manufacturing" className="text-clinical-cyan-glow text-[20px]" />
                  <span className="font-mono text-spec-mono text-white">{slide.unit}</span>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`tag-${index}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="rounded bg-status-sterile/20 px-2 py-0.5 font-body text-label-caps uppercase text-status-sterile"
                >
                  {slide.tag}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Slide indicators */}
            <div className="absolute right-4 top-4 flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-clinical-cyan-glow" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Floating spec chip */}
          <motion.div
            className="absolute -left-4 top-8 hidden rounded-lg border border-primary/20 bg-white/95 px-3 py-2 shadow-level-2 backdrop-blur md:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2">
              <Icon name="target" className="text-primary text-[18px]" />
              <div className="flex flex-col leading-none">
                <span className="font-mono text-spec-mono font-bold text-cleanroom-navy">±0.02mm</span>
                <span className="font-body text-label-caps uppercase text-on-surface-variant">
                  Tolerance
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
