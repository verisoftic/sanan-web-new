"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Icon } from "./Icon";
import type { Product } from "@/lib/products";

const universalSpecs = [
  { label: "Sterilization Method", value: "100% Ethylene Oxide (EO)" },
  { label: "Biocompatibility", value: "ISO 10993 Evaluated" },
  { label: "Shelf Life", value: "5 Years Guaranteed" },
  { label: "Primary Packaging", value: "Medical Grade Tyvek Blister" },
];

export function SpecModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-cleanroom-navy/70 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${product.name} specification`}
            className="relative flex w-full max-w-md flex-col gap-space-md rounded-xl bg-sterile-surface p-space-lg shadow-level-3"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-spec-code-bg">
                  <Icon name="description" className="text-primary text-[20px]" />
                </span>
                <div>
                  <h4 className="font-heading text-headline-sm font-bold text-cleanroom-navy">
                    {product.name}
                  </h4>
                  <span className="font-mono text-spec-mono text-primary">{product.iso}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-full bg-surface-container text-cleanroom-navy transition-colors hover:bg-surface-container-highest"
                aria-label="Close"
              >
                <Icon name="close" className="text-[18px]" />
              </button>
            </div>

            <div className="flex flex-col gap-2 rounded-lg bg-surface-container-low p-space-md">
              {universalSpecs.map((s) => (
                <div key={s.label} className="flex items-center justify-between gap-3">
                  <span className="font-body text-label-caps uppercase text-on-surface-variant">
                    {s.label}
                  </span>
                  <span className="font-mono text-spec-mono font-semibold text-cleanroom-navy">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {product.features.map((f) => (
                <span key={f} className="spec-pill">
                  {f}
                </span>
              ))}
            </div>

            <Link href="/contact" onClick={onClose} className="btn-primary w-full">
              <Icon name="verified" className="text-[16px]" />
              Request Batch Certificate
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
