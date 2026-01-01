import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Navigation } from "@/components/Navigation";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Life Coach AI",
  description: "Your AI-powered productivity system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.className} bg-background text-foreground min-h-screen pb-20 md:pb-0`}>
        <AppProvider>
          <Navigation />
          <main className="pt-4 md:pt-20 min-h-screen">
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
