export type ProductCategory = "syringes" | "infusion" | "blood";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  categoryLabel: string;
  iso: string;
  sterileTag: string;
  range: string;
  image: string;
  catalogImage: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  // Detail-page fields (DUMMY data — replace before launch)
  longDescription: string;
  variants: string[];
  applications: string[];
  packaging: string[];
  datasheet: string;
}

export const products: Product[] = [
  {
    slug: "nova-syringes",
    name: "Nova Syringes",
    tagline: "Precision. Every dose.",
    category: "syringes",
    categoryLabel: "Syringes",
    iso: "ISO 7886-1",
    sterileTag: "EO Sterile",
    range: "1ml – 20ml",
    image: "/images/syringes.jpg",
    catalogImage: "/images/cat-syringes.jpg",
    description:
      "Sterile, single-use syringes engineered for accurate, comfortable dosing across clinical and surgical environments with zero back-leakage.",
    specs: [
      { label: "Dead Space", value: "≤ 0.015 ml (Ultra-Low)" },
      { label: "Barrel Metric", value: "Laser Indelible Etch" },
      { label: "Plunger Stroke", value: "Medical Silicone Coated" },
    ],
    features: ["Sterile & Single-Use", "Low Dead-Space", "Luer Lock & Slip"],
    longDescription:
      "Nova Syringes are manufactured from medical-grade virgin polypropylene under Class 10,000 cleanroom conditions. An ultra-low dead-space plunger and silicone-lubricated barrel deliver accurate, comfortable dosing with virtually zero back-leakage. Laser-etched indelible graduations remain legible through the full shelf life, and every barrel is optically inspected before ethylene-oxide sterilization.",
    variants: ["1 ml", "3 ml", "5 ml", "10 ml", "20 ml", "Luer Slip", "Luer Lock", "Auto-Destruct (AD)"],
    applications: ["General clinical dosing", "Surgical & anesthesia", "Vaccination programs", "Insulin & fixed-dose"],
    packaging: ["Individual Tyvek blister", "Inner box of 100", "Master carton of 1,600"],
    datasheet: "/docs/datasheet-nova-syringes.pdf",
  },
  {
    slug: "nova-iv-kits",
    name: "Nova IV Kits",
    tagline: "Reliable IV administration.",
    category: "infusion",
    categoryLabel: "Infusion & IV",
    iso: "ISO 8536-4",
    sterileTag: "Sterile Fluid Path",
    range: "Gravity Infusion",
    image: "/images/iv-kits.jpg",
    catalogImage: "/images/cat-iv-kits.jpg",
    description:
      "Complete intravenous administration sets built for a secure, uninterrupted fluid path with ultra-smooth flow regulation.",
    specs: [
      { label: "Tubing Length", value: "150 cm / 180 cm Kink-Proof" },
      { label: "Connector", value: "Universal Male Luer Lock" },
      { label: "Filter Membrane", value: "15μm Hydrophobic Screen" },
    ],
    features: ["Kink-Resistant Tubing", "Air-Vented Spike", "Smooth Roller Clamp"],
    longDescription:
      "Nova IV Administration Kits provide a secure, uninterrupted fluid path from container to patient. The kink-resistant PVC tubing, air-vented piercing spike, and smooth roller clamp give clinicians precise, repeatable flow control, while the 15µm hydrophobic filter protects against particulate and air ingress. Latex-free injection sites and universal Luer-lock connectors ensure compatibility across hospital infusion systems.",
    variants: ["150 cm", "180 cm", "With Y-site", "Vented / Non-vented", "DEHP-free option"],
    applications: ["Gravity infusion", "Fluid & electrolyte therapy", "Medication delivery", "Ward & OT use"],
    packaging: ["Individual sterile pouch", "Inner box of 25", "Master carton of 400"],
    datasheet: "/docs/datasheet-nova-iv-kits.pdf",
  },
  {
    slug: "nova-drips",
    name: "Nova Drips",
    tagline: "Controlled fluid delivery.",
    category: "infusion",
    categoryLabel: "Infusion & IV",
    iso: "ISO Certified",
    sterileTag: "DEHP-Free",
    range: "20 & 60 Drops/ml",
    image: "/images/drips.jpg",
    catalogImage: "/images/cat-drips.jpg",
    description:
      "High-clarity infusion sets delivering precise, consistent drop formation for patient safety across prolonged medication infusions.",
    specs: [
      { label: "Chamber Type", value: "Cylindrical Flexible Squeeze" },
      { label: "Material Grade", value: "USP Class VI Medical Polymer" },
      { label: "Flow Control", value: "Precision Micro Roller" },
    ],
    features: ["Precise Flow Rate", "DEHP-Free Formulation", "Non-Toxic Pyrogen-Free"],
    longDescription:
      "Nova Drips deliver precise, consistent drop formation for safe medication and fluid infusion over extended periods. Moulded from USP Class VI medical polymer, the high-clarity drip chamber allows clear visual monitoring, while the precision micro-roller enables fine flow adjustment. DEHP-free formulations are available for neonatal and sensitive-population protocols.",
    variants: ["20 drops/ml (Macro)", "60 drops/ml (Micro)", "With burette 100/150 ml", "DEHP-free"],
    applications: ["Pediatric & neonatal", "Controlled medication drips", "Long-duration infusion", "Critical care"],
    packaging: ["Individual sterile pouch", "Inner box of 25", "Master carton of 400"],
    datasheet: "/docs/datasheet-nova-drips.pdf",
  },
  {
    slug: "nova-cannula",
    name: "Nova Cannula",
    tagline: "Smooth, low-trauma access.",
    category: "syringes",
    categoryLabel: "Syringes",
    iso: "ISO 10555-5",
    sterileTag: "Tri-Bevel Cut",
    range: "14G – 26G Gauges",
    image: "/images/cannula.jpg",
    catalogImage: "/images/cat-cannula.jpg",
    description:
      "Ergonomic IV cannulas designed with an ultra-sharp back-cut bevel for significantly smoother, low-trauma venipuncture insertion.",
    specs: [
      { label: "Catheter Material", value: "Radiopaque PTFE / FEP" },
      { label: "Flashback", value: "Rapid Blood Return Chamber" },
      { label: "Wing Ergonomics", value: "Color-Coded Anti-Slip Grip" },
    ],
    features: ["Ultra-Sharp Bevel", "Color-Coded Sizes", "Secure Wing Design"],
    longDescription:
      "Nova IV Cannulas are engineered for smooth, low-trauma venipuncture. The ultra-sharp, tri-bevel back-cut needle reduces insertion force and patient discomfort, while the radiopaque PTFE/FEP catheter resists kinking and is visible under imaging. A rapid flashback chamber confirms successful placement, and color-coded ergonomic wings follow the international gauge standard for fast size identification.",
    variants: ["14G", "16G", "18G", "20G", "22G", "24G", "26G", "With / without injection port"],
    applications: ["Peripheral IV access", "Emergency & trauma", "Blood sampling", "Continuous infusion"],
    packaging: ["Individual sterile blister", "Inner box of 50", "Master carton of 1,000"],
    datasheet: "/docs/datasheet-nova-cannula.pdf",
  },
  {
    slug: "nova-blood-bags",
    name: "Nova Blood Bags",
    tagline: "Safe blood collection.",
    category: "blood",
    categoryLabel: "Blood Banking",
    iso: "ISO 3826-1",
    sterileTag: "CPDA-1 Solution",
    range: "350ml / 450ml",
    image: "/images/blood-bags.jpg",
    catalogImage: "/images/cat-blood-bags.jpg",
    description:
      "Durable, leak-proof blood collection bags built to the highest safety standards with superior red cell preservation up to 35 days.",
    specs: [
      { label: "Anticoagulant", value: "Pre-filled CPDA-1 / CPD" },
      { label: "Sealing System", value: "High-Frequency Welded Seam" },
      { label: "Needle Gauge", value: "16G Ultra-Thin Wall" },
    ],
    features: ["Leak-Proof Welds", "Clear Volumetric Grad", "Tamper-Proof Seals"],
    longDescription:
      "Nova Blood Bags are manufactured for safe collection, storage, and transport of whole blood. Pre-filled with CPDA-1 / CPD anticoagulant, they support red-cell preservation of up to 35 days. High-frequency welded seams provide leak-proof integrity, tamper-evident closures protect chain-of-custody, and clear volumetric graduations allow accurate volume reading during collection.",
    variants: ["350 ml", "450 ml", "CPDA-1", "CPD", "16G collection needle"],
    applications: ["Whole-blood collection", "Blood banks", "Mobile donation drives", "Hospital transfusion"],
    packaging: ["Individual overwrap", "Inner box of 6", "Master carton of 96"],
    datasheet: "/docs/datasheet-nova-blood-bags.pdf",
  },
  {
    slug: "nova-blood-bag-kits",
    name: "Nova Blood Bag Kits",
    tagline: "Efficient transfusion systems.",
    category: "blood",
    categoryLabel: "Blood Banking",
    iso: "GMP Validated",
    sterileTag: "Double / Triple / Quad",
    range: "Closed Transfer",
    image: "/images/blood-bag-kits.jpg",
    catalogImage: "/images/cat-blood-bag-kits.jpg",
    description:
      "Complete multi-bag transfusion kits engineered for sterile blood component separation (PRBC, Platelets, Plasma) with zero microbial risk.",
    specs: [
      { label: "System Architecture", value: "Closed-Loop Multi-Bag" },
      { label: "Inline Filter", value: "High-Efficiency Leukoreduction" },
      { label: "Platelet Storage", value: "Extended 5-Day Gas Permeable" },
    ],
    features: ["Multi-Bag Configs", "Integrated Tubing", "Sterile & Validated"],
    longDescription:
      "Nova Blood Bag Kits are closed, multi-bag systems for sterile separation of blood into components — packed red cells, platelets, and plasma. Integrated leukoreduction filters and gas-permeable satellite bags support extended platelet storage. The fully closed architecture minimizes microbial risk and preserves component quality throughout processing and storage.",
    variants: ["Double", "Triple", "Quadruple", "With inline leukofilter", "Top-and-bottom"],
    applications: ["Component separation", "Apheresis support", "Regional blood centers", "Tertiary hospitals"],
    packaging: ["Individual overwrap", "Inner box of 4", "Master carton of 48"],
    datasheet: "/docs/datasheet-nova-blood-bag-kits.pdf",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(slug: string, count = 3): Product[] {
  const current = getProduct(slug);
  if (!current) return products.slice(0, count);
  const sameCat = products.filter((p) => p.slug !== slug && p.category === current.category);
  const others = products.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCat, ...others].slice(0, count);
}

export const categories: { id: "all" | ProductCategory; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "syringes", label: "Syringes" },
  { id: "infusion", label: "Infusion & IV" },
  { id: "blood", label: "Blood Banking" },
];
