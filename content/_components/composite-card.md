---
title: Card
component: composite-card
bottomcontent: ''
browsers: ''
bgcolor: ''
egwidth: 450px
modifier_css:
  - css_class: su-card--horizontal
    description: ''
    egwidth: 1000px
    source_json: |-
      {
        "card_media_image_src": "https://placeimg.com/800/500/any",
        "card_media_wrapper_modifier_class": "su-aspect-ratio",
        "card_media_content_attributes": "alt='Example image'",
        "card_allow_media_link": true,
        "card_super_headline": "This is a super headline",
        "card_headline": "Headline goes here",
        "card_allow_headline_link": false,
        "card_body": "<p>This is a horizontal card with image link enabled. This example has a button link as the call-to-action.</p>",
        "card_link": "https://stanford.edu",
        "card_cta_attributes": "rel='nofollow noopener'",
        "card_cta_label": "",
        "card_button_label": "Button Label"
      }
  - css_class: su-card--icon
    egwidth: 450px
    source_json: |-
      {
        "card_media_icon_image_src": "/img/icon-cubes.png",
        "card_media_content_attributes": "alt='' aria-hidden='true'",
        "card_super_headline": "This is a super headline",
        "card_headline": "Headline goes here",
        "card_allow_headline_link": false,
        "card_body": "<p>This is an icon card. This example has a call-to-action link and no button. Everything is center-aligned.</p>",
        "card_link": "https://stanford.edu",
        "card_cta_attributes": "rel='nofollow noopener'",
        "card_cta_label": "CTA link label",
        "card_button_label": ""
      }
  - css_class: su-card--link
    egwidth: 450px
    source_json: |-
      {
        "card_super_headline": "This is a super headline",
        "card_headline": "Headline goes here",
        "card_allow_headline_link": false,
        "card_allow_media_link": false,
        "card_media_link": "",
        "card_body": "<p>This whole card is a link so there are no link buttons nor CTA-links within.</p>",
        "card_link": "https://stanford.edu",
        "card_cta_attributes": "rel='nofollow noopener'"
      }
  - css_class: su-card--video
    source_json: |-
      {
        "card_media_video_src": "https://news-media.stanford.edu/wp-content/uploads/2018/01/18153719/palau_swimmerloop_final.mp4",
        "card_media_wrapper_modifier_class": "su-aspect-ratio",
        "card_media_content_attributes": "autoplay loop muted",
        "card_allow_media_link": false,
        "card_media_link": "",
        "card_super_headline": "This is a super headline",
        "card_headline": "Headline goes here",
        "card_allow_headline_link": false,
        "card_body": "<p>This variant allows for a self-hosted video to be displayed. In this example, the video autoplays and loops, and it has a button link as the call-to-action. The example video container has the <i>.su-aspect-ratio</i> class which restricts the video's aspect ratio to the default 16:9.</p>",
        "card_link": "https://stanford.edu",
        "card_cta_attributes": "rel='nofollow noopener'",
        "card_cta_label": "",
        "card_button_label": "Button Label"
      }
  - css_class: su-card--minimal
    source_json: |-
      {
        "card_media_wrapper_modifier_class": "su-aspect-ratio",
        "card_media_content_attributes": "alt='Example image'",
        "card_allow_media_link": false,
        "card_media_link": "",
        "card_super_headline": "This is a super headline",
        "card_headline": "Headline goes here",
        "card_allow_headline_link": false,
        "card_body": "<p>The minimal card variant has no border, drop shadow or background color. This example has a call-to-action link and no link button. Do not use the <i>.su-card--minimal</i> variant with the <i>.su-card--link</i> variant.</p>",
        "card_link": "https://stanford.edu",
        "card_cta_attributes": "rel='nofollow noopener'",
        "card_cta_label": "CTA link label",
        "card_button_label": ""
      }
  - css_class: su-card--embed
    source_json: |-
      {
        "card_media_wrapper_modifier_class": "su-aspect-ratio",
        "card_media_content_attributes": "",
        "card_allow_media_link": false,
        "card_media_link": "",
        "card_super_headline": "This is a super headline",
        "card_headline": "Headline goes here",
        "card_allow_headline_link": false,
        "card_media_custom": "<iframe width='560' height='315' src='https://www.youtube.com/embed/tZ2GZhND7s0' frameborder='0' allowfullscreen></iframe>",
        "card_body": "<p>This is a card with an embedded media element, e.g., a YouTube or Vimeo video. This example has a button link as the call-to-action.</p>",
        "card_link": "https://stanford.edu",
        "card_cta_attributes": "rel='nofollow noopener'",
        "card_cta_label": "",
        "card_button_label": "Button Label"
      }
---

