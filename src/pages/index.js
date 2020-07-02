// Components==============
import { graphql } from "gatsby";
import React, { useContext } from "react";
import Head from "../global-components/Layout/Head";
import { LocaleContext } from "../global-components/Layout/Layout";
import Hero from "../macro-index/Hero";
import PopularQ from "../macro-index/PopularQ";
import Sale from "../macro-index/Sale";
// =========================

export default function Index({ data }) {
  const lang = useContext(LocaleContext);
  const d = data.sanityHome;
  const seo = data.sanitySeo;

  console.log(data);

  const hero = {
    title: d.hero.title[lang],
    headshot: d.hero.headshot.asset.fluid,
    explanation: d.hero.explanation[lang],
  };

  const sale = {
    title: d.sale.title[lang],
    salePoints: d.sale._rawSalePoints,
  };

  const questions = {
    title: d.chat.questionsTitle,
    headshot: d.chat.headshot2.asset.fluid,
    questions: d.chat.questions,
  };

  // const technologies = {
  //   title: d.techTitle,
  //   text: d._rawTechnologies,
  //   illustrations: d.illustrations,
  // };

  return (
    <>
      <Head
        title={seo.title[lang]}
        description={seo.description[lang]}
        keywords={seo.keywords[lang]}
        path=""
      />
      <Hero content={hero} />
      <Sale content={sale} />
      <PopularQ content={questions} />
      {/* <Technologies content={technologies} /> */}
    </>
  );
}

export const query = graphql`
  query home {
    sanitySeo(page: { eq: "home" }) {
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
    sanityHome {
      hero {
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
      }
      sale {
        title {
          en
          nl
        }
        _rawSalePoints
      }
      chat {
        title {
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
      }
    }
  }
`;
