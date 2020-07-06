// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import ContentBlock from "./ContentBlock";
// =========================

export default function index({ data }) {
  const content = data.sanityBlog?.content;

  return (
    <>
      <Head
        title={data.sanityBlog?.title}
        description={data.sanityBlog?.seo?.description}
        keywords={data.sanityBlog?.seo?.keywords}
      />
      <ContentBlock content={content} />
    </>
  );
}

export const query = graphql`
  query blogPostQuery($title: String!) {
    sanityBlog(title: { eq: $title }) {
      seo {
        keywords
        description
      }
      title
      image {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
      date
      content {
        ... on SanityImageBlock {
          name
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid_withWebp
              }
            }
          }
        }
        ... on SanityTextBlock {
          _rawText
        }
      }
    }
  }
`;
