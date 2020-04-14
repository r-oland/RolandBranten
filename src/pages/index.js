// Components==============
import { graphql } from "gatsby";
import React, { useContext } from "react";
import Head from "../global-components/Layout/Head";
import { LocaleContext } from "../global-components/Layout/Layout";
import Hero from "../macro-index/Hero";
import PopularQ from "../macro-index/PopularQ";
import Sale from "../macro-index/Sale";
import Technologies from "../macro-index/Technologies";
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

  const questions = {
    title: d.questionsTitle[lang],
    headshot: d.headshot2.asset.fluid,
    questions: d.questions,
  };

  const technologies = {
    title: d.techTitle,
    text: d._rawTechnologies,
    illustrations: d.illustrations,
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
      <PopularQ content={questions} />
      <Technologies content={technologies} />
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
      illustrations {
        data1 {
          asset {
            url
          }
        }
        data2 {
          asset {
            url
          }
        }
        tools1 {
          asset {
            url
          }
        }
        tools2 {
          asset {
            url
          }
        }
        deploy {
          asset {
            url
          }
        }
      }
    }
  }
`;
