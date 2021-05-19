import React from "react";
import { Helmet } from "react-helmet";
import UseSiteMetadata from "../../hooks/useSiteMetadata";

/**
 * If no Twitter specific metadata is provided,
 * Twitter can still read the generic OG metadata.
 * The Storyblok SEO OG image and Twitter image make use of the old image block,
 * and thus returns a string, not an object like the new asset block.
 */

const Seo = ({ theTitle, seo, ...props }) => {
  const { title, description } = UseSiteMetadata();

  // If no SEO fields are filled in, use site default description from gatsby.config and page title
  if (seo == null) {
    return (
      <Helmet titleTemplate={`%s | ${title}`} title={theTitle}>
        <meta name="description" content={description} />
      </Helmet>
    );
  }

  // Use the title in SEO component, otherwise use the page title
  const seoTitle = seo.title || theTitle || "";
  const ogTitle = seo.og_title || seoTitle;

  // Use the description in SEO component, otherwise use the one from gatsby.config
  const seoDescription = seo.description || description || "";
  const ogDescription = seo.og_description || seoDescription;

  const ogImage = seo.og_image || "";
  const twitterImage = seo.twitter_image || "";

  return (
    <Helmet titleTemplate={`%s | ${title}`} title={seoTitle}>
      {seoDescription !== "" && (
        <meta name="description" content={seoDescription} />
      )}
      {ogTitle !== "" && <meta property="og:title" content={ogTitle} />}
      {ogDescription !== "" && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage !== "" && <meta property="og:image" content={ogImage} />}
      {seo.twitter_title && (
        <meta name="twitter:title" content={seo.twitter_title} />
      )}
      {seo.twitter_description && (
        <meta name="twitter:description" content={seo.twitter_description} />
      )}
      {twitterImage !== "" && (
        <meta name="twitter:image" content={twitterImage} />
      )}
    </Helmet>
  );
};

export default Seo;
