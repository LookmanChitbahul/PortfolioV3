import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lookman Ashraf Chitbahul | Software Engineering Undergraduate",
  description: "Portfolio of Lookman Ashraf Chitbahul, a Software Engineering Undergraduate based in Mauritius. Specializing in React, backend integrations, and AI-powered solutions.",
  keywords: ["Lookman Ashraf Chitbahul", "Software Engineer Mauritius", "React Developer", "Strapi", "AI Integration", "University of Mauritius"],
  authors: [{ name: "Lookman Ashraf Chitbahul" }],
  openGraph: {
    title: "Lookman Ashraf Chitbahul | Software Engineering Undergraduate",
    description: "Portfolio of Lookman Ashraf Chitbahul, a Software Engineering Undergraduate based in Mauritius.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lookman Ashraf Chitbahul | Software Engineering Undergraduate",
    description: "Portfolio of Lookman Ashraf Chitbahul, a Software Engineering Undergraduate based in Mauritius.",
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
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
