import { Play, Pause, Heart, Shield, Users } from "lucide-react";
import { useRef, useState } from "react";

interface PsychologySectionProps {
  scrollToSection?: (sectionId: string) => void;
}

export const PsychologySection = ({
  scrollToSection,
}: PsychologySectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section
      id="psychology"
      className="py-16 md:py-24 px-4 bg-gradient-to-br from-emerald-900 to-teal-950"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-left space-y-4 md:space-y-6 order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-100 leading-tight">
              ჩვენი ფსიქოლოგი ზურაშა დაგეხმარება
            </h2>
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-emerald-200 leading-relaxed">
                თუ ზედმეტად მეტი დალიე და სახლში წასვლის გეშინია, ასეთ დროს
                ჩვენი ფსიქოლოგი ზურაშა დაგეხმარება.
              </p>
              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
                Garrison-ში ჩვენ ვზრუნავთ თქვენს კეთილდღეობაზე. ჩვენი გამოცდილი
                პერსონალი მზად არის დაგეხმაროთ და უზრუნველყოს უსაფრთხო და
                სასიამოვნო გარემო.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-700 rounded-full p-2">
                  <Heart className="w-5 h-5 text-emerald-100" />
                </div>
                <p className="text-emerald-100">
                  მზრუნველი და გამგებიანი პერსონალი
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-700 rounded-full p-2">
                  <Shield className="w-5 h-5 text-emerald-100" />
                </div>
                <p className="text-emerald-100">უსაფრთხო გარემო ყველასთვის</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-700 rounded-full p-2">
                  <Users className="w-5 h-5 text-emerald-100" />
                </div>
                <p className="text-emerald-100">
                  პროფესიონალური დახმარება საჭიროების შემთხვევაში
                </p>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-4 border-t border-emerald-700/50">
              <p className="text-xl sm:text-2xl text-emerald-300 font-light italic">
                Your safety and comfort are our priority
              </p>
            </div>
          </div>

          {/* Video Box */}
          <div className="relative order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer">
              <video
                ref={videoRef}
                className="w-full h-auto"
                onClick={handleVideoClick}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                loop
              >
                <source src="Zura.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Button Overlay - Always Centered */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                onClick={handleVideoClick}
              >
                <div
                  className={`bg-emerald-600 hover:bg-emerald-700 rounded-full p-6 md:p-8 shadow-2xl transform transition-all duration-300 hover:scale-110 pointer-events-auto ${
                    isPlaying
                      ? "opacity-0 group-hover:opacity-100"
                      : "opacity-100"
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-12 h-12 md:w-16 md:h-16 text-white fill-white" />
                  ) : (
                    <Play className="w-12 h-12 md:w-16 md:h-16 text-white fill-white" />
                  )}
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
