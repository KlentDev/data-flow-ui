"use client";

import React, { useEffect, useRef } from "react";
import createGlobe, { Globe as GlobeInstance } from "cobe";

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
  const frameRef = useRef<number>();
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
      if (containerRef.current) {
        width = containerRef.current.offsetWidth;
      }
    };

    const initGlobe = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }

      if (frameRef.current) cancelAnimationFrame(frameRef.current);

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
          onRender: (state: { phi: number; theta: number }) => {
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
      canvasRef.current?.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      const frameId = frameRef.current;
      if (frameId) cancelAnimationFrame(frameId);

      const globeInstance = globeRef.current;
      if (globeInstance) globeInstance.destroy();
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
