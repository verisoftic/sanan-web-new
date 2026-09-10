"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { SpecModal } from "./SpecModal";
import { Icon } from "./Icon";
import { categories, products, type Product, type ProductCategory } from "@/lib/products";

export function ProductExplorer({
  withSearch = false,
  useCatalogImage = false,
}: {
  withSearch?: boolean;
  useCatalogImage?: boolean;
}) {
  const [active, setActive] = useState<"all" | ProductCategory>("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = active === "all" || p.category === active;
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.iso.toLowerCase().includes(q) ||
        p.features.some((f) => f.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
  }, [active, query]);

  const countFor = (id: "all" | ProductCategory) =>
    id === "all" ? products.length : products.filter((p) => p.category === id).length;

  return (
    <div className="flex flex-col gap-space-lg">
      {withSearch && (
        <div className="relative">
          <Icon
            name="search"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by device name, ISO, or gauge / volume…"
            className="h-12 w-full rounded-lg border border-spec-border bg-white pl-12 pr-4 font-body text-body-md text-cleanroom-navy shadow-sm outline-none transition-all placeholder:text-on-surface-variant/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>
      )}

      {/* Filter pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map((c) => {
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`relative h-9 shrink-0 whitespace-nowrap rounded-full px-4 font-heading text-subheading uppercase tracking-wider transition-colors ${
                isActive ? "text-white" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-primary shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {c.label} <span className="opacity-70">({countFor(c.id)})</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <LayoutGroup>
        <motion.div layout className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProductCard
                key={p.slug}
                product={p}
                onOpenSpec={setSelected}
                useCatalogImage={useCatalogImage}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-spec-border py-space-2xl text-center">
          <Icon name="search_off" className="text-on-surface-variant text-[32px]" />
          <p className="font-body text-body-md text-on-surface-variant">
            No devices match “{query}”.
          </p>
        </div>
      )}

      <SpecModal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
