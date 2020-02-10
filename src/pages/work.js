// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
import Content from "../page-components/work/Content";
// =========================

export default function Work({ data }) {
  const t = data.file.childWorkJson;

  return (
    <Layout page="workOL">
      <Head
        title={t.SEO[0].title}
        description={t.SEO[0].description}
        keywords={t.SEO[0].keywords}
      />
      <Content
        button={t.button[0].name}
        BizData={t.BizData[0]}
        BrantenData={t.BrantenData[0]}
        biz={data.Biz.childImageSharp.fluid}
        bizFloat={data.BizFloat.childImageSharp.fluid}
        bizFloat2={data.BizFloat2.childImageSharp.fluid}
        Branten={data.Branten.childImageSharp.fluid}
        BrantenFloat={data.BrantenFloat.childImageSharp.fluid}
        BrantenFloat2={data.BrantenFloat2.childImageSharp.fluid}
      />
    </Layout>
  );
}

export const query = graphql`
  query Work($language: String) {
    file(name: { eq: $language }, relativeDirectory: { eq: "work" }) {
      childWorkJson {
        SEO {
          title
          keywords
          description
        }
        button {
          name
        }
        BizData {
          type
          name
          work
        }
        BrantenData {
          type
          name
          work
        }
      }
    }
    Biz: file(relativePath: { eq: "Biz-logistics.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BizFloat: file(relativePath: { eq: "Biz-logistics-float.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BizFloat2: file(relativePath: { eq: "Biz-logistics-float2.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Branten: file(relativePath: { eq: "Branten-maatwerk.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BrantenFloat: file(relativePath: { eq: "Branten-maatwerk-float.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BrantenFloat2: file(relativePath: { eq: "Branten-maatwerk-float2.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
