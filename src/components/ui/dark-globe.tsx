"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

type GlobeInstance = ReturnType<typeof createGlobe>;

interface GlobeProps {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: string | [number, number, number];
  markerColor?: string | [number, number, number];
  glowColor?: string | [number, number, number];
  lightModeBaseColor?: string;
  lightModeGlowColor?: string;
}

const hexToRgbNormalized = (hex: string): [number, number, number] => {
  let r = 0,
    g = 0,
    b = 0;
  const cleanHex = hex.startsWith("#") ? hex.slice(1) : hex;

  if (cleanHex.length === 3) {
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  } else if (cleanHex.length === 6) {
    r = parseInt(cleanHex.substring(0, 2), 16);
    g = parseInt(cleanHex.substring(2, 4), 16);
    b = parseInt(cleanHex.substring(4, 6), 16);
  }

  return [r / 255, g / 255, b / 255];
};

export function DarkGlobe({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1,
  diffuse = 1.2,
  mapSamples = 16000,
  mapBrightness = 6,
  baseColor = "#3b82f6",
  markerColor = "#ef4444",
  glowColor = "#1e40af",
  lightModeBaseColor = "#60a5fa",
  lightModeGlowColor = "#3b82f6",
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<GlobeInstance | null>(null);
  const frameRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const lastMouseX = useRef(0);
  const lastMouseY = useRef(0);
  const autoRotateSpeed = 0.002;

  useEffect(() => {
    let width = 0;
    let currentPhi = 0;
    let currentTheta = theta;

    const onResize = () => {
      if (containerRef.current) width = containerRef.current.offsetWidth;
    };

    const initGlobe = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }

      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);

      if (!containerRef.current) return;
      width = containerRef.current.offsetWidth;
      const pixelRatio = Math.min(2, window.devicePixelRatio);

      canvas.width = width * pixelRatio;
      canvas.height = width * pixelRatio;

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      const resolvedBaseColor: [number, number, number] =
        typeof baseColor === "string"
          ? hexToRgbNormalized(prefersDark ? baseColor : lightModeBaseColor)
          : baseColor;

      const resolvedGlowColor: [number, number, number] =
        typeof glowColor === "string"
          ? hexToRgbNormalized(prefersDark ? glowColor : lightModeGlowColor)
          : glowColor;

      const resolvedMarkerColor: [number, number, number] =
        typeof markerColor === "string" ? hexToRgbNormalized(markerColor) : markerColor;

      try {
        globeRef.current = createGlobe(canvas, {
          devicePixelRatio: pixelRatio,
          width: width * pixelRatio,
          height: width * pixelRatio,
          phi: 0,
          theta: currentTheta,
          dark,
          diffuse,
          mapSamples,
          mapBrightness,
          baseColor: resolvedBaseColor,
          glowColor: resolvedGlowColor,
          markerColor: resolvedMarkerColor,
          opacity: 0.9,
          scale,
          offset: [0, 0],
         markers: [
  // North America
  { location: [37.7749, -122.4194], size: 0.03 }, // San Francisco, USA
  { location: [40.7128, -74.006], size: 0.03 }, // New York, USA
  { location: [45.4215, -75.6992], size: 0.03 }, // Ottawa, Canada
  { location: [19.4326, -99.1332], size: 0.03 }, // Mexico City, Mexico
  { location: [14.6349, -90.5069], size: 0.03 }, // Guatemala City, Guatemala
  { location: [9.7489, -83.7534], size: 0.03 }, // Costa Rica
  { location: [4.7109, -74.0721], size: 0.03 }, // Bogotá, Colombia
  { location: [-12.0464, -77.0428], size: 0.03 }, // Lima, Peru
  { location: [-34.6037, -58.3816], size: 0.03 }, // Buenos Aires, Argentina
  { location: [-33.4489, -70.6693], size: 0.03 }, // Santiago, Chile

  // Europe
  { location: [51.5074, -0.1278], size: 0.03 }, // London, UK
  { location: [48.8566, 2.3522], size: 0.03 }, // Paris, France
  { location: [52.5200, 13.4050], size: 0.03 }, // Berlin, Germany
  { location: [41.9028, 12.4964], size: 0.03 }, // Rome, Italy
  { location: [40.4168, -3.7038], size: 0.03 }, // Madrid, Spain
  { location: [59.3293, 18.0686], size: 0.03 }, // Stockholm, Sweden
  { location: [50.0755, 14.4378], size: 0.03 }, // Prague, Czechia
  { location: [60.1699, 24.9384], size: 0.03 }, // Helsinki, Finland
  { location: [47.4979, 19.0402], size: 0.03 }, // Budapest, Hungary
  { location: [55.7558, 37.6173], size: 0.03 }, // Moscow, Russia

  // Africa
  { location: [30.0444, 31.2357], size: 0.03 }, // Cairo, Egypt
  { location: [6.5244, 3.3792], size: 0.03 }, // Lagos, Nigeria
  { location: [0.3476, 32.5825], size: 0.03 }, // Kampala, Uganda
  { location: [-1.2921, 36.8219], size: 0.03 }, // Nairobi, Kenya
  { location: [-26.2041, 28.0473], size: 0.03 }, // Johannesburg, South Africa
  { location: [14.7167, -17.4677], size: 0.03 }, // Dakar, Senegal
  { location: [5.6037, -0.1870], size: 0.03 }, // Accra, Ghana
  { location: [9.0579, 7.4951], size: 0.03 }, // Abuja, Nigeria
  { location: [-4.0435, 39.6682], size: 0.03 }, // Mombasa, Kenya
  { location: [-18.8792, 47.5079], size: 0.03 }, // Antananarivo, Madagascar

  // Asia
  { location: [35.6895, 139.6917], size: 0.03 }, // Tokyo, Japan
  { location: [37.5665, 126.978], size: 0.03 }, // Seoul, South Korea
  { location: [31.2304, 121.4737], size: 0.03 }, // Shanghai, China
  { location: [22.3193, 114.1694], size: 0.03 }, // Hong Kong
  { location: [13.7563, 100.5018], size: 0.03 }, // Bangkok, Thailand
  { location: [28.6139, 77.209], size: 0.03 }, // New Delhi, India
  { location: [1.3521, 103.8198], size: 0.03 }, // Singapore
  { location: [3.139, 101.6869], size: 0.03 }, // Kuala Lumpur, Malaysia
  { location: [39.9042, 116.4074], size: 0.03 }, // Beijing, China
  { location: [24.7136, 46.6753], size: 0.03 }, // Riyadh, Saudi Arabia

  // Oceania
  { location: [-33.8688, 151.2093], size: 0.03 }, // Sydney, Australia
  { location: [-37.8136, 144.9631], size: 0.03 }, // Melbourne, Australia
  { location: [-36.8485, 174.7633], size: 0.03 }, // Auckland, New Zealand
  { location: [-9.4438, 147.1803], size: 0.03 }, // Port Moresby, PNG
  { location: [-17.7134, 178.065], size: 0.03 }, // Suva, Fiji
  { location: [-6.2146, 106.8451], size: 0.03 }, // Jakarta, Indonesia
  { location: [7.8731, 80.7718], size: 0.03 }, // Sri Lanka (center)
  { location: [-22.9083, -43.1964], size: 0.03 }, // Rio de Janeiro, Brazil
],
          onRender: (state) => {
            if (!isDragging.current) currentPhi += autoRotateSpeed;
            state.phi = currentPhi;
            state.theta = currentTheta;
          },
        });
      } catch (error) {
        console.error("Error initializing globe:", error);
      }
    };

    const timeoutId = setTimeout(() => {
      onResize();
      initGlobe();
    }, 100);

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastMouseX.current = e.clientX;
      lastMouseY.current = e.clientY;
      if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - lastMouseX.current;
      const deltaY = e.clientY - lastMouseY.current;
      const rotationSpeed = 0.01;

      currentPhi += deltaX * rotationSpeed;
      currentTheta = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, currentTheta + deltaY * rotationSpeed));

      lastMouseX.current = e.clientX;
      lastMouseY.current = e.clientY;
    };

    const onMouseUp = () => {
      isDragging.current = false;
      if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    };

    window.addEventListener("resize", onResize);
    canvasRef.current?.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", onResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      canvasRef.current?.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);

      if (globeRef.current) globeRef.current.destroy();
    };
  }, [
    theta,
    dark,
    scale,
    diffuse,
    mapSamples,
    mapBrightness,
    baseColor,
    markerColor,
    glowColor,
    lightModeBaseColor,
    lightModeGlowColor,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative aspect-square w-full max-w-md lg:max-w-lg xl:max-w-2xl ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ cursor: "grab" }} />
    </div>
  );
}
