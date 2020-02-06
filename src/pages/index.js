// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
import LanguageSwitch from "../single-components/LanguageSwitch";
// =========================

export default function Index({ data }) {
  return (
    <Layout>
      <Head
        title="Home"
        description="Page description goes here"
        keywords="content"
      />
      <p>{data.file.childIndexJson.title}</p>
      <LanguageSwitch />
    </Layout>
  );
}

export const query = graphql`
  query Home($language: String) {
    file(name: { eq: $language }, relativeDirectory: { eq: "index" }) {
      childIndexJson {
        title
      }
    }
  }
`;
