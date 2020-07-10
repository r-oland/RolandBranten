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
  }

  #Title0 {
    margin-top: ${({ theme: { spacing } }) => spacing.s7};

    @media screen and (min-width: 1000px) {
      margin-top: 0;
    }
  }
`;

const Title = styled(H3)`
  margin: ${({ theme: { spacing } }) => `${spacing.s10} 0 ${spacing.s4}`};

  @media screen and (min-width: 1000px) {
    margin-top: 0;
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  }
`;

const Explanation = styled.div`
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s8};

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-column-gap: ${({ theme: { spacing } }) => spacing.s10};
    margin: ${({ theme: { spacing }, index }) =>
      index === 3
        ? `${spacing.s12} 0 ${spacing.s8}`
        : index === 0
        ? `${spacing.s11} 0 ${spacing.s12}`
        : `${spacing.s12} 0 ${spacing.s12}`};

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

  @media screen and (min-width: 1600px) {
    margin: 14em 0 14em;

    margin: ${({ index }) => (index !== 3 ? `14em 0 14em` : `14em 0 4em`)};

    margin: ${({ index }) =>
      index === 3 ? `15em 0 4em` : index === 0 ? `8em 0 15em` : `15em 0 15em`};
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
      <Grid key={i} index={i}>
        <div className={isEven(i) ? "R" : "L"}>
          <Title id={`Title${i}`}>{e.title[lang]}</Title>
          <Explanation id={`Explanation${i}`}>
            <Block content={e.description[lang]} />
          </Explanation>
        </div>
        <SvgWrap className={isEven(i) ? "L" : "R"}>{e.illustration}</SvgWrap>
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
