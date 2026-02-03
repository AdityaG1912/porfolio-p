import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Aditya Gaikwad",
  description:
    "Portfolio website created showcasing work,projects and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class" // toggles 'dark' class on <html>
          defaultTheme="dark" // default dark mode
          enableSystem // respects system preference
          disableTransitionOnChange // avoids flicker
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
