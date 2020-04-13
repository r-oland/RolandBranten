// Components==============
import { graphql } from "gatsby";
import React, { useContext } from "react";
import Head from "../global-components/Layout/Head";
import { LocaleContext } from "../global-components/Layout/Layout";
import intl from "../intl/intl";
import Content from "../macro-about/Content";
// =========================

export default function About({ data }) {
  const lang = useContext(LocaleContext);
  const d = data.sanityAbout;

  const content = {
    title: intl[lang].aboutTitle,
    text: d._rawText,
    image: d.image.asset.fluid,
  };

  return (
    <>
      <Head
        title={d.SEO[0].title[lang]}
        description={d.SEO[0].description[lang]}
        keywords={d.SEO[0].keywords[lang]}
        path="about"
      />
      <Content content={content} />
    </>
  );
}

export const query = graphql`
  query About {
    sanityAbout {
      _rawText
      image {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
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
    }
  }
`;
