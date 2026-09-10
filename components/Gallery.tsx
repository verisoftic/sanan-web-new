"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";

export interface GalleryItem {
  src: string;
  caption: string;
  tag: string;
}

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 gap-space-sm sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.button
            key={item.src + i}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative overflow-hidden rounded-xl border border-cleanroom-navy/[0.06] bg-surface-container-low shadow-level-1 ${
              i % 5 === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <div className={`relative w-full ${i % 5 === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cleanroom-navy/85 via-cleanroom-navy/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-3 bottom-3 translate-y-2 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-body text-label-caps uppercase tracking-wider text-clinical-cyan-glow">
                  {item.tag}
                </span>
                <p className="font-heading text-body-sm font-semibold text-white">{item.caption}</p>
              </div>
              <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Icon name="zoom_in" className="text-[18px]" />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-cleanroom-navy/90 backdrop-blur-md" onClick={close} />
            <button
              onClick={close}
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <Icon name="close" className="text-[24px]" />
            </button>
            <button
              onClick={prev}
              className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-8"
              aria-label="Previous"
            >
              <Icon name="chevron_left" className="text-[26px]" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8"
              aria-label="Next"
            >
              <Icon name="chevron_right" className="text-[26px]" />
            </button>

            <motion.figure
              key={active}
              className="relative z-[1] w-full max-w-4xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={items[active].src}
                  alt={items[active].caption}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center">
                <span className="font-body text-label-caps uppercase tracking-wider text-clinical-cyan-glow">
                  {items[active].tag}
                </span>
                <p className="font-heading text-headline-sm font-semibold text-white">
                  {items[active].caption}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
