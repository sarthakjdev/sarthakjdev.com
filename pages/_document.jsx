import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@400;500;700;900&family=Poppins:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className={`bg-[url('/new.png')] bg-contain bg-fixed `}>
          <Main />
        </body>

        <NextScript />
      </Html>
    );
  }
}
