import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !isPlaying) {
            videoRef.current.play();
            setIsPlaying(true);
          }
        });
      },
      { threshold: 0.5 }, // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isPlaying]);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

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
      id="story"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 bg-gradient-to-br from-amber-900 to-orange-950"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Video Box */}
          <div className="relative order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer">
              <video
                ref={videoRef}
                className="w-full h-auto"
                onClick={handleVideoClick}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="Dato.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300"
                  onClick={handlePlayClick}
                >
                  <div className="bg-amber-600 hover:bg-amber-700 rounded-full p-6 md:p-8 shadow-2xl transform transition-transform duration-300 hover:scale-110">
                    <Play className="w-12 h-12 md:w-16 md:h-16 text-white fill-white" />
                  </div>
                </div>
              )}
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="text-left space-y-4 md:space-y-6 order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-100 leading-tight">
              Our Story Begins
            </h2>
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-amber-200 leading-relaxed">
                The idea of creating this beer shop was born from passion and
                dedication...
              </p>
              <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed">
                Every great journey starts with a vision. Hear directly from our
                founder about the inspiration behind Garrison and what makes us
                unique.
              </p>
            </div>

            {/* Call to action */}
            <div className="pt-4 border-t border-amber-700/50">
              <p className="text-2xl sm:text-3xl font-semibold text-amber-300 mb-4">
                Want to hear it by your own ears?
              </p>
              <p className="text-xl sm:text-2xl text-amber-100 font-light italic">
                Come visit Garrison
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
