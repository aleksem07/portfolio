import { ReactNode } from "react";
import "@/styles/main.scss";
import ParallaxProviders from "./parallax-providers";
import { Providers } from "@/redux/provider";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import YandexMetrika from "@/components/metriks/yandex-metrika";
import { Suspense } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "aleksem07 - Создание сайта",
  description: "Создание динамичных и адаптивных веб-сайтов для вашего бизнеса",
  other: {
    "google-site-verification": "mR5_SfZjoIpQ58orrLcVxJBAc31P9etE40nyvRqeLsc",
    "yandex-verification": "71b8da4cc3d2aed0",
  },
  keywords: [
    "разработка веб-сайтов",
    "сайт для вашего бизнеса",
    "HTML",
    "CSS",
    "JavaScript",
    "создать лендинг",
  ],
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <Suspense>
            <YandexMetrika />
          </Suspense>
          <Header />
          <ParallaxProviders>{children}</ParallaxProviders>
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-FYV1211LVS" />
    </html>
  );
}
