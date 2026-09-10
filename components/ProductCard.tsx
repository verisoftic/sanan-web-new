"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "./Icon";
import type { Product } from "@/lib/products";

export function ProductCard({
  product,
  useCatalogImage = false,
}: {
  product: Product;
  useCatalogImage?: boolean;
}) {
  const href = `/products/${product.slug}`;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-cleanroom-navy/[0.06] bg-sterile-surface shadow-level-1 transition-shadow duration-300 hover:shadow-level-2"
    >
      {/* Visual aperture */}
      <Link
        href={href}
        className="relative flex h-56 w-full items-center justify-center overflow-hidden bg-surface-container-low p-6"
      >
        <Image
          src={useCatalogImage ? product.catalogImage : product.image}
          alt={`${product.name} — ${product.tagline}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
        <div className="iso-badge absolute left-3 top-3">
          <Icon name="verified" className="text-primary text-[14px]" filled />
          {product.iso}
        </div>
        <div className="absolute right-3 top-3 rounded bg-spec-code-bg px-2 py-0.5 font-mono text-spec-mono text-tertiary">
          {product.sterileTag}
        </div>
      </Link>

      {/* Spec block */}
      <div className="flex flex-1 flex-col gap-space-sm p-space-md">
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-2">
            <Link href={href}>
              <h3 className="font-heading text-headline-sm font-bold text-cleanroom-navy transition-colors group-hover:text-primary">
                {product.name}
              </h3>
            </Link>
            <span className="shrink-0 font-mono text-spec-mono font-semibold text-primary">
              {product.range}
            </span>
          </div>
          <span className="font-heading text-subheading font-semibold uppercase tracking-wider text-primary">
            {product.tagline}
          </span>
        </div>

        <p className="font-body text-body-sm text-on-surface-variant">{product.description}</p>

        {/* Embedded spec matrix */}
        <div className="flex flex-col gap-1.5 rounded-lg bg-surface-container-low p-space-sm">
          {product.specs.map((s) => (
            <div key={s.label} className="flex items-center justify-between gap-3">
              <span className="font-body text-label-caps uppercase text-on-surface-variant">
                {s.label}
              </span>
              <span className="text-right font-mono text-spec-mono font-medium text-cleanroom-navy">
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {product.features.map((f) => (
            <span key={f} className="spec-pill">
              {f}
            </span>
          ))}
        </div>

        {/* Footer actions */}
        <div className="mt-auto flex items-center justify-between pt-3">
          <Link
            href={href}
            className="group/link inline-flex items-center gap-1 font-heading text-subheading uppercase tracking-wider text-primary transition-all hover:gap-2"
          >
            View Details
            <Icon
              name="arrow_forward"
              className="text-[16px] transition-transform group-hover/link:translate-x-1"
            />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-9 items-center gap-1 rounded bg-primary-container px-3 font-body text-label-caps uppercase text-white transition-colors hover:bg-primary"
          >
            <Icon name="request_quote" className="text-[14px]" />
            Quote
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
