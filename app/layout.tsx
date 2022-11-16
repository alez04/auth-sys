"use client";

import "../styles/globals.css";

import Navigation from "../components/navigation.component";
import Footer from "../components/footer.component";

import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <RecoilRoot>
        <head />
        <body>
          <Navigation />
          {children}
          <Footer />
        </body>
      </RecoilRoot>
    </html>
  );
}
