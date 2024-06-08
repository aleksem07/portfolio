import { ReactNode } from "react";
import "./globals.scss";
import "@/styles/main.scss";
import ParallaxProviders from "./parallax-providers";

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <ParallaxProviders>{children}</ParallaxProviders>
      </body>
    </html>
  );
}
