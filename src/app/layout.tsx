import Image from "next/image";

import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";

import { getPageMap } from "nextra/page-map";
import config from "../config";

import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata = {};

const navbar = (
  <Navbar
    logo={
      <div className="flex gap-4 items-center">
        <img src={`${config.path}/images/logo.svg`} width="42" height="42" />
        <span className="font-bold text-2xl">VFX Forge</span>
      </div>
    }
  />
);

const footer = <Footer>MIT {new Date().getFullYear()} © zilibobi.</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head></Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/zilibobi/forge-docs/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
