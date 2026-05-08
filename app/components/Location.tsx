"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

export default function Location() {
  const { t } = useLanguage();
  const l = t.location;

  return (
    <section id="location" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f4]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-14"
        >
          <span className="section-label mb-5 block justify-center">{l.sectionLabel}</span>
          <h2 className="font-display text-5xl sm:text-6xl font-black text-[#0d1f4e] mb-3">
            {l.title} <span className="gradient-gold">{l.titleGold}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Map — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden border border-gray-200 shadow-sm"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.4!2d41.6299!3d41.6419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406787ee93b7c42d%3A0x2d3f84ce7da27e99!2sBeer%20Garrison!5e0!3m2!1sen!2sge!4v1234"
              width="100%" height="320"
              style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Garrison"
            />
            <div className="p-5 bg-white border-t border-gray-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#b8860b]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-[#b8860b]" />
              </div>
              <div>
                <p className="font-semibold text-[#0d1f4e] text-sm">{l.address}</p>
                <p className="text-xs text-gray-400 geo">{l.addressGeo}</p>
              </div>
            </div>
          </motion.div>

          {/* Right — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Hours */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 flex-1">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#b8860b]/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#b8860b]" />
                </div>
                <h3 className="font-bold text-[#0d1f4e]">{l.workingHours}</h3>
              </div>
              <div className="space-y-1">
                {l.days.map((day, i) => (
                  <div key={day} className={`flex items-center justify-between py-2 px-3 rounded-xl transition-colors ${
                    i === todayIndex ? "bg-[#0d1f4e] text-white" : "hover:bg-gray-50"
                  }`}>
                    <div className="flex items-center gap-2">
                      {i === todayIndex && (
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      )}
                      <span className={`text-sm font-medium ${i === todayIndex ? "text-white" : "text-[#0d1f4e]/70"}`}>
                        {day}
                      </span>
                    </div>
                    <span className={`text-sm font-bold ${i === todayIndex ? "text-[#f0c84a]" : "text-[#0d1f4e]/50"}`}>
                      16:00 – 24:00
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#0d1f4e] rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-4 h-4 text-[#f0c84a]" />
                <span className="text-white/60 text-sm font-medium">{l.callUs}</span>
              </div>
              <a href="tel:+995557375763" className="text-[#f0c84a] font-black text-xl hover:text-white transition-colors block">
                +995 557 375 763
              </a>
              <p className="text-white/30 text-xs mt-2">{l.available}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
