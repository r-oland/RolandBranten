// Components==============
import { graphql } from "gatsby";
import React, { useContext } from "react";
import Head from "../global-components/Layout/Head";
import { LocaleContext } from "../global-components/Layout/Layout";
import Content from "../macro-work/Content";
// =========================

export default function Work({ data }) {
  const d = data.sanityWork;
  const lang = useContext(LocaleContext);

  const content = {
    jobs: d.jobs,
  };

  return (
    <>
      <Head
        title={d.SEO[0].title[lang]}
        description={d.SEO[0].description[lang]}
        keywords={d.SEO[0].keywords[lang]}
        path="work"
      />
      <Content content={content} />
    </>
  );
}

export const query = graphql`
  query work {
    sanityWork {
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
      jobs {
        type {
          en
          nl
        }
        url
        work
        name
        mainImage {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
        float1 {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
        float2 {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
