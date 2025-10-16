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
  title: "Medici Land Governance - Revolutionizing Land Governance",
  description: "Transforming land governance through AI, Blockchain & Digital Innovation",
  keywords:
    "land governance, blockchain, AI, property rights, digital transformation",
  openGraph: {
    title: "Medici Land Governance",
    description:
      "Revolutionizing Land Governance Through AI, Blockchain & Digital Innovation",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lexend.variable} ${outfit.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ToastProvider>
            <ClientWrapper>{children}</ClientWrapper>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
