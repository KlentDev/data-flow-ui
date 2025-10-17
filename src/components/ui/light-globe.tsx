"use client";

import { useRef, useEffect } from "react";
import createGlobe from "cobe";

type GlobeInstance = ReturnType<typeof createGlobe>;

interface GlobeProps {
  className?: string;
  config?: {
    theta?: number;
    dark?: number;
    scale?: number;
    diffuse?: number;
    mapSamples?: number;
    mapBrightness?: number;
    baseColor?: [number, number, number];
    markerColor?: [number, number, number];
    glowColor?: [number, number, number];
    markers?: { location: [number, number]; size: number }[];
  };
}

const hexToRgbNormalized = (hex: string): [number, number, number] => {
  let r = 0, g = 0, b = 0;
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

export function LightGlobe({ className = "", config }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<GlobeInstance | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const thetaRef = useRef(config?.theta ?? 0.25);
  const isDragging = useRef(false);
  const lastMouseX = useRef(0);
  const lastMouseY = useRef(0);
  const autoRotateSpeed = 0.002;

  useEffect(() => {
    let width = 0;
    let currentPhi = 0;
    let currentTheta = thetaRef.current;
    const canvas = canvasRef.current;
    const container = containerRef.current;

    const updateSize = () => {
      if (container) {
        width = container.offsetWidth;
      }
    };

    const initGlobe = () => {
      if (!canvas || !container) return;

      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }

      updateSize();
      if (width === 0) return;

      const pixelRatio = Math.min(2, window.devicePixelRatio);

      // Set canvas dimensions
      canvas.width = width * pixelRatio;
      canvas.height = width * pixelRatio;

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      const resolvedBaseColor: [number, number, number] =
        config?.baseColor ?? hexToRgbNormalized(prefersDark ? "#ffffff" : "#60a5fa");

      const resolvedGlowColor: [number, number, number] =
        config?.glowColor ?? hexToRgbNormalized(prefersDark ? "#ffffff" : "#3b82f6");

      const resolvedMarkerColor: [number, number, number] =
        config?.markerColor ?? hexToRgbNormalized("#ef4444");

      globeRef.current = createGlobe(canvas, {
        width: width * pixelRatio,
        height: width * pixelRatio,
        devicePixelRatio: pixelRatio,
        phi: 0,
        theta: currentTheta,
        dark: config?.dark ?? 0,
        diffuse: config?.diffuse ?? 1.2,
        mapSamples: config?.mapSamples ?? 16000,
        mapBrightness: config?.mapBrightness ?? 6,
        baseColor: resolvedBaseColor,
        glowColor: resolvedGlowColor,
        markerColor: resolvedMarkerColor,
        markers: config?.markers ?? [
          { location: [-13.1339, 27.8493], size: 0.03 },
          { location: [-1.9403, 29.8739], size: 0.03 },
          { location: [6.4281, -9.4295], size: 0.03 },
          { location: [5.0, -59.75], size: 0.03 },
          { location: [17.3578, -62.782998], size: 0.03 },
          { location: [8.4657, -13.2317], size: 0.03 },
          { location: [39.2904, -76.6122], size: 0.03 },
          { location: [38.9784, -92.4194], size: 0.03 },
          { location: [39.9612, -82.9988], size: 0.03 },
          { location: [27.9944, -81.7603], size: 0.03 },
          { location: [36.7783, -119.4179], size: 0.03 },
          { location: [39.321, -111.0937], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.03 },
        ],
        scale: config?.scale ?? 1,
        offset: [0, 0],
        opacity: 0.9,
        onRender: (state) => {
          if (!isDragging.current) currentPhi += autoRotateSpeed;
          state.phi = currentPhi;
          state.theta = currentTheta;
        },
      });
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastMouseX.current = e.clientX;
      lastMouseY.current = e.clientY;
      if (canvas) canvas.style.cursor = "grabbing";
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
      if (canvas) canvas.style.cursor = "grab";
    };

    // Use the same timeout as DarkGlobe
    const timeoutId = setTimeout(() => {
      updateSize();
      initGlobe();
    }, 100);

    window.addEventListener("resize", updateSize);
    canvas?.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateSize);
      canvas?.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      if (globeRef.current) globeRef.current.destroy();
    };
  }, [config]);

  return (
    <div
      ref={containerRef}
      className={`relative aspect-square w-full max-w-md lg:max-w-lg xl:max-w-2xl ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ cursor: "grab", opacity: 1, transition: "opacity 0.5s" }}
      />
    </div>
  );
}