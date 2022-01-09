import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Waleedo - Web developer</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
