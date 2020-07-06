// Components==============
import { graphql } from "gatsby";
import React, { useContext } from "react";
import Head from "../global-components/Layout/Head";
import { LocaleContext } from "../global-components/Layout/Layout";
import Content from "../macro-work";
// =========================

export default function Work({ data }) {
  const seo = data.sanitySeo;
  const { lang } = useContext(LocaleContext);

  return (
    <>
      <Head
        title={seo.title[lang]}
        description={seo.description[lang]}
        keywords={seo.keywords[lang]}
        path="work"
      />
      <Content content={data.sanityWorkPage.projects} />
    </>
  );
}

export const query = graphql`
  query work {
    sanitySeo(page: { eq: "work" }) {
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
    sanityWorkPage {
      projects {
        smallPage
        name
        url
        source
        type
        period
        description {
          en
          nl
        }
        technologies {
          name
          icon {
            asset {
              url
              title
            }
          }
        }
        work
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
