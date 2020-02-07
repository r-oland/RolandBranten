// Components==============
import src from "assets/hearth.svg";
import { useIntl } from "gatsby-plugin-intl";
import { Button, Container, H2, H3, L, S } from "mixins";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

const OneLiner = styled(H2)`
  margin: ${({ theme: { spacing } }) => `${spacing.s1}  0 ${spacing.s2}`};
`;

const FollowUp1 = styled(H3)`
  margin: ${({ theme: { spacing } }) => `0  0 ${spacing.s4}`};
`;

const FollowUp2 = styled(L)`
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s5};
  margin: ${({ theme: { spacing } }) => `0  0 ${spacing.s5}`};
`;

const Wrapper2 = styled.div`
  text-align: center;
  max-width: 1250px;
  margin: 0 auto;

  @media screen and (min-width: 900px) {
    margin-top: ${({ theme: { spacing } }) => spacing.s6};
  }
`;

const Flex = styled(Container)`
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Location = styled(S)`
  margin-bottom: ${({ theme: { spacing } }) => spacing.s3};
`;

const Hearth = styled.img`
  display: inline;
  width: 15px;
`;

const Copyright = styled(S)``;

export default function Footer({ page, display }) {
  const intl = useIntl();

  return (
    <div style={{ display: display === "notFoundPage" ? "none" : "block" }}>
      <Wrapper>
        <Container>
          <OneLiner>{intl.formatMessage({ id: `${page}` })}</OneLiner>
          <FollowUp1>{intl.formatMessage({ id: "followUp1" })}</FollowUp1>
          <FollowUp2>{intl.formatMessage({ id: "followUp2" })}</FollowUp2>
          <Button style={{ marginBottom: "2.5em" }}>
            {intl.formatMessage({ id: "button" })}
          </Button>
        </Container>
      </Wrapper>
      <Wrapper2>
        <Flex>
          <Location>
            {intl.formatMessage({ id: "location1" })} <Hearth src={src} />{" "}
            {intl.formatMessage({ id: "location2" })}
          </Location>
          <Copyright>{intl.formatMessage({ id: "copyright" })}</Copyright>
        </Flex>
      </Wrapper2>
    </div>
  );
}
