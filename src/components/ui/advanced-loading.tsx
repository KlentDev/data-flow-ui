"use client";

import { cn } from "@/lib/utils";
import { Commet } from "react-loading-indicators";
import { useEffect, useState } from "react";

export function AdvancedLoading() {
  const [progress, setProgress] = useState(0); // 0–100%
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsed / 1500) * 100); // simulate speed
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsLoaded(true), 300); // smoother fade-out
      }
    }, 60);

    window.addEventListener("load", () => {
      setProgress(100);
      setTimeout(() => setIsLoaded(true), 300);
    });

    return () => clearInterval(interval);
  }, []);

  if (isLoaded) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background space-y-6 transition-opacity duration-700"
      )}
      style={{ opacity: isLoaded ? 0 : 1 }}
    >
      {/* Commet Spinner */}
      <Commet color="#6EE7B7" size="medium" text="" textColor="" />

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
          DataSphere Analytics
        </h2>
        <p className="text-foreground/60 text-sm sm:text-base">
          Monitoring the world’s data in real time.
        </p>
        <p className="text-foreground/40 text-xs sm:text-sm mt-3">
          Loading {Math.floor(progress)}%
        </p>
      </div>
    </div>
  );
}
