import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import "./globals.css";

const font = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lingam Thuvarakan | Portfolio",
  description: "Portfolio of Lingam Thuvarakan — Full‑stack developer, Flutter engineer, and security‑minded builder.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem("theme");
                  var preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                  var theme = stored || preferred;
                  document.documentElement.classList.toggle("dark", theme === "dark");
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${font.className} theme-bg theme-text antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
