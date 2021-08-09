import "tailwindcss/tailwind.css";
import { GlobalStyles } from "twin.macro";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "~/styles/vars";
import { global } from "~/styles/global";
import { Header } from "~/components/layouts/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <GlobalStyles />
      <NextNprogress />
      <ThemeProvider theme={theme}>
        <Header />
        <div css={global}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
