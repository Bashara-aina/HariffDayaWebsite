import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import LoadingScreen from "@/components/loading-screen";

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative h-screen w-screen overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <iframe 
              className="w-full h-full scale-[1.5]"
              src="https://www.youtube.com/embed/tZY4XJVaKlc?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=tZY4XJVaKlc&vq=hd720" 
              title="Background Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full items-center justify-center text-white">
            <div className="max-w-4xl text-center p-6">
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
        </div>
      )}
    </>
  );
}