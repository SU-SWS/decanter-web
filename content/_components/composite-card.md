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
        "card_body": "<p>This is a horizontal card with image link enabled with a button link as the call-to-action.</p>",
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
        "card_body": "<p>This is an icon card a call-to-action link and no button. Everything is center-aligned.</p>",
        "card_link": "https://stanford.edu",
        "card_cta_attributes": "rel='nofollow noopener'",
        "card_cta_label": "This is a call-to-action link",
        "card_button_label": ""
      }
---

