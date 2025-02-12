import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    // Start zoom effect after 2 seconds
    const timer = setTimeout(() => {
      setIsZooming(true);
      // Complete loading after zoom animation (0.5s)
      setTimeout(onLoadingComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <img
        src="/logo.png"
        alt="Company Logo"
        className={`w-32 h-32 transition-transform duration-500 ${
          isZooming ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
        }`}
      />
    </div>
  );
}