import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-amber-50 to-orange-100"
    >
      {/* Content Container */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-left space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-amber-900 leading-tight">
              Welcome to Garrison
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-amber-700 font-light">
              We Are Waiting For You
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <button
                onClick={() => scrollToSection("beers")}
                className="bg-gradient-to-r from-amber-600 to-orange-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:from-amber-700 hover:to-orange-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Explore Our Collection</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="border-2 border-amber-700 text-amber-900 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-amber-700 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Our Story</span>
              </button>
            </div>
          </div>

          {/* Image Box */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[350px] md:h-[500px] relative"
              style={{
                backgroundImage: "url('Owners.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Optional subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
