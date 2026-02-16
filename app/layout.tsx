import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const montserrat = localFont({
  src: [
    {
      path: "../public/font/montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/montserrat/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/montserrat/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/montserrat/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cybersecurity Services | SME Security Posture",
  description: "Strengthen your organization with comprehensive security assessments that identify vulnerabilities, reduce exposure, and enhance resilience across your digital infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
