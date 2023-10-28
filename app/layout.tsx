import "@/app/globals.css";
import "@/app/glass.css";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "./providers";
import { cn } from "@/lib/utils";
 
const pretendard = localFont({
  src: "../fonts/woff2/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-ptd",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(pretendard.className)}>
        <div id="container">
          <Providers>
            <Nav /> {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
