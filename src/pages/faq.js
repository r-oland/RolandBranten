// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Content from "../macro-faq/Content";
// =========================

export default function About({ data }) {
  const t = data.file.childFaqJson;

  return (
    <>
      <Head
        title={t.SEO[0].title}
        description={t.SEO[0].description}
        keywords={t.SEO[0].keywords}
        path="faq"
      />
      <Content FaqList={t.FaqList} title={t.Title[0].title} />
    </>
  );
}

export const query = graphql`
  query Faq($language: String) {
    file(name: { eq: $language }, relativeDirectory: { eq: "faq" }) {
      childFaqJson {
        FaqList {
          Question
          Answers {
            answer
            class
          }
        }
        SEO {
          description
          keywords
          title
        }
        Title {
          title
        }
      }
    }
  }
`;
