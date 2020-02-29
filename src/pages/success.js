// Components==============
import { useIntl } from "gatsby-plugin-intl";
import React from "react";
import styled from "styled-components";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
// ========================

const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default function Success() {
  const intl = useIntl();

  return (
    <Layout display={"notFoundPage"}>
      <Head title="Success" path="success" />
      <Wrapper>
        <h2>{intl.formatMessage({ id: "success" })}</h2>;
      </Wrapper>
    </Layout>
  );
}
