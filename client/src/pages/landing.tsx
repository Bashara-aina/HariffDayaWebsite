import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Delay showing content for smooth initial load
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Video Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVideoLoaded ? 1 : 0 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover scale-[1.5]"
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
          onLoadedData={handleVideoLoad}
        >
          <source src="/assets/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="max-w-4xl text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Innovating Indonesia's Future with Cutting-Edge Technology
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">
            Leading provider of power systems, digital transformation, and
            defense solutions.
          </p>
          <Button
            size="lg"
            onClick={() => setLocation("/home")}
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
          >
            Masuk ke Perjalanan Kami
          </Button>
        </div>
      </motion.div>
    </div>
  );
}