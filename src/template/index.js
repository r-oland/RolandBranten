// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Head from "../global-components/Layout/Head";
import { Container } from "../style/Mixins";
import Content from "./Content";
import Header from "./Header";
// =========================

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: ${({ theme: { spacing } }) => spacing.s8};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s10};
  background: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.small};
  max-width: 825px;
  overflow: hidden;
`;

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

      <Container>
        <Wrapper>
          <Header content={headerContent} />
          <Content content={data.sanityBlog._rawContent} />
        </Wrapper>
      </Container>
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
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
      date(formatString: "MMMM Do, YYYY")
    }
  }
`;
