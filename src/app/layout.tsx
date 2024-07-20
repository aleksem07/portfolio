import { ReactNode } from "react";
import "@/styles/main.scss";
import ParallaxProviders from "./parallax-providers";
import { Providers } from "@/redux/provider";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

type Props = {
  children: ReactNode;
};

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "portfolio by Alexey Semyachkin",
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <Header />
          <ParallaxProviders>{children}</ParallaxProviders>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
