import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolidWorks Academy DZ",
  description: "Online SolidWorks training for Algerian students and young engineers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}