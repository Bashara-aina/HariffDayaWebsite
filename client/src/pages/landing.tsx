import { useState } from "react";
import { useLocation } from "wouter";
import ReactPlayer from "react-player/youtube";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const [isVideoReady, setIsVideoReady] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <ReactPlayer
          url="https://youtu.be/tZY4XJVaKlc"
          playing
          loop
          muted
          width="100%"
          height="100%"
          config={{
            playerVars: {
              controls: 0,
              showinfo: 0,
              rel: 0,
              modestbranding: 1,
              playsinline: 1,
              iv_load_policy: 3, // Hide video annotations
              fs: 0, // Disable fullscreen button
              disablekb: 1, // Disable keyboard controls
              enablejsapi: 0, // Disable JS API
            }
          }}
          onReady={() => setIsVideoReady(true)}
          className="react-player"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
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
  );
}