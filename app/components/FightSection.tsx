import {
  Play,
  Calendar,
  Music,
  Swords,
  Users,
  Mic2,
  Trophy,
  Pause,
} from "lucide-react";
import { useRef, useState } from "react";

interface Service {
  icon: React.ReactNode;
  name: string;
  price: string;
  description?: string;
}

export const FightSection = () => {
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

  const services: Service[] = [
    {
      icon: <Swords className="w-6 h-6" />,
      name: "ხიპიში",
      price: "50",
      description: "პირდაპირ ხიფში",
    },
    {
      icon: <Mic2 className="w-6 h-6" />,
      name: "ტელეფონით ხიპიში",
      price: "30",
      description: "დარეკე და ჩაეფლე ხიფში",
    },
    {
      icon: <Swords className="w-6 h-6" />,
      name: "ჩხუბი",
      price: "100",
      description: "დაიმხე დღის სტრესი",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      name: "ბანძი სადღეგრძელოები",
      price: "40",
      description: "უხეში და გულწრფელი",
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "პადლეცის მიღება",
      price: "250",
      description: "სრული მომსახურება",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 to-amber-50"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            თუ ბევრი დალიე და აღარ შეგიძლია
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            ჩვენი სერვისები თქვენთვის
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Services List */}
          <div className="space-y-4 order-2 md:order-1">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-100 group-hover:bg-amber-600 text-amber-700 group-hover:text-white rounded-lg p-3 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                        {service.name}
                      </h3>
                      {service.description && (
                        <p className="text-sm text-gray-600">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl sm:text-3xl font-bold text-amber-600">
                      {service.price}₾
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
                <source src="Nika.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Button Overlay - Always Centered */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                onClick={handleVideoClick}
              >
                <div
                  className={`bg-amber-600 hover:bg-amber-700 rounded-full p-6 md:p-8 shadow-2xl transform transition-all duration-300 hover:scale-110 pointer-events-auto ${
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
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
