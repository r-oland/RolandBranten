// Components==============
import { graphql } from "gatsby";
import React, { useContext } from "react";
import Head from "../global-components/Layout/Head";
import { LocaleContext } from "../global-components/Layout/Layout";
import Content from "../macro-faq/Content";
// =========================

export default function About({ data }) {
  const d = data.sanityFaq;
  const lang = useContext(LocaleContext);

  const content = {
    title: d.title[lang],
    faqs: d._rawFaqs,
  };

  return (
    <>
      <Head
        title={d.SEO[0].title[lang]}
        description={d.SEO[0].description[lang]}
        keywords={d.SEO[0].keywords[lang]}
        path="faq"
      />
      <Content content={content} />
    </>
  );
}

export const query = graphql`
  query faq {
    sanityFaq {
      SEO {
        description {
          en
          nl
        }
        title {
          en
          nl
        }
        keywords {
          en
          nl
        }
      }
      title {
        en
        nl
      }
      _rawFaqs
    }
  }
`;
