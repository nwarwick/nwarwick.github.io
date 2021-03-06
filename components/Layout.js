import '../static/scss/application.scss'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const Layout = props => {
  const { pageTitle, metaContent, navTitle, canonicalUrl, children } = props

  return (
    <React.Fragment>
      <Head>
        {pageTitle && <title>{pageTitle}</title>}
        <meta name='author' content='Nick Warwick' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
          key='viewport'
        />
        <meta name='description' content={metaContent} />
        <link
          rel='shortcut icon'
          type='image/x-icon'
          href='/static/favicon.ico'
        />
        <link rel='canonical' href={canonicalUrl} />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=UA-87075310-2`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-87075310-2');
          `
          }}
        />
        <meta
          name='twitter:image:src'
          content='https://res.cloudinary.com/dbiyjyi0a/image/upload/v1573401017/portfolio/og-image.jpg'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dbiyjyi0a/image/upload/v1573401017/portfolio/og-image.jpg'
        />
        <meta property='og:description' content={metaContent} />
      </Head>
      {navTitle && <Nav navTitle={navTitle} />}
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
