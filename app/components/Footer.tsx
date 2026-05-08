import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";

const links = [
  { href: "#home",     en: "Home",     ka: "მთავარი",    ru: "Главная",  tr: "Ana Sayfa" },
  { href: "#beers",    en: "Menu",     ka: "მენიუ",      ru: "Меню",     tr: "Menü" },
  { href: "#order",    en: "Order",    ka: "შეკვეთა",    ru: "Заказ",    tr: "Sipariş" },
  { href: "#location", en: "Location", ka: "მდებარეობა", ru: "Адрес",    tr: "Konum" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1f4e] pt-14 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">

          {/* Brand */}
          <div className="flex items-center gap-4">
            <Image src="/garrison-logo.png" alt="Garrison" width={52} height={52} className="object-contain" />
            <div>
              <p className="font-display font-black text-white text-xl tracking-widest">GARRISON</p>
              <p className="text-[11px] text-[#f0c84a] font-semibold tracking-widest uppercase mt-0.5">Beer to Go · Batumi</p>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4 text-[#f0c84a] flex-shrink-0" />
              <span>188 Bagrationi St, Batumi 6000</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock className="w-4 h-4 text-[#f0c84a] flex-shrink-0" />
              <span>16:00 – 24:00</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Phone className="w-4 h-4 text-[#f0c84a] flex-shrink-0" />
              <a href="tel:+995557375763" className="hover:text-[#f0c84a] transition-colors">+995 557 375 763</a>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                {l.en}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">© {new Date().getFullYear()} Garrison Beer. Batumi, Georgia.</p>
          <p className="text-xs text-white/25">🔞 Alcohol is sold only to persons aged 18 and over. Drink responsibly.</p>
        </div>
      </div>
    </footer>
  );
}
