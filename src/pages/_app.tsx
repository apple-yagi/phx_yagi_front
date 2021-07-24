import Head from "next/head";
import { css, ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/vars";
import "tailwindcss/tailwind.css";

const global = css`
  a {
    cursor: pointer;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <div className='bg-gray-100' css={global}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
