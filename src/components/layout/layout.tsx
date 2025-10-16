// src/components/layout/ClientWrapper.tsx
"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { AdvancedLoading } from "@/components/ui/advanced-loading";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <AdvancedLoading />;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
