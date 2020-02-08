// Components==============
import Divider2DImp from "assets/Divider2D.inline.svg";
import Divider2MImp from "assets/Divider2M.inline.svg";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
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

const Source = styled.p`
  color: ${({ theme: { gray } }) => gray.s6};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
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

const LinkOL = styled.p`
  margin-top: ${({ theme: { spacing } }) => spacing.s9};
  text-align: center;
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
  const Divider = () => {
    const Query =
      typeof window !== "undefined" && window.matchMedia("(min-width: 700px)");

    if (Query.matches) {
      return <Divider2DSvg />;
    } else {
      return <Divider2MSvg />;
    }
  };

  const [ship, shipInView] = useInView({ threshold: 0, triggerOnce: false });

  const [castle, castleInView] = useInView({
    threshold: 0,
    triggerOnce: false
  });

  const [wallet, walletInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [seo, seoInView] = useInView({ threshold: 0.5, triggerOnce: true });

  const [bounce, bounceInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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
          <RocketShip ship={ship} shipInView={shipInView} />
        </SvgWrap>
        <Title>{title3}</Title>
        <Explanation>{explanation3}</Explanation>
        <SvgWrap>
          <Castle castle={castle} castleInView={castleInView} />
        </SvgWrap>
        <Title>{title4}</Title>
        <Explanation id="aboveWallet">{explanation4}</Explanation>
        <SvgWrap>
          <Wallet wallet={wallet} walletInView={walletInView} />
        </SvgWrap>
        <Title>{title5}</Title>
        <Explanation>{explanation5}</Explanation>
        <SvgWrap>
          <SEO seo={seo} seoInView={seoInView} />
        </SvgWrap>
        <Title>{title6}</Title>
        <Explanation>{explanation6}</Explanation>
        <SvgWrap>
          <Bounce bounce={bounce} bounceInView={bounceInView} />
        </SvgWrap>
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
        <LinkOL>{linkOL}</LinkOL>
        <Link as="div">
          <MTLink to="/faq">{linkButton}</MTLink>
        </Link>
      </Container>
    </Wrapper>
  );
}
