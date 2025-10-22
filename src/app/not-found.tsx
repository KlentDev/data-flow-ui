"use client";

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export default function NotFound() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center px-6 transition-colors duration-300",
        isDark ? "bg-[#293289]" : "bg-gray-50"
      )}
    >
      <div className="text-center">
        {/* 404 Circle */}
        <div className={cn(
          "w-36 h-36 mx-auto mb-8 flex items-center justify-center rounded-full transition-colors duration-300",
          isDark ? "bg-blue-400/20" : "bg-blue-400/10"
        )}>
          <div className={cn(
            "w-24 h-24 flex items-center justify-center rounded-full transition-colors duration-300",
            isDark ? "bg-blue-400" : "bg-blue-400"
          )}>
            <span className="text-white font-bold text-3xl">404</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className={cn(
          "text-5xl md:text-6xl font-bold mb-4 transition-colors duration-300",
          isDark ? "text-white" : "text-blue-400"
        )}>
          Page Not Found
        </h1>

        {/* Description */}
        <p className={cn(
          "text-lg md:text-xl mb-8 max-w-md mx-auto transition-colors duration-300",
          isDark ? "text-white/80" : "text-blue-400/80"
        )}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className={cn(
              "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105",
              isDark 
                ? "bg-blue-400 text-white hover:bg-blue-500" 
                : "bg-blue-400 text-white hover:bg-blue-500"
            )}
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className={cn(
              "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border transition-all duration-300 hover:scale-105",
              isDark 
                ? "border-blue-400 text-blue-400 bg-transparent hover:bg-blue-400/10" 
                : "border-blue-400 text-blue-400 bg-white hover:bg-blue-400/5"
            )}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}