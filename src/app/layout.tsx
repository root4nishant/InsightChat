import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/custom/nav";
// import Footer from "@/components/custom/Footer";
// import Analytics from "@/components/Analytics";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "AI Agents for Whatsapp Insight",
  description:
    "Empowering eCommerce brands with AI-driven automation for customer engagement, support, and growth. AI agents that transform how brands sell and interact with customers.",
};

const primaryFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-primary",
});

const secondaryFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-secondary",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo_ico.ico" sizes="any" />
          <link rel="icon" type="image/png" href="/logo_new.png" />
        </head>
        <body
          className={`${primaryFont.variable} ${secondaryFont.variable} antialiased min-h-screen flex flex-col`}
        >
          {/* <Analytics /> */}
          {/* <Navbar /> */}
          <main className="flex-grow">{children}</main>
          {/* <Footer /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
