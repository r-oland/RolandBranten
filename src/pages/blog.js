// Components==============
import { graphql } from "gatsby";
import React, { useContext } from "react";
import Head from "../global-components/Layout/Head";
import { LocaleContext } from "../global-components/Layout/Layout";
// =========================

export default function Blog({ data }) {
  const lang = useContext(LocaleContext);
  const seo = data.sanitySeo;

  return (
    <>
      <Head
        title={seo.title[lang]}
        description={seo.description[lang]}
        keywords={seo.keywords[lang]}
        path="blog"
      />
    </>
  );
}

export const query = graphql`
  query Blog {
    sanitySeo(page: { eq: "blog" }) {
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
  }
`;
