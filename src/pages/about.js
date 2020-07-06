// Components==============
import { graphql } from "gatsby";
import React, { useContext } from "react";
import Head from "../global-components/Layout/Head";
import { LocaleContext } from "../global-components/Layout/Layout";
import intl from "../intl/intl";
import Content from "../macro-about/Content";
// =========================

export default function About({ data }) {
  const { lang } = useContext(LocaleContext);
  const seo = data.sanitySeo;
  const d = data.sanityRoland;

  const content = {
    title: intl[lang].aboutTitle,
    text: d._rawAbout,
    image: d.image.asset.fluid,
  };

  return (
    <>
      <Head
        title={seo.title[lang]}
        description={seo.description[lang]}
        keywords={seo.keywords[lang]}
        path="about"
      />
      <Content content={content} />
    </>
  );
}

export const query = graphql`
  query About {
    sanitySeo(page: { eq: "about" }) {
      keywords {
        en
        nl
      }
      title {
        en
        nl
      }
      description {
        en
        nl
      }
    }
    sanityRoland {
      _rawAbout
      image {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
    }
  }
`;
