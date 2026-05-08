"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ExternalLink, Tag, Droplets } from "lucide-react";
import Image from "next/image";
import { menuCategories } from "../data/menu";
import { useLanguage } from "../context/LanguageContext";

const beerColors: Record<string, { bg: string; text: string }> = {
  "Staropramen":  { bg: "#FEF3C7", text: "#92400E" },
  "Löwenbräu":    { bg: "#DBEAFE", text: "#1E40AF" },
  "Taati":        { bg: "#FFEDD5", text: "#9A3412" },
  "Efes":         { bg: "#FEE2E2", text: "#991B1B" },
  "Hoegaarden":   { bg: "#FFFBEB", text: "#854D0E" },
  "Katxa":        { bg: "#FEF9C3", text: "#713F12" },
  "Kasri":        { bg: "#FEF3C7", text: "#78350F" },
};

export default function BeerMenu() {
  const { t, lang } = useLanguage();
  const m = t.menu;
  const [activeKey, setActiveKey] = useState("draft");
  const active = menuCategories.find((c) => c.key === activeKey)!;

  const getCategoryLabel = (cat: typeof menuCategories[0]) => {
    if (lang === "ka") return cat.labelGeo;
    if (lang === "ru") return cat.labelRu;
    if (lang === "tr") return cat.labelTr;
    return cat.labelEn;
  };

  const getItemName = (item: typeof active.items[0]) => {
    if (lang === "ka") return item.nameGeo;
    if (lang === "ru") return item.nameRu;
    if (lang === "tr") return item.nameTr;
    return item.nameEn;
  };

  const getItemDesc = (item: typeof active.items[0]) => {
    if ((lang === "ru") && item.descriptionRu) return item.descriptionRu;
    if ((lang === "tr") && item.descriptionTr) return item.descriptionTr;
    return item.description;
  };

  return (
    <section id="beers" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-12"
        >
          <span className="section-label mb-5 block justify-center">{m.sectionLabel}</span>
          <h2 className="font-display text-5xl sm:text-6xl font-black text-[#0d1f4e] mb-3">
            {m.title} <span className="gradient-gold">{m.titleGold}</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {menuCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveKey(cat.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeKey === cat.key
                  ? "bg-[#0d1f4e] text-white shadow-lg shadow-[#0d1f4e]/25"
                  : "bg-white border border-gray-200 text-[#0d1f4e]/60 hover:border-[#0d1f4e]/30 hover:text-[#0d1f4e] hover:shadow-sm"
              }`}
            >
              <span className="text-base">{cat.emoji}</span>
              <span>{getCategoryLabel(cat)}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {active.items.length > 0 ? (
              <div className={`grid gap-5 ${
                active.key === "draft"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}>
                {active.items.map((item) => {
                  const colors = beerColors[item.nameEn] ?? { bg: "#F9FAFB", text: "#374151" };
                  return (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">

                        {/* Top image / color area */}
                        <div className="relative h-44 flex items-center justify-center overflow-hidden" style={{ backgroundColor: colors.bg }}>
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.nameEn}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                          ) : (
                            active.key === "draft" ? (
                              <div className="flex items-end justify-center gap-1.5">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className={`rounded-t-lg bg-gradient-to-b from-amber-100 to-amber-300 border border-amber-200/60 ${i === 1 ? "w-10 h-20" : "w-7 h-14"}`}>
                                    <div className="w-full h-4 rounded-t-lg bg-white/70 border-b border-amber-200/40" />
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <span className="text-6xl">{active.emoji}</span>
                            )
                          )}

                          {/* Badges */}
                          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                            <span className="text-[10px] font-bold bg-white/90 border border-red-200 text-red-500 px-2 py-0.5 rounded-full">18+</span>
                            {item.badge && (
                              <span className="text-[10px] font-bold bg-[#b8860b] text-white px-2 py-0.5 rounded-full">{item.badge}</span>
                            )}
                            {item.oldPrice && (
                              <span className="text-[10px] font-bold bg-green-500 text-white px-2 py-0.5 rounded-full flex items-center gap-0.5">
                                <Tag className="w-2.5 h-2.5" />SALE
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex-1">
                            <h3 className="font-bold text-[#0d1f4e] text-base leading-tight">{getItemName(item)}</h3>
                            {lang !== "en" && item.nameEn !== getItemName(item) && (
                              <p className="text-xs text-gray-400 mt-0.5">{item.nameEn}</p>
                            )}
                            {getItemDesc(item) && (
                              <p className="text-xs text-gray-400 leading-relaxed mt-2 mb-3">{getItemDesc(item)}</p>
                            )}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {item.volume && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-gray-50 border border-gray-100 text-gray-500 px-2 py-1 rounded-full">
                                  <Droplets className="w-3 h-3" />{item.volume}
                                </span>
                              )}
                              {item.abv && (
                                <span className="text-[11px] font-medium bg-gray-50 border border-gray-100 text-gray-500 px-2 py-1 rounded-full">
                                  {item.abv}% ABV
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Price + Order */}
                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl font-black text-[#0d1f4e]">₾{item.price.toFixed(2)}</span>
                              {item.oldPrice && (
                                <span className="text-sm text-gray-300 line-through">₾{item.oldPrice.toFixed(2)}</span>
                              )}
                            </div>
                            <a
                              href={active.woltUrl}
                              target="_blank" rel="noopener noreferrer"
                              className="w-9 h-9 rounded-xl bg-[#009DE0]/10 hover:bg-[#009DE0] border border-[#009DE0]/20 hover:border-[#009DE0] flex items-center justify-center text-[#009DE0] hover:text-white transition-all duration-200"
                              aria-label={`Order ${item.nameEn}`}
                            >
                              <ShoppingCart className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-100 rounded-3xl">
                <span className="text-6xl mb-5">{active.emoji}</span>
                <h3 className="font-display text-2xl font-bold text-[#0d1f4e] mb-1">{getCategoryLabel(active)}</h3>
                <p className="text-gray-400 text-sm mb-6 text-center max-w-xs">
                  {m.seeOn} {getCategoryLabel(active).toLowerCase()} {m.selectionOn}
                </p>
                <a
                  href={active.woltUrl}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#009DE0] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#009DE0]/25"
                >
                  {m.viewOn} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer CTA */}
        <div className="text-center mt-10">
          <a
            href="https://wolt.com/en/geo/batumi/venue/beer-garrison"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#0d1f4e]/15 text-[#0d1f4e]/60 text-sm font-semibold hover:border-[#0d1f4e] hover:text-[#0d1f4e] transition-all"
          >
            {m.viewOnWolt} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <p className="text-center text-xs text-gray-300 mt-5">{m.alcohol}</p>
      </div>
    </section>
  );
}
