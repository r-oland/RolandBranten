// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
// =========================

export default function Index({ data }) {
  const t = data.file.childIndexJson;

  return (
    <Layout>
      <Head title={t.title} description={t.description} keywords={t.keywords} />
      <div style={{ height: "150vh" }}></div>
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
      }
    }
  }
`;
