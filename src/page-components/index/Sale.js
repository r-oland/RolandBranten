// Components==============
import Divider2DImp from "assets/Divider2D.inline.svg";
import Divider2MImp from "assets/Divider2M.inline.svg";
import React from "react";
import styled from "styled-components";
import Castle from "../../single-components/Castle";
import RocketShip from "../../single-components/RocketShip";
import SEO from "../../single-components/SEO";
import Wallet from "../../single-components/Wallet";
import { Container, H2, H3, L } from "../../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s9};
  position: relative;

  h2 {
    text-align: center;
  }

  #aboveWallet {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  }
`;

const Title = styled(H3)`
  margin: ${({ theme: { spacing } }) => `${spacing.s9} 0 ${spacing.s4}`};
`;

const Explanation = styled(L)`
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s5};
`;

const SvgWrap = styled.div`
  width: 110%;
  display: grid;

  @media screen and (min-width: 800px) {
    width: 100%;
  }
`;

const Divider2MSvg = styled(Divider2MImp)`
  width: 100vw;
  position: absolute;
  top: 425px;
  z-index: -1;
  transform: scale(1.2);
`;

const Divider2DSvg = styled(Divider2DImp)`
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: -1;
`;

export default function Sale({
  title1,
  title2,
  explanation2,
  title3,
  explanation3,
  title4,
  explanation4,
  title5,
  explanation5,
  title6,
  explanation6,
  source,
  linkOL,
  linkButton
}) {
  const Divider = () => {
    const Query =
      typeof window !== "undefined" && window.matchMedia("(min-width: 700px)");

    if (Query.matches) {
      return <Divider2DSvg />;
    } else {
      return <Divider2MSvg />;
    }
  };

  return (
    <Wrapper>
      <Divider />
      <Container>
        <h2>
          JAMstack sites <H2 as="span">{title1}</H2>
        </h2>
        <Title>{title2}</Title>
        <Explanation>{explanation2}</Explanation>
        <SvgWrap>
          <RocketShip />
        </SvgWrap>
        <Title>{title3}</Title>
        <Explanation>{explanation3}</Explanation>
        <SvgWrap>
          <Castle />
        </SvgWrap>
        <Title>{title4}</Title>
        <Explanation id="aboveWallet">{explanation4}</Explanation>
        <SvgWrap>
          <Wallet />
        </SvgWrap>
        <Title>{title5}</Title>
        <Explanation>{explanation5}</Explanation>
        <SvgWrap>
          <SEO />
        </SvgWrap>
        <Title>{title6}</Title>
        <Explanation>{explanation6}</Explanation>
        <SvgWrap>{/* <Bounce /> */}</SvgWrap>
      </Container>
    </Wrapper>
  );
}
