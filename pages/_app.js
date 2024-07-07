import Head from "next/head";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>VegaMedia | Digital marketing</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#1A232E" />
      <meta
        name="description"
        content="we are passionate about helping businesses thrive in the digital landscape. As a full-service digital marketing agency, we offer a wide range of services tailored to meet the unique needs of our clients"
      />
      <meta
        name="keywords"
        content="digital marketing, digital marketing agency, digital marketing, real estate luxury, jet charter marketing india, online advertising, SEO optimization, yacht networking mission, mission sails, cruises, rentals, trips, luxury packages, campaigns, solbenef, fans, hashtags, scripts, ping, listing, hotel, weekend, catering services, amen, digital marketing salary, what is digital marketing, is digital marketing, digital marketing company, digital marketing jobs, digital marketing services, digital marketing course, power digital marketing, digital marketing strategy, digital marketing certificate, freelance digital marketing, vegamedia, Vegamedia, VegaMedia"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vegamedia.online" />
      <meta property="og:title" content="VegaMedia | Digital Marketing Services" />
      <meta
        property="og:description"
        content="VegaMedia is a Digital Marketing Services Company"
      />
      <meta property="og:image" content="./assets/images/logo/logo.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://Vegamedia.online" />
      <meta property="twitter:title" content="VegaMedia| Digital Marketing Services" />
      <meta
        property="twitter:description"
        content="Vegamedia is a Digital Marketing Services Company"
      />
      <meta property="twitter:image" content="./assets/images/logo/logo.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="./assets/images/favicon/android-chrome-512x512.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="./assets/images/favicon/android-chrome-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="./assets/images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./assets/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./assets/images/favicon/favicon-16x16.png"
      />
      <link rel="icon" type="image/x-icon" href="./assets/images/favicon/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <body data-spy="scroll" data-target="#navbarSupportedContent" data-offset="90">
      <script type="text/javascript">
        (function() {
          window.sib = {
            equeue: [],
            client_key: "c0cr519o5kneubqda7gjp3l7"
          };
          /* OPTIONAL: email for identify request*/
          // window.sib.email_id = 'example@domain.com';
          window.sendinblue = {};
          for (var j = ['track', 'identify', 'trackLink', 'page'], i = 0; i < j.length; i++) {
            (function(k) {
              window.sendinblue[k] = function() {
                var arg = Array.prototype.slice.call(arguments);
                (window.sib[k] || function() {
                  var t = {};
                  t[k] = arg;
                  window.sib.equeue.push(t);
                })(arg[0], arg[1], arg[2]);
              };
            })(j[i]);
          }
          var n = document.createElement("script"),
            i = document.getElementsByTagName("script")[0];
          n.type = "text/javascript", n.id = "sendinblue-js",
          n.async = !0, n.src = "https://sibautomation.com/sa.js?key=" + window.sib.client_key,
          i.parentNode.insertBefore(n, i), window.sendinblue.page();
        })();
      </script>
      <Component {...pageProps} />
    </body>
  </>
);

export default MyApp;
