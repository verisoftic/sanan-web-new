"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./Icon";
import { products } from "@/lib/products";

const tabs = ["Tender / RFQ", "Evaluation Kit", "OEM Partner"] as const;

const field =
  "h-12 w-full rounded-lg border border-spec-border bg-white px-3.5 font-body text-body-md text-cleanroom-navy shadow-sm outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-4 focus:ring-primary/10";
const labelCls =
  "mb-1.5 block font-body text-label-caps uppercase tracking-wider text-on-surface-variant";

export function RfqForm() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Tender / RFQ");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-cleanroom-navy/[0.06] bg-sterile-surface p-space-lg shadow-level-2 md:p-space-xl">
      <div className="mb-space-md flex flex-col gap-1">
        <span className="eyebrow text-primary">
          <Icon name="assignment" className="text-[18px]" />
          Institutional RFQ Desk
        </span>
        <h2 className="font-display text-headline-md font-bold text-cleanroom-navy">
          Request Official Quotation
        </h2>
        <p className="font-body text-body-sm text-on-surface-variant">
          Complete your order specifications below. Your request is routed directly to the plant
          production ledger and sales directorate.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-space-lg flex gap-1 rounded-lg bg-surface-container-low p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative flex-1 rounded-md px-3 py-2 font-heading text-subheading uppercase tracking-wide transition-colors ${
              tab === t ? "text-white" : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {tab === t && (
              <motion.span
                layoutId="rfq-tab"
                className="absolute inset-0 rounded-md bg-primary shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3 rounded-xl bg-status-sterile/10 p-space-xl text-center ring-1 ring-status-sterile/20"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-status-sterile/20"
            >
              <Icon name="check_circle" className="text-status-sterile text-[36px]" filled />
            </motion.span>
            <h3 className="font-heading text-headline-sm font-bold text-cleanroom-navy">
              Quotation Request Received
            </h3>
            <p className="max-w-sm font-body text-body-sm text-on-surface-variant">
              Our biomedical sales director will respond within 24 business hours with a formal
              commercial proposal, including COA and DRAP registration dossiers.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-ghost mt-2 h-11"
            >
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-space-md"
          >
            <div className="grid gap-space-md sm:grid-cols-2">
              <div>
                <label className={labelCls}>Authorized Officer Name *</label>
                <input required className={field} placeholder="e.g. Dr. Tariq Mansoor" />
              </div>
              <div>
                <label className={labelCls}>Official Designation</label>
                <input className={field} placeholder="e.g. Procurement Director" />
              </div>
            </div>

            <div className="grid gap-space-md sm:grid-cols-2">
              <div>
                <label className={labelCls}>Hospital / Institution / Entity *</label>
                <input required className={field} placeholder="e.g. Lady Reading Hospital" />
              </div>
              <div>
                <label className={labelCls}>Corporate / Institutional Email *</label>
                <input required type="email" className={field} placeholder="procurement@hospital.org.pk" />
              </div>
            </div>

            <div className="grid gap-space-md sm:grid-cols-2">
              <div>
                <label className={labelCls}>Direct Phone / WhatsApp</label>
                <input className={field} placeholder="+92 300 0000000" />
              </div>
              <div>
                <label className={labelCls}>Estimated Volume Cycle</label>
                <input className={field} placeholder="e.g. 50,000 units / quarter" />
              </div>
            </div>

            <div className="grid gap-space-md sm:grid-cols-2">
              <div>
                <label className={labelCls}>Primary Product Line *</label>
                <select required defaultValue="" className={field}>
                  <option value="" disabled>
                    Select medical consumable…
                  </option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Full Catalog / Custom OEM">Full Line / Custom Hospital Tender</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Sterilization &amp; Regulatory Protocol</label>
                <select defaultValue="DRAP" className={field}>
                  <option value="DRAP">DRAP Pakistan Registered &amp; EO Sterile</option>
                  <option value="Gamma">Gamma Irradiated</option>
                  <option value="CE">CE / EU Conformity Pathway</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelCls}>Technical Specifications &amp; Delivery Destination</label>
              <textarea
                rows={4}
                className={`${field} h-auto resize-none py-3`}
                placeholder="Provide tender reference number, specific gauge sizes, target port / depot, or custom-needle configurations…"
              />
            </div>

            <div className="flex items-start gap-2 rounded-lg bg-spec-code-bg/60 p-3 ring-1 ring-primary/10">
              <Icon name="lock" className="mt-0.5 text-primary text-[16px]" />
              <p className="font-body text-body-sm text-on-surface-variant">
                Direct factory-encrypted transmit. Commercial proposals include COA (Certificate of
                Analysis) &amp; DRAP registration dossiers.
              </p>
            </div>

            <button type="submit" className="btn-primary w-full">
              <Icon name="send" className="text-[18px]" />
              Submit Official RFQ Request
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
