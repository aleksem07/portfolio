import { ReactNode } from "react";
import "@/styles/main.scss";
import ParallaxProviders from "./parallax-providers";
import { Providers } from "@/redux/provider";

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <ParallaxProviders>{children}</ParallaxProviders>
        </Providers>
      </body>
    </html>
  );
}
