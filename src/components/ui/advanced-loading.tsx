"use client";

import { cn } from "@/lib/utils";
import { Commet } from "react-loading-indicators";
import { useEffect, useState } from "react";

export function AdvancedLoading() {
  const [progress, setProgress] = useState(0); // 0-100%
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    // Increment progress based on approximate network speed / time
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      // simulate progress: faster network = faster progress
      const newProgress = Math.min(100, (elapsed / 1500) * 100); // adjust 1500ms to simulate speed
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        // Slight delay before hiding spinner for smoothness
        setTimeout(() => setIsLoaded(true), 200);
      }
    }, 50);

    // Optional: hide when the window finishes loading
    window.addEventListener("load", () => {
      setProgress(100);
      setTimeout(() => setIsLoaded(true), 200);
    });

    return () => clearInterval(interval);
  }, []);

  if (isLoaded) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background space-y-6 transition-opacity duration-500"
      )}
      style={{ opacity: isLoaded ? 0 : 1 }}
    >
      {/* Commet Spinner */}
      <Commet color="#AED59C" size="medium" text="" textColor="" />

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-heading font-bold text-foreground">
          Medici Land Governance
        </h2>
        <p className="text-foreground/60 text-sm">
          Revolutionizing land governance, one block at a time.
        </p>
        <p className="text-foreground/40 text-xs mt-2">
          Loading {Math.floor(progress)}%
        </p>
      </div>
    </div>
  );
}
