import Head from "next/head";
import Link from 'next/link';
import "../../scss/index.scss";

const HTMLHead = props => (
  <>
  <Head>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </Head>
  </>
);

export default HTMLHead;
