import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Waleedo - Web developer</title>
          {/* <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          /> */}
          <meta name="description" content="Portfolio of Walid Hamdi" />
        </Head>
        <body className="hover:cursor-pointer h-screen w-screen font-body bg-gradient-to-r from-[#2c3e50] to-[#000000] tracking-wider  text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
