import { useEffect } from 'react'

import { config } from '@fortawesome/fontawesome-svg-core'
import TagManager from 'react-gtm-module'
import { Helmet } from 'react-helmet'

import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '../../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-W8Q9GLQ' })
  }, [])

  return (
    <>
      <Helmet
        encodeSpecialCharacters={true}
        // titleTemplate="%s | Sua Casa - Café & Guaraná"
        defaultTitle="Sua Casa - Café & Guaraná"
      >
        <html lang="pt-BR" amp />
        <title itemProp="name" lang="pt-BR">
          Sua Casa - Café & Guaraná
        </title>
        <meta
          name="description"
          content="Sua Casa - Café e Guaraná é uma cafeteria localizada em Natal - Rio Grande do Norte"
        />
        <meta
          name="keywords"
          content="sua casa, café, guaraná, guaraná do amazonas, cafeteria, natal, rio grande do norte, rn, salgado, fitness, doces"
        />
        <meta property="og:type" content="cafe" />
        <meta
          property="og:description"
          content="Um lugar que você ama estar 💜"
        />
        <link rel="canonical" href="http://suacasanatal.com.br/" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
