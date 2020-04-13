// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Content from "../macro-work/Content";
// =========================

export default function Work({ data }) {
  const t = data.file.childWorkJson;

  return (
    <>
      <Head
        title={t.SEO[0].title}
        description={t.SEO[0].description}
        keywords={t.SEO[0].keywords}
        path="work"
      />
      <Content
        button={t.button[0].name}
        BizData={t.BizData[0]}
        BrantenData={t.BrantenData[0]}
        ComponentsData={t.ComponentsData[0]}
        RogierData={t.RogierData[0]}
        biz={data.Biz.childImageSharp.fluid}
        bizFloat={data.BizFloat.childImageSharp.fluid}
        bizFloat2={data.BizFloat2.childImageSharp.fluid}
        Branten={data.Branten.childImageSharp.fluid}
        BrantenFloat={data.BrantenFloat.childImageSharp.fluid}
        BrantenFloat2={data.BrantenFloat2.childImageSharp.fluid}
        Components={data.Components.childImageSharp.fluid}
        ComponentsFloat={data.ComponentsFloat.childImageSharp.fluid}
        ComponentsFloat2={data.ComponentsFloat2.childImageSharp.fluid}
        Rogier={data.Rogier.childImageSharp.fluid}
        RogierFloat={data.RogierFloat.childImageSharp.fluid}
        RogierFloat2={data.RogierFloat2.childImageSharp.fluid}
      />
    </>
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
        ComponentsData {
          type
          name
          work
        }
        RogierData {
          type
          name
          work
        }
      }
    }
    Biz: file(relativePath: { eq: "Biz-logistics.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    BizFloat: file(relativePath: { eq: "Biz-logistics-float.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    BizFloat2: file(relativePath: { eq: "Biz-logistics-float2.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Branten: file(relativePath: { eq: "Branten-maatwerk.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    BrantenFloat: file(relativePath: { eq: "Branten-maatwerk-float.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    BrantenFloat2: file(relativePath: { eq: "Branten-maatwerk-float2.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Components: file(relativePath: { eq: "Components.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ComponentsFloat: file(relativePath: { eq: "Components-float.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ComponentsFloat2: file(relativePath: { eq: "Components-float2.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Rogier: file(relativePath: { eq: "Rogier-overvliet.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    RogierFloat: file(relativePath: { eq: "Rogier-overvliet-float.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    RogierFloat2: file(relativePath: { eq: "Rogier-overvliet-float2.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
