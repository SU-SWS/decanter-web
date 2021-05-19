/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-danger */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/**
 * Credit where credit is deserved.
 * @see: https://github.com/christo-pr/dangerously-set-html-content
 *
 * Use this widget with caution. There are no safeguards on what it can do. It
 * is also not good practice to inject and manipulate the page outside of
 * REACT as that can lead to irregularities and troubles.
 */

import React, { useEffect, useRef } from "react";
import SbEditable from "storyblok-react";

const Embed = ({ blok: { markup, pre_markup, post_markup }, blok }) => {
  let premarkup;
  let postmarkup;
  const myEmbed = useRef(null);

  if (pre_markup) {
    premarkup = (
      <div
        dangerouslySetInnerHTML={{
          __html: pre_markup,
        }}
      />
    );
  }

  if (post_markup) {
    postmarkup = (
      <div
        dangerouslySetInnerHTML={{
          __html: post_markup,
        }}
      />
    );
  }

  useEffect(() => {
    if (!markup) return;

    // Create a 'tiny' document and parse the html string.
    // https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
    const miniDom = document.createRange().createContextualFragment(markup);

    // Force the scripts in the embed script field to load sync.
    const scripts = miniDom.querySelectorAll("script");
    if (scripts.length >= 1) {
      for (const item of scripts) {
        if (item.src && item.src.length > 1) {
          item.async = 0;
          item.defer = 0;
        }
      }
    }

    // Clear the container.
    myEmbed.current.innerHTML = "";

    // Append the new content.
    myEmbed.current.appendChild(miniDom);
  }, [markup]);

  return (
    <SbEditable content={blok}>
      {premarkup}
      <div ref={myEmbed} />
      {postmarkup}
    </SbEditable>
  );
};

export default Embed;
