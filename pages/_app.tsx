import Head from "next/head";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
