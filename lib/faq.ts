// DUMMY FAQ content — replace answers with verified information before launch.
export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  category: string;
  icon: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    category: "Products & Quality",
    icon: "inventory_2",
    items: [
      {
        q: "Which quality standards do your devices comply with?",
        a: "All Sanan devices are manufactured under an ISO 13485 quality-management system in a Class 10,000 cleanroom, with ISO 10993 biocompatibility evaluation and GMP-controlled processes. Product-specific standards (e.g. ISO 7886-1 for syringes, ISO 8536-4 for infusion sets) are referenced on each product page.",
      },
      {
        q: "How are the products sterilized?",
        a: "Devices are sterilized using validated 100% Ethylene Oxide (EO) cycles. Gamma irradiation is available for selected product lines on request. Each batch is released against sterility and residual-EO limits.",
      },
      {
        q: "What is the shelf life of your products?",
        a: "Standard shelf life is 5 years from the date of sterilization when stored in the original sealed packaging under recommended conditions. Batch and expiry are printed on every unit and carton.",
      },
    ],
  },
  {
    category: "Ordering & Procurement",
    icon: "receipt_long",
    items: [
      {
        q: "What is the minimum order quantity (MOQ)?",
        a: "MOQ depends on the product line and configuration. For institutional and tender orders we accommodate large volumes; sample and evaluation quantities are available separately. Share your requirement through the RFQ form for an exact quotation.",
      },
      {
        q: "Do you supply against government and hospital tenders?",
        a: "Yes. We regularly supply government, institutional, and private healthcare buyers, and can provide the documentation packages required for tender submissions, including COA and registration dossiers.",
      },
      {
        q: "How long does a quotation take?",
        a: "Our biomedical sales team responds to RFQ submissions within 24 business hours with a formal commercial proposal.",
      },
    ],
  },
  {
    category: "OEM & Private Label",
    icon: "factory",
    items: [
      {
        q: "Do you offer OEM / private-label manufacturing?",
        a: "Yes. We provide turnkey private labelling, custom lumen extrusion, custom blister assembly, and validated EO / gamma sterilization for partners and distributors. See our OEM page for the full capability list.",
      },
      {
        q: "Can you produce custom specifications?",
        a: "We support custom gauge sizes, needle configurations, print/branding, and packaging formats. Custom tooling timelines and MOQs are confirmed during technical review.",
      },
    ],
  },
  {
    category: "Shipping & Export",
    icon: "local_shipping",
    items: [
      {
        q: "Do you export internationally?",
        a: "Yes. We serve buyers across South Asia, the Middle East, Africa, and Southeast Asia, and can arrange export documentation and logistics per destination requirements.",
      },
      {
        q: "How are products packaged for transport?",
        a: "Products ship in individually sterile-packed units, inner boxes, and export-grade master cartons designed to protect sterility and integrity during long-haul transport.",
      },
    ],
  },
];
