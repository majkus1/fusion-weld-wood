// import Head from 'next/head'
import '../styles/style.css'
// import '../styles/style.css.map'
// import '../styles/style.scss'
import Head from 'next/head'
import ScrollToTop from '../components/scrolltotop'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				id='gtag-src'
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script id='gtag-config' strategy='lazyOnload'>
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
			</Script>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ScrollToTop />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
