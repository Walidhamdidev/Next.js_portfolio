import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.css";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Walid Hamdi - Software Developer</title>
      </Head>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
