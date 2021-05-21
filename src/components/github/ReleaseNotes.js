import React from "react";
import { dcnb } from "cnbuilder";
import { Link } from "gatsby";
import { Heading } from "decanter-react";

const ReleaseNotes = ({ className, release, index, ...props }) => {
  const html = release.node.descriptionHTML
    .replace(/<h1>/g, "<p><strong>")
    .replace(/<\/h1>/g, "</strong></p>");
  const publishedTime = new Date(release.node.publishedAt);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const publishedString = publishedTime.toLocaleDateString("en-US", options);
  return (
    <article className={dcnb("", className)}>
      <Heading level={2} size={3}>
        <Link to={release.node.url}>{release.node.name}</Link>
      </Heading>
      <p>Published: {publishedString}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
};

export default ReleaseNotes;
