import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "MEGHA Cloud Consulting | Practical Cloud Solutions",
  description: "Practical cloud consulting for small businesses in Ontario. We help you move to the cloud, improve performance, and keep systems reliable.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="flex min-h-screen flex-col font-sans bg-background text-foreground">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
