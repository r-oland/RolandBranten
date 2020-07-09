// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Content from "./Content";
import Header from "./Header";
// =========================

export default function index({ data }) {
  const headerContent = {
    title: data.sanityBlog?.title,
    readTime: data.sanityBlog?.readTime,
    image: data.sanityBlog?.image?.asset?.fluid,
    date: data.sanityBlog?.date,
  };
  const slug = data.sanityBlog.title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace("?", "")
    .slice(0, 200);

  return (
    <>
      <Head
        title={data.sanityBlog?.title}
        description={data.sanityBlog?.subTitle}
        keywords={data.sanityBlog?.keywords}
        path={`blog/${slug}`}
      />

      <Header content={headerContent} />
      <Content content={data.sanityBlog._rawContent} />
    </>
  );
}

export const query = graphql`
  query blogPostQuery($title: String!) {
    sanityBlog(title: { eq: $title }) {
      _rawContent
      keywords
      title
      subTitle
      readTime
      image {
        asset {
          fluid(maxWidth: 1600) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
      date(formatString: "MMMM Do, YYYY")
    }
  }
`;
