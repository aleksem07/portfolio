import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { generateStaticParams } from "@/components/generateStaticParams";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "portfolio by Alexey Semyachkin",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}

export { generateStaticParams };
