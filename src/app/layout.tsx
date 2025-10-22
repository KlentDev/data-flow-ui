import type { Metadata } from "next";
import { Outfit, Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ToastProvider } from "@/components/ui/toast-animation";
import { ClientWrapper } from "@/components/layout/layout";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "DataFlow - Real-Time Global Analytics Platform",
  description:
    "DataFlow empowers organizations with real-time analytics, global scalability, and enterprise-grade security — delivering instant insights from data streams worldwide.",
  keywords:
    "real-time analytics, global scalability, cloud monitoring, AI insights, data infrastructure, high availability",
  openGraph: {
    title: "DataFlow | Real-Time Global Analytics Platform",
    description:
      "Monitor, analyze, and act on global data instantly. Scalable, secure, and intelligent — built for performance and reliability.",
    type: "website",
    url: "https://dataflow.ai",
    siteName: "DataFlow",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DataFlow - Real-Time Global Analytics Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataFlow | Real-Time Global Analytics",
    description:
      "Process millions of data points per second with global reach, AI insights, and enterprise security.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lexend.variable} ${outfit.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastProvider>
            <ClientWrapper>{children}</ClientWrapper>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
