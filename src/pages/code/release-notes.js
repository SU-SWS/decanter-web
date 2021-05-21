import React from "react";
import { graphql } from "gatsby";
import BasicPage from "../../components/pageTypes/basicPage";
import GithubRelease from "../../components/github/ReleaseNotes";

export const query = graphql`
  {
    allGithubData {
      edges {
        node {
          id
          data {
            repository {
              releases {
                edges {
                  node {
                    description
                    descriptionHTML
                    isLatest
                    isPrerelease
                    name
                    tagName
                    url
                    publishedAt
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const CodeReleaseNotesPage = ({
  data: {
    allGithubData: {
      edges: [
        {
          node: {
            data: {
              repository: {
                releases: { edges: releases },
              },
            },
          },
        },
      ],
    },
  },
}) => {
  console.log(releases);
  return (
    <BasicPage>
      <h1>Release Notes</h1>
      {releases.map((release, index) => (
        <>
          <GithubRelease release={release} key={release.node.name} />
          <hr className="su-rs-my-2" />
        </>
      ))}
    </BasicPage>
  );
};

export default CodeReleaseNotesPage;
