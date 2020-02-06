// Components==============
import { useIntl } from "gatsby-plugin-intl";
import { Container, flexUnit } from "mixins";
import React from "react";
import styled from "styled-components";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
// =========================

const Smiley = styled.p`
  ${flexUnit(2.4, 40, 50, "vw", "font-size")}
  margin-top: ${({ theme: { spacing } }) => spacing.s3};;
`;

const Container404 = styled(Container)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;

  h2 {
    margin: ${({ theme: { spacing } }) => `${spacing.s4} 0`};
  }
`;

export default function NotFound() {
  const intl = useIntl();

  return (
    <Layout>
      <Head
        title="404 NOT FOUND"
        description="Could not found the page you where looking for"
        keywords="404, unavailable, not found"
      />
      <Container404 style={{ marginTop: "2em" }}>
        <h2>{intl.formatMessage({ id: "notFound" })}</h2>
        {/* eslint-disable-next-line */}
        <Smiley>😟</Smiley>
      </Container404>
    </Layout>
  );
}
