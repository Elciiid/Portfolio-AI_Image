import type { Metadata } from "next";
import { Hanken_Grotesk, Italiana, Libre_Caslon_Display } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "./globals.css";

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Libre_Caslon_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const hero = Italiana({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jonas David - AI Fashion & Jewelry Imagery",
  description:
    "AI fashion and jewelry imagery made with Stable Diffusion: a written visual system, a 15-point check, portrait 3:4 and 4:5 deliveries.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Jonas David - AI Fashion & Jewelry Imagery",
    description:
      "AI fashion and jewelry imagery: black and gold, golden-hour light, shallow focus.",
    type: "website",
    siteName: "Jonas David Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Jonas David - AI Fashion & Jewelry Imagery",
    description:
      "AI fashion and jewelry imagery made with Stable Diffusion: a written visual system, a 15-point check, portrait 3:4 and 4:5 deliveries.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${body.variable} ${display.variable} ${hero.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
