import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfólio do Julio | Desenvolvedor de Automação & Backend",
  description: "Portfólio de um desenvolvedor de automação em C# e Python especializado em automação web, manipulação de Excel e desenvolvimento backend.",
  keywords: ["desenvolvedor", "automação", "C#", "Python", "Selenium", "backend", "API"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-[#020617] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
