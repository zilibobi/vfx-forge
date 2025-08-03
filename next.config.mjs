import nextra from "nextra";

const withNextra = nextra({});

export default withNextra({
  output: "export",
  trailingSlash: true,
  basePath: "/forge-docs",
  assetPrefix: "/forge-docs",
  images: {
    unoptimized: true,
  },
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./src/mdx-components.tsx",
    },
  },
});
