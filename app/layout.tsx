import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata: Metadata = {
  title: "Garrison — Beer to Go | Batumi",
  description: "Fresh draft beer available for delivery in Batumi via Wolt and Glovo. Order online daily 16:00–24:00.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ka">
      <body className="bg-white text-[#0d1f4e]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
