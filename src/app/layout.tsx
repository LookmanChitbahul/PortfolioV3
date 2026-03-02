import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lookman_v3.0.77 | Mercenary_System_Architect",
  description: "Digital Portfolio of Lookman Ashraf Chitbahul. System Architect specializing in Agentic AI, NextJS ecosystems, and Digital Infiltration.",
  keywords: ["Lookman Chitbahul", "Cyberpunk Portfolio", "Mercenary Developer", "Agentic AI", "Gemini 3 Flash", "System Architect"],
  authors: [{ name: "Lookman Ashraf Chitbahul" }],
  openGraph: {
    title: "Lookman_v3.0.77 | Digital_System_Architect",
    description: "Neural Interface & Digital Architect based in Mauritius.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
