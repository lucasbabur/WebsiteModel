import type { AppProps } from "next/app";
import { FirebaseProvider } from "../firebase/firebaseContext";
import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CustomTheme } from "@/theme";

import { SimpleSidebar } from "@/components/generalAbstractions/sidebar";
import { SidebarNavItems } from "@/config/sideBarConfig";
import { SidebarProvider } from "@/components/generalAbstractions/sidebar/sidebarContext";
import { FirebaseInitializer } from "@/firebase/firebaseAppConfig";
import { SEO, LogoObject } from "@/config/metaConfigs";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const getLayout = router.pathname.includes("/logged/")
    ? (page: React.ReactNode) => (
        <SimpleSidebar SidebarNavItems={SidebarNavItems}>{page}</SimpleSidebar>
      )
    : (page: React.ReactNode) => <>{page}</>;

  // This will either wrap the page in a SimpleSidebar or just return it as is
  const pageLayout = getLayout(
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>,
  );

  return (
    <ChakraProvider theme={CustomTheme}>
      <FirebaseProvider>
        <FirebaseInitializer />
        <Head>
          <title>{SEO.title}</title>
          <link rel="shortcut icon" href={LogoObject.favicon} />
          <meta name="description" content={SEO.description} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/image/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/image/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/image/favicon-16x16.png"
          />
        </Head>

        <SidebarProvider standardValue="testPage 1">
          {pageLayout}
        </SidebarProvider>
      </FirebaseProvider>
    </ChakraProvider>
  );
}
