// Components==============
import { graphql } from "gatsby";
import React, { useContext } from "react";
import Head from "../global-components/Layout/Head";
import { LocaleContext } from "../global-components/Layout/Layout";
import Hero from "../macro-index/Hero";
import Sale from "../macro-index/Sale";
// =========================

export default function Index({ data }) {
  const lang = useContext(LocaleContext);
  const d = data.sanityHome;

  const hero = {
    title: d.title[lang],
    headshot: d.headshot.asset.fluid,
    explanation: d.explanation[lang],
  };

  const sale = {
    title: d.saleTitle,
    salePoints: d._rawSalePoints,
  };

  return (
    <>
      <Head
        title={d.SEO[0].title[lang]}
        description={d.SEO[0].description[lang]}
        keywords={d.SEO[0].keywords[lang]}
        path=""
      />
      <Hero content={hero} />
      <Sale content={sale} />
      {/* <PopularQ /> */}
      {/* <Technologies />  */}
    </>
  );
}

export const query = graphql`
  query home {
    sanityHome {
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
      headshot {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
      explanation {
        en
        nl
      }
      saleTitle {
        en
        nl
      }
      _rawSalePoints
      questionsTitle {
        en
        nl
      }
      headshot2 {
        asset {
          fluid(maxWidth: 150) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
      questions {
        answer {
          nl
          en
        }
        question {
          en
          nl
        }
      }
      techTitle {
        en
        nl
      }
      _rawTechnologies
    }
  }
`;
