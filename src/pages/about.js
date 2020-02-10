// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
import Content from "../page-components/about/Content";
// =========================

export default function About({ data }) {
  const t = data.file.childAboutJson;

  return (
    <Layout page="aboutOL">
      <Head
        title={t.SEO[0].title}
        description={t.SEO[0].description}
        keywords={t.SEO[0].keywords}
      />
      <Content
        firstText={t.FirstText[0].firstText}
        text={t.Text}
        title={t.Title[0].title}
        picture={data.AboutPicture.childImageSharp.fluid}
      />
    </Layout>
  );
}

export const query = graphql`
  query About($language: String) {
    file(name: { eq: $language }, relativeDirectory: { eq: "about" }) {
      childAboutJson {
        FirstText {
          firstText
        }
        Text {
          text
        }
        Title {
          title
        }
        SEO {
          title
          keywords
          description
        }
      }
    }
    AboutPicture: file(relativePath: { eq: "Roland-About.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
