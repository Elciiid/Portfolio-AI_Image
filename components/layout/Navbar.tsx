"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "How I work", href: "/#approach" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the photographic hero the bar is transparent with light text; once the
  // page scrolls it settles onto the warm canvas with ink text.
  const solid = scrolled || menuOpen;
  const ink = solid ? "text-foreground" : "text-[#f4ecdc]";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: solid
          ? "color-mix(in srgb, var(--background) 92%, transparent)"
          : "transparent",
        backdropFilter: solid ? "blur(14px)" : "none",
        borderBottom: solid ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto grid h-[68px] max-w-[1400px] grid-cols-[1fr_auto] items-center gap-6 px-6 md:grid-cols-[1fr_auto_1fr] md:px-10 ${ink}`}
      >
        <ul className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.2em] md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="py-1 transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className="hero-title text-[22px] tracking-[0.18em] md:text-center md:text-[26px]"
          aria-label="Jonas David, home"
        >
          Jonas David
        </Link>

        <div className="flex items-center justify-end gap-3">
          <Link
            href="/#contact"
            className={`btn h-9 px-4 text-[11px] uppercase tracking-[0.16em] ${solid ? "btn-ink" : "btn-light"}`}
          >
            Get in touch
          </Link>
          <button
            type="button"
            className="-mr-2 p-2 md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            id="mobile-menu"
            className="border-t border-border bg-background px-6 pb-6 pt-2 text-foreground md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-border last:border-b-0">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="display block py-3.5 text-[26px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
