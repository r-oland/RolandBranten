// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
import Hero from "../page-components/index/Hero";
import PopularQ from "../page-components/index/PopularQ";
import Sale from "../page-components/index/Sale";
import Technologies from "../page-components/index/Technologies";
// =========================

export default function Index({ data }) {
  const t = data.file.childIndexJson;

  return (
    <Layout page="homeOL">
      <Head title={t.title} description={t.description} keywords={t.keywords} />
      <Hero
        title={t.title}
        description={t.description}
        keywords={t.keywords}
        hello={t.hello}
        explanation={t.explanation}
        headshot={data.Headshot.childImageSharp.fluid}
      />
      <Sale
        title1={t.title1}
        title2={t.title2}
        explanation2={t.explanation2}
        title3={t.title3}
        explanation3={t.explanation3}
        title4={t.title4}
        explanation4={t.explanation4}
        title5={t.title5}
        explanation5={t.explanation5}
        title6={t.title6}
        explanation6={t.explanation6}
        source={t.source}
        linkOL={t.linkOL}
        linkButton={t.linkButton}
      />
      <PopularQ title7={t.title7} />
      <Technologies title8={t.title8} explanation7={t.explanation7} />
    </Layout>
  );
}

export const query = graphql`
  query Home($language: String) {
    file(name: { eq: $language }, relativeDirectory: { eq: "index" }) {
      childIndexJson {
        title
        description
        keywords
        hello
        explanation
        title1
        title2
        explanation2
        title3
        explanation3
        title4
        explanation4
        title5
        explanation5
        title6
        explanation6
        source
        linkOL
        linkButton
        title7
        title8
        explanation7
      }
    }
    Headshot: file(relativePath: { eq: "Roland-Branten.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
