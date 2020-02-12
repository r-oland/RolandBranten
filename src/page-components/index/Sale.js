// Components==============
import Divider2DImp from "assets/Divider2D.inline.svg";
import Divider2MImp from "assets/Divider2M.inline.svg";
import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { FaqContext } from "../../global-components/Layout/Layout";
import Bounce from "../../single-components/Bounce";
import Castle from "../../single-components/Castle";
import MTLink from "../../single-components/MTLink";
import RocketShip from "../../single-components/RocketShip";
import SEO from "../../single-components/SEO";
import Wallet from "../../single-components/Wallet";
import { Container, H2, H3, L, StyledUnderline } from "../../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s9};
  position: relative;

  h2 {
    text-align: center;

    @media screen and (min-width: 1000px) {
      margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
    }
  }

  .rocket {
    margin-top: ${({ theme: { spacing } }) => spacing.s7};

    @media screen and (min-width: 1000px) {
      margin-top: 0;
    }
  }

  #aboveWallet {
    margin-bottom: 0;
  }
`;

const CustomContainer = styled(Container)`
  @media screen and (min-width: 1000px) {
    margin: 0 auto;
    max-width: 78.5%;
  }

  @media screen and (min-width: 1600px) {
    max-width: 70%;
  }
`;

const Title = styled(H3)`
  margin: ${({ theme: { spacing } }) => `${spacing.s10} 0 ${spacing.s4}`};
  max-width: 600px;

  @media screen and (min-width: 1000px) {
    margin-top: 0;
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  }
`;

const Explanation = styled(L)`
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s8};
  max-width: 510px;

  @media screen and (min-width: 1000px) {
    margin: 0;
  }
`;

const SvgWrap = styled.div`
  width: 110%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 475px) {
    .right {
      align-self: flex-end;
    }
  }

  @media screen and (min-width: 1000px) {
    /* align-self: flex-start; */
  }

  @media screen and (min-width: 550px) {
    width: 100%;
  }

  .tempRight {
    @media screen and (min-width: 850px) {
      align-self: flex-end;
    }

    @media screen and (min-width: 1000px) {
      align-self: initial;
    }
  }
`;

const TWrap = styled.div`
  @media screen and (min-width: 1000px) {
    margin: ${({ theme: { spacing } }) => `${spacing.s12} 0 ${spacing.s12}`};
  }

  @media screen and (min-width: 1600px) {
    margin: 14em 0 14em;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-column-gap: ${({ theme: { spacing } }) => spacing.s9};

    .L {
      grid-column: 1;
    }

    .R {
      grid-column: 2;
    }

    #R1 {
      grid-row: 1;
    }
    #R2 {
      grid-row: 2;
    }
    #R3 {
      grid-row: 3;
    }
    #R4 {
      grid-row: 4;
    }
    #R5 {
      grid-row: 5;
    }
  }
`;

const Divider2MSvg = styled(Divider2MImp)`
  width: 100vw;
  position: absolute;
  top: 425px;
  z-index: -1;
  transform: scale(1.2);
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const Divider2DSvg = styled(Divider2DImp)`
  display: none;
  width: 100vw;
  position: absolute;
  top: calc(160px + 10vw);
  z-index: -1;

  @media screen and (min-width: 700px) {
    display: block;
  }
`;

const Source = styled.p`
  color: ${({ theme: { gray } }) => gray.s6};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  margin-top: ${({ theme: { spacing } }) => spacing.s6};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s1};
`;

const Sources = styled.a`
  cursor: pointer;
  display: block;
  color: ${({ theme: { gray } }) => gray.s6};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  text-decoration: underline;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s2};

  &:hover {
    color: ${({ theme: { primary } }) => primary.s7};
  }
`;

const SourceWrap = styled.div`
  @media screen and (min-width: 700px) {
    position: absolute;
    width: 400px;
  }

  right: 10%;

  bottom: -110px;

  @media screen and (min-width: 1250px) {
    left: 7.5vw;
  }
`;

const LinkOL = styled.p`
  margin-top: ${({ theme: { spacing } }) => spacing.s9};
  text-align: center;

  @media screen and (min-width: 700px) {
    margin-top: ${({ theme: { spacing } }) => spacing.s12};
  }

  @media screen and (min-width: 1000px) {
    margin-top: ${({ theme: { spacing } }) => spacing.s10};
  }
`;

const Link = styled(StyledUnderline)`
  width: 150px;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} auto ${spacing.s12}`};

  a {
    font-size: 18px;
  }
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
  const [ship, shipInView] = useInView({ threshold: 0, triggerOnce: false });
  const { setFAQSelected } = useContext(FaqContext);

  const [castle, castleInView] = useInView({
    threshold: 0,
    triggerOnce: false
  });

  const [wallet, walletInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [seo, seoInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const [bounce, bounceInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <Wrapper>
      <Divider2DSvg />
      <Divider2MSvg />
      <CustomContainer>
        <h2>
          JAMstack sites <H2 as="span">{title1}</H2>
        </h2>
        <Grid>
          <TWrap className="L" id="R1">
            <Title className="rocket">{title2}</Title>
            <Explanation>{explanation2}</Explanation>
          </TWrap>

          <SvgWrap className="R" id="R1">
            <RocketShip ship={ship} shipInView={shipInView} />
          </SvgWrap>
          <TWrap className="R" id="R2">
            <Title>{title3}</Title>
            <Explanation>{explanation3}</Explanation>
          </TWrap>
          <SvgWrap className="L" id="R2">
            <Castle castle={castle} castleInView={castleInView} />
          </SvgWrap>
          <TWrap className="L" id="R3">
            <Title>{title4}</Title>
            <Explanation id="aboveWallet">{explanation4}</Explanation>
          </TWrap>
          <SvgWrap className="R" id="R3">
            <Wallet wallet={wallet} walletInView={walletInView} />
          </SvgWrap>
          <TWrap className="R" id="R4">
            <Title>{title5}</Title>
            <Explanation>{explanation5}</Explanation>
          </TWrap>
          <SvgWrap className="L" id="R4">
            <SEO seo={seo} seoInView={seoInView} />
          </SvgWrap>
          <TWrap className="L" id="R5">
            <Title>{title6}</Title>
            <Explanation>{explanation6}</Explanation>
          </TWrap>
          <SvgWrap className="R" id="R5">
            <Bounce bounce={bounce} bounceInView={bounceInView} />
            <SourceWrap className="R">
              <Source>{source}:</Source>
              <Sources
                href="https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Deep Neural Network Bounce Rate Tests
              </Sources>
              <Sources
                href="https://backlinko.com/page-speed-stats"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backlinko page speed test
              </Sources>
            </SourceWrap>
          </SvgWrap>
        </Grid>

        <LinkOL
          onClick={() => {
            setFAQSelected(0);
          }}
        >
          {linkOL}
        </LinkOL>
        <Link as="div">
          <MTLink to="/faq">{linkButton}</MTLink>
        </Link>
      </CustomContainer>
    </Wrapper>
  );
}
