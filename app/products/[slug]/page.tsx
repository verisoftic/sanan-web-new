import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { ProductCard } from "@/components/ProductCard";
import { EcgBackground } from "@/components/EcgBackground";
import { AnimatedHeading, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { getProduct, products, relatedProducts } from "@/lib/products";
import { certifications } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cleanroom-navy text-white">
        <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-clinical-cyan-glow/15 blur-3xl" />
        <EcgBackground className="opacity-[0.22]" />
        <div className="container-pad relative z-10 pt-28 md:pt-36">
          {/* Breadcrumb */}
          <Reveal>
            <nav className="mb-space-md flex items-center gap-1.5 font-body text-body-sm text-surface-variant/80">
              <Link href="/" className="hover:text-white">Home</Link>
              <Icon name="chevron_right" className="text-[16px]" />
              <Link href="/products" className="hover:text-white">Products</Link>
              <Icon name="chevron_right" className="text-[16px]" />
              <span className="text-white">{product.name}</span>
            </nav>
          </Reveal>

          <div className="grid items-center gap-space-xl pb-space-2xl lg:grid-cols-2">
            {/* Image */}
            <Reveal direction="right" className="order-1 lg:order-none">
              <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-8 shadow-level-3 md:h-[26rem]">
                <Image
                  src={product.image}
                  alt={`${product.name} — ${product.tagline}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-6"
                />
                <div className="iso-badge absolute left-4 top-4">
                  <Icon name="verified" className="text-primary text-[14px]" filled />
                  {product.iso}
                </div>
              </div>
            </Reveal>

            {/* Copy */}
            <div className="flex flex-col gap-space-md">
              <Reveal>
                <span className="eyebrow text-clinical-cyan-glow">
                  <Icon name="category" className="text-[18px]" />
                  {product.categoryLabel}
                </span>
              </Reveal>
              <AnimatedHeading
                text={product.name}
                as="h1"
                className="font-display text-display-hero-mobile font-extrabold tracking-tight md:text-[44px] md:leading-tight"
              />
              <Reveal delay={0.1}>
                <span className="font-heading text-headline-sm font-semibold text-clinical-cyan-glow">
                  {product.tagline}
                </span>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="max-w-xl font-body text-body-lg text-surface-variant/90">
                  {product.longDescription}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-spec-mono text-primary-fixed">
                    {product.range}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-spec-mono text-primary-fixed">
                    {product.sterileTag}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="flex flex-wrap items-center gap-space-sm pt-1">
                  <Link href="/contact" className="btn-primary">
                    <Icon name="request_quote" className="text-[18px]" />
                    Request Quote
                  </Link>
                  <a href={product.datasheet} download className="btn-on-dark">
                    <Icon name="download" className="text-[18px]" />
                    Download Datasheet
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Specs + variants */}
      <section className="bg-surface">
        <div className="container-pad grid gap-space-xl py-space-2xl lg:grid-cols-[1.2fr_1fr]">
          {/* Specs table */}
          <Reveal>
            <h2 className="mb-space-md font-display text-headline-md font-bold text-cleanroom-navy">
              Technical Specifications
            </h2>
            <div className="overflow-hidden rounded-xl border border-spec-border">
              {product.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center justify-between gap-4 px-space-md py-3.5 ${
                    i % 2 === 0 ? "bg-white" : "bg-surface-container-low"
                  }`}
                >
                  <span className="font-body text-label-caps uppercase tracking-wider text-on-surface-variant">
                    {s.label}
                  </span>
                  <span className="text-right font-mono text-spec-mono font-medium text-cleanroom-navy">
                    {s.value}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 bg-white px-space-md py-3.5">
                <span className="font-body text-label-caps uppercase tracking-wider text-on-surface-variant">
                  Sterilization
                </span>
                <span className="font-mono text-spec-mono font-medium text-cleanroom-navy">
                  100% Ethylene Oxide (EO)
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 bg-surface-container-low px-space-md py-3.5">
                <span className="font-body text-label-caps uppercase tracking-wider text-on-surface-variant">
                  Shelf Life
                </span>
                <span className="font-mono text-spec-mono font-medium text-cleanroom-navy">
                  5 Years Guaranteed
                </span>
              </div>
            </div>

            {/* Key features */}
            <h3 className="mb-3 mt-space-lg font-heading text-headline-sm font-bold text-cleanroom-navy">
              Key Features
            </h3>
            <Stagger className="grid grid-cols-1 gap-2 sm:grid-cols-2" stagger={0.08}>
              {product.features.map((f) => (
                <StaggerItem
                  key={f}
                  className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-level-1"
                >
                  <Icon name="check_circle" className="text-primary text-[18px]" filled />
                  <span className="font-body text-body-sm text-cleanroom-navy">{f}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          {/* Variants + packaging + applications */}
          <div className="flex flex-col gap-space-lg">
            <Reveal>
              <h3 className="mb-3 font-heading text-headline-sm font-bold text-cleanroom-navy">
                Available Variants
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <span key={v} className="spec-pill">
                    {v}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h3 className="mb-3 font-heading text-headline-sm font-bold text-cleanroom-navy">
                Clinical Applications
              </h3>
              <ul className="flex flex-col gap-2">
                {product.applications.map((a) => (
                  <li key={a} className="flex items-center gap-2 font-body text-body-md text-on-surface-variant">
                    <Icon name="arrow_right" className="text-primary text-[18px]" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mb-3 font-heading text-headline-sm font-bold text-cleanroom-navy">
                Packaging
              </h3>
              <ul className="flex flex-col gap-2">
                {product.packaging.map((p) => (
                  <li key={p} className="flex items-center gap-2 font-body text-body-md text-on-surface-variant">
                    <Icon name="inventory_2" className="text-primary text-[18px]" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Compliance card */}
            <Reveal delay={0.15}>
              <div className="rounded-xl bg-spec-code-bg/60 p-space-md ring-1 ring-primary/10">
                <div className="mb-2 flex items-center gap-2">
                  <Icon name="verified_user" className="text-primary text-[20px]" filled />
                  <span className="font-heading text-subheading uppercase tracking-wider text-primary">
                    Compliance
                  </span>
                </div>
                <p className="font-body text-body-sm text-on-surface-variant">
                  Manufactured to {product.iso} under an ISO 13485 quality system, ISO 10993
                  biocompatibility evaluated, in a Class 10,000 cleanroom.
                </p>
                <a
                  href="/docs/product-catalog.pdf"
                  download
                  className="mt-3 inline-flex items-center gap-1.5 font-heading text-subheading uppercase tracking-wider text-primary hover:gap-2.5 transition-all"
                >
                  <Icon name="download" className="text-[16px]" />
                  Full Catalog
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-surface pb-space-xl">
        <div className="container-pad">
          <Stagger className="grid grid-cols-2 gap-space-sm rounded-2xl bg-cleanroom-navy p-space-lg md:grid-cols-3 lg:grid-cols-6" stagger={0.06}>
            {certifications.map((c) => (
              <StaggerItem key={c.code} className="flex flex-col items-center gap-1 text-center">
                <Icon name="verified" className="text-clinical-cyan-glow text-[22px]" filled />
                <span className="font-mono text-spec-mono font-bold text-white">{c.code}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-surface pb-space-2xl">
        <div className="container-pad">
          <div className="mb-space-lg flex items-end justify-between">
            <h2 className="font-display text-headline-md font-bold text-cleanroom-navy">
              Related Products
            </h2>
            <Link
              href="/products"
              className="link-underline hover:gap-2 transition-all"
            >
              All Products
              <Icon name="arrow_forward" className="text-[16px]" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface pb-space-3xl">
        <div className="container-pad">
          <Reveal className="relative overflow-hidden rounded-2xl bg-cleanroom-navy p-space-xl text-white shadow-level-3 md:p-space-2xl">
            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-clinical-cyan-glow/15 blur-3xl" />
            <div className="relative z-10 flex flex-col items-start gap-space-md md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-headline-md font-bold md:text-headline-lg">
                  Need {product.name} for your institution?
                </h2>
                <p className="mt-2 font-body text-body-md text-surface-variant/90">
                  Request a formal quotation, bulk pricing, or a product evaluation sample.
                </p>
              </div>
              <Link href="/contact" className="btn-primary shrink-0">
                Request Quote
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
