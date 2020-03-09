// Components==============
import { Button, Container, H2, H3, L, S } from "mixins";
import React, { useContext } from "react";
import styled from "styled-components";
import intl from "../../data/intl/intl.json";
import { StyledUnderline } from "../../style/Mixins";
import { LocaleContext, ModalContext } from "../Layout/Layout";
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
  padding-bottom: ${({ theme: { spacing } }) => spacing.s4};
`;

const FlexLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
  margin: 0 auto ${({ theme: { spacing } }) => spacing.s4};
`;

const Copyright = styled(S)``;

export default function Footer({ path }) {
  const { handleChange } = useContext(ModalContext);
  const locale = useContext(LocaleContext);

  const hideFooterPages =
    path === "/success/" || path === "/404/" || path === "/404.html/";

  const oneLiner =
    path === "/"
      ? intl[locale].homeOL
      : path === "/work/"
      ? intl[locale].workOL
      : path === "/about/"
      ? intl[locale].aboutOL
      : path === "/faq/"
      ? intl[locale].faqOL
      : null;

  return (
    <div
      style={{
        display: hideFooterPages ? "none" : "block"
      }}
    >
      <Wrapper>
        <Container>
          <OneLiner>{oneLiner}</OneLiner>
          <FollowUp1>{intl[locale].followUp1}</FollowUp1>
          <FollowUp2>{intl[locale].followUp2}</FollowUp2>
          <Button style={{ marginBottom: "2.5em" }} onClick={handleChange}>
            {intl[locale].button}
          </Button>
        </Container>
      </Wrapper>
      <Wrapper2>
        <Flex>
          <FlexLinks>
            <StyledUnderline
              as="a"
              href="https://github.com/r-oland"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </StyledUnderline>
            <StyledUnderline
              as="a"
              href="https://www.linkedin.com/in/rolandbranten"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </StyledUnderline>
          </FlexLinks>
          <Copyright>{intl[locale].copyright}</Copyright>
        </Flex>
      </Wrapper2>
    </div>
  );
}
