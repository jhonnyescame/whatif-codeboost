import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText} from "../styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Favicon*/}
          <link rel="shortcut icon" type="image/png" href="/favicon.png" />
          {/* Google Fonts */}
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html:getCssText() }}
          ></style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
