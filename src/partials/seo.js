import React from "react";
import { Helmet } from "react-helmet";
import SbEditable from "storyblok-react";
import UseSiteMetadata from "../../hooks/useSiteMetadata";
import transformImage from "../../utilities/transformImage";

/**
 * If no Twitter specific metadata is provided,
 * Twitter can still read the generic OG metadata.
 * The Storyblok SEO OG image and Twitter image make use of the old image block,
 * and thus returns a string, not an object like the new asset block.
 */

const Seo = ({ blok: { title: theTitle, seo }, blok }) => {
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

  let ogImage = seo.og_image ?? "";
  let twitterImage = seo.twitter_image ?? "";

  if (ogImage !== "") {
    ogImage = transformImage(ogImage, "/1200x630");
  }

  if (twitterImage !== "") {
    twitterImage = transformImage(twitterImage, "/1200x600");
  }

  return (
    <SbEditable content={blok}>
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
    </SbEditable>
  );
};

export default Seo;
