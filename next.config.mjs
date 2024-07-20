import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
      @import "/src/styles/default_variables.scss";
      @import "/src/styles/mixins.scss";
      @import "/src/styles/fonts.scss";
    `,
  },
};

export default nextConfig;
