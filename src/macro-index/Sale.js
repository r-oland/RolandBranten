// Components==============
import Divider2DImp from "assets/Divider2D.inline.svg";
import Divider2MImp from "assets/Divider2M.inline.svg";
import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../global-components/Layout/Layout";
import Block from "../micro-components/Block";
import { Container, flexUnit, H3 } from "../style/Mixins";
import useIllustrations from "./useIllustrations";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s9};
  position: relative;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s9};

  @media screen and (min-width: 1000px) {
    margin-bottom: 0;
  }

  h2 {
    text-align: center;

    @media screen and (min-width: 1000px) {
      margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
    }
  }

  #TitleRocketShip {
    margin-top: ${({ theme: { spacing } }) => spacing.s7};

    @media screen and (min-width: 1000px) {
      margin-top: 0;
    }
  }

  #ExplanationWallet {
    margin-bottom: 0;
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

const Explanation = styled.div`
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s8};
  max-width: 510px;

  @media screen and (min-width: 1000px) {
    margin: 0;
  }

  p {
    ${flexUnit(2.5, 18, 19, "vw", "font-size")};
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
    grid-column-gap: ${({ theme: { spacing } }) => spacing.s10};

    .L {
      grid-column: 1;
      grid-row: 1;
    }

    .R {
      grid-column: 2;
      grid-row: 1;
      text-align: right;
      justify-self: end;
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

function isEven(value) {
  if (value % 2 === 0) return false;
  else return true;
}

export default function Sale({ content }) {
  const { lang } = useContext(LocaleContext);
  const illustrations = useIllustrations();

  const combinedContent = content.salePoints.map((e, index) => {
    const illustration = illustrations[index];
    const combinedArr = { ...e, illustration };

    return combinedArr;
  });

  const salePoints = combinedContent.map((e, i) => {
    return (
      <Grid key={i}>
        <TWrap className={isEven(i) ? "R" : "L"}>
          <Title id={`Title${e.illustration.type.displayName}`}>
            {e.title[lang]}
          </Title>
          <Explanation id={`Explanation${e.illustration.type.displayName}`}>
            <Block content={e.description[lang]} />
          </Explanation>
        </TWrap>

        <SvgWrap
          id={`Svg${e.illustration.type.displayName}`}
          className={isEven(i) ? "L" : "R"}
        >
          {e.illustration}
        </SvgWrap>
      </Grid>
    );
  });

  return (
    <Wrapper>
      <Divider2DSvg />
      <Divider2MSvg />
      <Container>
        <h2>{content.title}</h2>
        {salePoints}
      </Container>
    </Wrapper>
  );
}
