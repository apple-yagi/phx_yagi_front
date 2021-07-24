import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import { theme } from "~/styles/vars";
import { global } from "~/styles/global";
import { Header } from "~/components/layouts/Header";
import "tailwindcss/tailwind.css";
import { Navigation } from "~/components/layouts/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Navigation />
        <div className='bg-green-50' css={global}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
