"use client";

import { FightSection } from "./components/FightSection";
import { PsychologySection } from "./components/PsycologySection";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <FightSection />
      <PsychologySection />
    </div>
  );
}
