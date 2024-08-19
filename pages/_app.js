import Head from "next/head";
import Script from "next/script"; 
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>VegaMedia | Digital marketing.</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#1A232E" />
      <meta
        name="description"
        content="We are passionate about helping businesses thrive in the digital landscape. As a full-service digital marketing agency, we offer a wide range of services tailored to meet the unique needs of our clients."
      />
      <meta
        name="keywords"
        content="digital marketing, digital marketing agency, real estate luxury, jet charter marketing india, online advertising, SEO optimization, yacht networking mission, cruises, rentals, luxury packages, campaigns, vegamedia"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vegamedia.online" />
      <meta property="og:title" content="VegaMedia | Digital Marketing Services" />
      <meta property="og:description" content="VegaMedia is a Digital Marketing Services Company" />
      <meta property="og:image" content="/assets/images/logo/logo.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://Vegamedia.online" />
      <meta property="twitter:title" content="VegaMedia | Digital Marketing Services" />
      <meta property="twitter:description" content="VegaMedia is a Digital Marketing Services Company" />
      <meta property="twitter:image" content="/assets/images/logo/logo.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/assets/images/favicon/android-chrome-512x512.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/favicon/android-chrome-192x192.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png" />
      <link rel="icon" type="image/x-icon" href="/assets/images/favicon/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>

    {/* Google tag (gtag.js) */}
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-72PC6FML97"
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-72PC6FML97');
        `,
      }}
    />

    <Script src="https://consent-eu.cookiefirst.com/sites/vegamedia.in-c8cbffa2-4e22-4c58-9083-dba83d296527/consent.js" />

    <Component {...pageProps} />
  </>
);

export default MyApp;
