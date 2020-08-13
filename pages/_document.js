import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <script src='noflash.js' />
          <Main />
          <NextScript />
        </body>
        <script src='https://cdn.polyfill.io/v2/polyfill.js?features=Element.prototype.classList'></script>
        <script src='https://unpkg.com/focus-visible'></script>
      </Html>
    );
  }
}

export default MyDocument;
