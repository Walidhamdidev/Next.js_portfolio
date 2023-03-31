import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
<<<<<<< HEAD
            content="Walid Hamdi as web developer | flutter | react native | React.js | Next.js | ML & DevOps"
=======
            content="Walid Hamdi as software developer, Programming languages (e.g. Java, Python, JavaScript), Development tools (e.g. Git, Visual Studio Code, Eclipse), Frameworks (e.g. Angular, React, Node.js), Software development methodologies (e.g. Agile, Scrum, Waterfall)
Databases (e.g. MySQL, MongoDB, PostgreSQL), Cloud computing platforms (e.g. AWS, Azure, Google Cloud), DevOps (e.g. Continuous Integration/Continuous Deployment, Infrastructure as Code), Mobile app development (e.g. Android, iOS), Web development (e.g. HTML, CSS, JavaScript), Machine learning (e.g. TensorFlow, PyTorch, scikit-learn)"
>>>>>>> 7b94c69fd89c3b6d9a6675696377c4cc53836fa5
          />
        </Head>
        <body className="h-screen w-screen font-body bg-gradient-to-r from-[#2c3e50] to-[#000000] tracking-wider  text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
