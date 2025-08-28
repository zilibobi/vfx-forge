import nextra from "nextra";
import config from "./src/config";

const withNextra = nextra({});

export default withNextra({
  output: "export",
  trailingSlash: true,
  basePath: config.path,
  assetPrefix: config.path,
  images: {
    unoptimized: true,
  },
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./src/mdx-components.tsx",
    },
  },
});
