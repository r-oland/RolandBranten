// Components==============
import { Container, flexUnit } from "mixins";
import React, { useContext } from "react";
import styled from "styled-components";
import intl from "../data/intl/intl.json";
import Head from "../global-components/Layout/Head";
import { LocaleContext } from "../global-components/Layout/Layout";
// =========================

const Smiley = styled.p`
  ${flexUnit(2.4, 40, 50, "vw", "font-size")};
  margin-top: ${({ theme: { spacing } }) => spacing.s3};
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
  const locale = useContext(LocaleContext);

  return (
    <>
      <Head
        title="404 NOT FOUND"
        description="Could not found the page you where looking for"
        keywords="404, unavailable, not found"
        path="404"
      />
      <Container404 style={{ marginTop: "2em" }}>
        <h2>{intl[locale].notFound}</h2>
        {/* eslint-disable-next-line */}
        <Smiley>😟</Smiley>
      </Container404>
    </>
  );
}
