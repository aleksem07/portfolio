import createNextIntlPlugin from "next-intl/plugin";
import path from  "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  distDir: "dist",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
      @import "/src/styles/default_variables.scss";
      @import "/src/styles/mixins.scss";
      @import "/src/styles/fonts.scss";
    `,
  },
};

export default withNextIntl(nextConfig);
