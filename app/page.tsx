import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BeerMenu from "./components/BeerMenu";
import OrderSection from "./components/OrderSection";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#05102a]">
      <Navbar />
      <Hero />
      <BeerMenu />
      <OrderSection />
      <Location />
      <Footer />
    </main>
  );
}
