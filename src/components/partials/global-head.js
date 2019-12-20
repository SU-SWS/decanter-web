import Head from "next/head";
import "../../scss/index.scss";

const HTMLHead = props => (
  <>
  <Head>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130026260-16"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-130026260-16');
      </script>
  </Head>
  </>
);

export default HTMLHead;
