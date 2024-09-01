import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/layouts/Footer";
import Sidebar from "@/components/layouts/Sidebar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sidebar Template",
  description:
    "A functional retractable sidebar for Next.js using shadcn/ui complete with desktop and mobile responsiveness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Sidebar />
          <main className="min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 lg:ml-72">
            {children}
          </main>
          <footer className="lg:ml-72">
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
