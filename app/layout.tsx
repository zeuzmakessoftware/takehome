import "./globals.css";
import { ReactNode } from "react";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Fictional Store | Premium Shopping Experience",
  description: "An elegant e-commerce catalog featuring premium products with a modern interface",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gray-200 font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
