import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap" rel="stylesheet" />          
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet" />
          
          <meta charSet="UTF-8" />
          <meta name="description" content="Gordura de Palma Du Pará" />
          <meta name="keywords" content="Gordura, Palma, Pará" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}