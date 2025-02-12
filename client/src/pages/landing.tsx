import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      {/* Video Background */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
          showVideo ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative w-full h-full overflow-hidden">
          <iframe 
            className="absolute w-[100vw] h-[100vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.5]"
            src="https://www.youtube.com/embed/tZY4XJVaKlc?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=tZY4XJVaKlc&vq=hd720" 
            title="Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Innovating Indonesia's Future with Cutting-Edge Technology
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200">
          Leading provider of power systems, digital transformation, and defense solutions.
        </p>
        <Button 
          size="lg" 
          onClick={() => setLocation('/home')}
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
        >
          Masuk ke Perjalanan Kami
        </Button>
      </div>
    </div>
  );
}