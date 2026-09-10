"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { nav, primaryNav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_16px_rgba(10,25,47,0.08)] border-b border-white/60"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="container-pad flex h-16 items-center justify-between md:h-20">
        <Logo onDark={!scrolled} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-4 py-2 font-body text-body-md font-medium transition-colors ${
                  scrolled
                    ? "text-on-surface-variant hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span
                  className={
                    active ? (scrolled ? "text-primary" : "text-white") : ""
                  }
                >
                  {item.label}
                </span>
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full transition-transform duration-300 origin-left ${
                    scrolled ? "bg-primary" : "bg-clinical-cyan-glow"
                  } ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden btn-primary h-11 px-5 sm:inline-flex">
            <Icon name="request_quote" className="text-[16px]" />
            <span>Get in Touch</span>
          </Link>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-lg transition-colors lg:hidden ${
              scrolled
                ? "bg-cleanroom-navy text-white"
                : "bg-white/10 text-white border border-white/25 backdrop-blur-md"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="text-[22px]" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-spec-border bg-white lg:hidden"
          >
            <nav className="container-pad flex flex-col py-4">
              {nav.map((item, i) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between border-b border-surface-container py-3.5 font-heading text-headline-sm ${
                        active ? "text-primary" : "text-cleanroom-navy"
                      }`}
                    >
                      {item.label}
                      <Icon name="arrow_forward" className="text-[18px] text-primary" />
                    </Link>
                  </motion.div>
                );
              })}
              <Link href="/contact" className="btn-primary mt-4 w-full">
                <Icon name="request_quote" className="text-[16px]" />
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
