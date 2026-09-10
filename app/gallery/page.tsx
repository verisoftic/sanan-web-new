import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Gallery, type GalleryItem } from "@/components/Gallery";
import { EcgBackground } from "@/components/EcgBackground";
import { AnimatedHeading, Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside Sanan's Class 10,000 cleanroom facility and precision-engineered medical device range.",
};

const items: GalleryItem[] = [
  { src: "/images/facility-panorama.jpg", caption: "Cleanroom Production Floor", tag: "Facility" },
  { src: "/images/hero-cleanroom.jpg", caption: "Automated Assembly Line", tag: "Facility" },
  { src: "/images/cat-syringes.jpg", caption: "Nova Syringes", tag: "Product" },
  { src: "/images/cat-iv-kits.jpg", caption: "Nova IV Kits", tag: "Product" },
  { src: "/images/cat-drips.jpg", caption: "Nova Drips", tag: "Product" },
  { src: "/images/cat-cannula.jpg", caption: "Nova Cannula", tag: "Product" },
  { src: "/images/cat-blood-bags.jpg", caption: "Nova Blood Bags", tag: "Product" },
  { src: "/images/cat-blood-bag-kits.jpg", caption: "Nova Blood Bag Kits", tag: "Product" },
  { src: "/images/syringes.jpg", caption: "Precision Syringe Detail", tag: "Detail" },
  { src: "/images/cannula.jpg", caption: "Tri-Bevel Cannula Detail", tag: "Detail" },
  { src: "/images/blood-bags.jpg", caption: "CPDA-1 Blood Bags", tag: "Detail" },
  { src: "/images/iv-kits.jpg", caption: "IV Administration Set", tag: "Detail" },
];

export default function GalleryPage() {
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
              <Icon name="photo_library" className="text-[18px]" />
              Facility & Products
            </span>
          </Reveal>
          <AnimatedHeading
            text="Inside Sanan Manufacturing"
            as="h1"
            className="mt-3 font-display text-display-hero-mobile font-extrabold tracking-tight md:text-display-hero"
            highlight="Sanan"
            highlightClassName="text-clinical-cyan-glow"
          />
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-2xl font-body text-body-lg text-surface-variant/90">
              A closer look at our Class 10,000 cleanroom, automated production lines, and the
              precision devices that leave our plant.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-surface">
        <div className="container-pad py-space-2xl">
          <Gallery items={items} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface pb-space-3xl">
        <div className="container-pad">
          <Reveal className="flex flex-col items-center gap-3 rounded-2xl bg-cleanroom-navy px-space-lg py-space-xl text-center text-white">
            <h2 className="font-display text-headline-md font-bold">Want to visit our facility?</h2>
            <p className="max-w-xl font-body text-body-md text-surface-variant/90">
              We welcome scheduled GMP conformance audits and buyer inspections of our cleanroom
              suite in Gadoon Amazai.
            </p>
            <Link href="/contact" className="btn-primary mt-1">
              <Icon name="event" className="text-[18px]" />
              Schedule a Visit
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
