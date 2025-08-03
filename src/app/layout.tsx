import { Footer, Layout, Navbar } from "nextra-theme-docs";

import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

import "nextra-theme-docs/style.css";
import "./globals.css";

import Logo from "../components/Logo";

export const metadata = {};

const navbar = (
  <Navbar
    logo={
      <>
        <Logo width={48} height={48} />
        <span>VFX Forge</span>
      </>
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
