"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const WOLT_URL = "https://wolt.com/en/geo/batumi/venue/beer-garrison/items/draft-beer--1";
const GLOVO_URL = "https://glovoapp.com/ge/en/batumi/";

export default function OrderSection() {
  const { t } = useLanguage();
  const o = t.order;

  return (
    <section id="order" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-14"
        >
          <span className="section-label mb-5 block justify-center">{o.sectionLabel}</span>
          <h2 className="font-display text-5xl sm:text-6xl font-black text-[#0d1f4e] mb-4">
            {o.title} <span className="gradient-gold">{o.titleGold}</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">{o.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">

          {/* Wolt */}
          <motion.a
            href={WOLT_URL}
            target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group flex flex-col items-center gap-6 p-8 rounded-3xl bg-white border-2 border-[#009DE0]/20 hover:border-[#009DE0] shadow-lg shadow-[#009DE0]/5 hover:shadow-xl hover:shadow-[#009DE0]/15 transition-all duration-300 cursor-pointer"
          >
            <div className="w-24 h-24 rounded-3xl bg-[#009DE0] flex items-center justify-center shadow-xl shadow-[#009DE0]/30 group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                <path d="M26 6L10 28H22L22 42L38 20H26L26 6Z" fill="white"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d1f4e] tracking-tight">wolt</p>
              <p className="text-sm text-gray-400 mt-1">{t.menu.tapToOrder}</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#009DE0] group-hover:gap-3 transition-all">
              {o.wolt} <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>

          {/* Glovo */}
          <motion.a
            href={GLOVO_URL}
            target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group flex flex-col items-center gap-6 p-8 rounded-3xl bg-white border-2 border-[#FFC244]/20 hover:border-[#FFC244] shadow-lg shadow-[#FFC244]/5 hover:shadow-xl hover:shadow-[#FFC244]/15 transition-all duration-300 cursor-pointer"
          >
            <div className="w-24 h-24 rounded-3xl bg-[#FFC244] flex items-center justify-center shadow-xl shadow-[#FFC244]/30 group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                <path d="M24 5C14.6 5 7 12.6 7 22s7.6 17 17 17 17-7.6 17-17H24V12h8C29.5 8.2 27 5 24 5Z" fill="#1a1a1a"/>
                <circle cx="24" cy="22" r="6" fill="#FFC244"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d1f4e] tracking-tight">glovo</p>
              <p className="text-sm text-gray-400 mt-1">{t.menu.tapToOrder}</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#b8860b] group-hover:gap-3 transition-all">
              {o.glovo} <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-gray-400 mt-10"
        >
          {o.footer} <strong className="text-[#0d1f4e]">{o.footerMid}</strong> {o.footerEnd}
        </motion.p>
      </div>
    </section>
  );
}
