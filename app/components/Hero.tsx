"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden flex items-center">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#faf3e0] rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#edf2fb] rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

          {/* Left */}
          <div className="flex flex-col gap-8">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="section-label mb-6 block">{h.label}</span>
              <h1 className="font-display text-[64px] sm:text-[80px] lg:text-[88px] font-black leading-[0.95] tracking-tight text-[#0d1f4e]">
                {h.line1}<br />
                <span className="gradient-gold">{h.line2}</span><br />
                {h.line3}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[#0d1f4e]/60 text-lg leading-relaxed max-w-md"
            >
              {h.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#beers"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0d1f4e] text-white font-semibold text-sm hover:bg-[#162a6a] transition-all shadow-lg shadow-[#0d1f4e]/25 hover:-translate-y-0.5 group"
              >
                {h.viewMenu}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#order"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#b8860b] text-[#b8860b] font-semibold text-sm hover:bg-[#b8860b] hover:text-white transition-all"
              >
                {h.orderDelivery}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-2 bg-[#faf8f4] border border-[#e8e0d0] rounded-full px-4 py-2">
                <Clock className="w-3.5 h-3.5 text-[#b8860b]" />
                <span className="text-xs font-semibold text-[#0d1f4e]/70">{h.hours}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#faf8f4] border border-[#e8e0d0] rounded-full px-4 py-2">
                <MapPin className="w-3.5 h-3.5 text-[#b8860b]" />
                <span className="text-xs font-semibold text-[#0d1f4e]/70">{h.address}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 pt-4 border-t border-gray-100"
            >
              {h.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black font-display text-[#0d1f4e]">{s.value}</p>
                  <p className="text-xs text-[#0d1f4e]/40 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — logo + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#faf3e0] to-[#edf2fb] border border-[#e8e0d0]" />
            <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[#fff9ed] to-white border border-[#f0e8d0]" />

            <div className="relative z-10">
              <Image src="/garrison-logo.png" alt="Garrison Beer" width={300} height={300} className="object-contain drop-shadow-2xl" priority />
            </div>

            {/* Floating — Wolt */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -left-4 top-16 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-[#009DE0] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M13 2L5 14h7v8l9-12h-7L13 2Z" fill="white"/></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-[#0d1f4e]">{h.woltLabel}</p>
                <p className="text-[11px] text-gray-400">{h.woltSub}</p>
              </div>
            </motion.div>

            {/* Floating — Glovo */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-4 bottom-20 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFC244] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9h-9V7.5h4C14.5 5.1 13.4 3 12 3Z" fill="#1a1a1a"/>
                  <circle cx="12" cy="12" r="3" fill="#FFC244"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-[#0d1f4e]">{h.glovoLabel}</p>
                <p className="text-[11px] text-gray-400">{h.glovoSub}</p>
              </div>
            </motion.div>

            {/* Floating — hours */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -right-2 top-8 bg-[#0d1f4e] rounded-2xl shadow-xl p-4 z-20"
            >
              <p className="text-[10px] text-white/50 font-medium">{h.openToday}</p>
              <p className="text-sm font-black text-white">16:00 – 24:00</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
