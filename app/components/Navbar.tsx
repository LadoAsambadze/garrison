"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../data/translations";

const LANGS: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ka", label: "KA" },
  { code: "ru", label: "RU" },
  { code: "tr", label: "TR" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#home",     label: t.nav.home },
    { href: "#beers",    label: t.nav.menu },
    { href: "#order",    label: t.nav.order },
    { href: "#location", label: t.nav.location },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <Image
            src="/garrison-logo.png"
            alt="Garrison"
            width={38}
            height={38}
            className="object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <div>
            <p className="font-display font-bold text-[#0d1f4e] text-base leading-tight tracking-wide">GARRISON</p>
            <p className="text-[10px] text-[#b8860b] font-semibold tracking-widest uppercase leading-tight">Beer to Go</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-[#0d1f4e]/60 hover:text-[#0d1f4e] rounded-lg hover:bg-[#0d1f4e]/5 transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side: Lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-0.5 bg-gray-100 rounded-full p-0.5">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                  lang === l.code
                    ? "bg-[#0d1f4e] text-white shadow-sm"
                    : "text-[#0d1f4e]/50 hover:text-[#0d1f4e]"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href="https://wolt.com/en/geo/batumi/venue/beer-garrison"
            target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-[#0d1f4e] text-white text-sm font-semibold hover:bg-[#0d1f4e]/90 transition-colors shadow-md shadow-[#0d1f4e]/20"
          >
            {t.nav.orderNow}
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-[#0d1f4e] hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 overflow-hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-[#0d1f4e]/70 hover:text-[#0d1f4e] border-b border-gray-50"
              >
                {l.label}
              </a>
            ))}
            {/* Mobile lang switcher */}
            <div className="flex gap-1 mt-3 mb-2">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    lang === l.code
                      ? "bg-[#0d1f4e] text-white"
                      : "bg-gray-100 text-[#0d1f4e]/50"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <a
              href="https://wolt.com/en/geo/batumi/venue/beer-garrison"
              target="_blank" rel="noopener noreferrer"
              className="block text-center py-3 rounded-full bg-[#0d1f4e] text-white font-semibold text-sm"
            >
              {t.nav.orderNow}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
