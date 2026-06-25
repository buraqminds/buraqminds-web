import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { ThemeProvider } from "./providers";
import "../styles/index.css";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Buraq Minds",
    default: "Buraq Minds — Intelligence. Security. Innovation.",
  },
  description:
    "Buraq Minds designs smart, secure, and scalable software solutions.",
  keywords: [
    "software agency Pakistan",
    "cybersecurity",
    "SaaS development",
    "AI solutions",
    "VAPT",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${cormorantGaramond.variable} ${outfit.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingWidgets />
        </ThemeProvider>
      </body>
    </html>
  );
}