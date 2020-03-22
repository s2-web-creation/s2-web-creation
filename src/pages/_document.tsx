import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Header } from '~/components/Header'
import { Footer } from '~/components/Footer'

interface CustomDocumentInterface {
  url: string
  title: string
  description: string
}

class CustomDocument extends Document implements CustomDocumentInterface {
  url = 'https://example.com'
  title = 'S2 Web Creation'
  description = 'Demo of Next.js'

  static async getInitialProps(ctx): Promise<any> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = (): any =>
        originalRenderPage({
          enhanceApp: (App) => (props): void =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='ja-JP'>
        <Head>
          <meta name='description' content={this.description} />
          <meta name='theme-color' content='#333' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={this.title} />
          <meta property='og:url' content={this.url} />
          <meta property='og:description' content={this.description} />
          <meta property='og:site_name' content={this.title} />
          <meta property='og:image' content={`${this.url}/ogp.png`} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={this.title} />
          <meta name='twitter:description' content={this.description} />
          <meta name='twitter:image' content={`${this.url}/ogp.png`}></meta>
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
