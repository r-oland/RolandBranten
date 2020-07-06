// Components==============
import Divider1DImp from "assets/Divider1D.inline.svg";
import Divider1MImp from "assets/Divider1M.inline.svg";
import Img from "gatsby-image";
import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { LocaleContext } from "../global-components/Layout/Layout";
import BlobAnimation from "../micro-components/BlobAnimation";
import TextSwitchAnimation from "../micro-components/TextSwitchAnimation";
import { Container, flexUnit, H2 } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  height: calc(110vh - 4em);
  background: ${({ theme: { primary } }) => primary.s4};
  padding-top: ${({ theme: { spacing } }) => spacing.s7};
  overflow: hidden;

  @media screen and (min-width: 850px) {
    padding-top: 0;
    height: 110vh;
  }

  h1 {
    line-height: 1.1;
  }
`;

const Grid = styled.div`
  display: grid;
  height: 100%;

  @media screen and (min-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: end;
  }
`;

const CustomContainer = styled(Container)`
  grid-row: 1;

  @media screen and (min-width: 850px) {
    height: 100vh;
    grid-column: 2;
  }
`;

const Title = styled(H2)`
  padding: ${({ theme: { spacing } }) => `${spacing.s7} 0 ${spacing.s1}`};

  @media screen and (min-width: 850px) {
    padding: ${({ theme: { spacing } }) => `${spacing.s9} 0 ${spacing.s1}`};
  }

  @media screen and (min-width: 1600px) {
    padding-top: ${({ theme: { spacing } }) => spacing.s10};
  }
`;

const Explanation = styled.div`
  max-width: 500px;
  ${flexUnit(2.5, 18, 19, "vw", "font-size")};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s5};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  margin-top: ${({ theme: { spacing } }) => spacing.s4};
`;

const IMG = styled(Img)`
  max-width: 650px;
  max-height: 650px;
  grid-row: 2;
  align-self: end;

  @media screen and (min-width: 850px) {
    left: 0;
    max-width: initial;
    max-height: initial;
    width: 100%;
    grid-column: 1;
    grid-row: 1;
    justify-self: end;
    align-self: initial;

    img {
      object-position: right !important;
    }
  }
`;

const Divider1DSvg = styled(Divider1DImp)`
  display: none;
  position: absolute;
  bottom: -30px;
  width: 110vw;
  left: -5px;
  z-index: 5;

  @media screen and (min-width: 450px) {
    display: block;
  }
`;

const Divider1MSvg = styled(Divider1MImp)`
  position: absolute;
  bottom: -30px;
  width: 110vw;
  left: -5px;
  z-index: 5;

  @media screen and (min-width: 450px) {
    display: none;
  }
`;

export default function Hero({ content }) {
  const { title, explanation, headshot } = content;

  const { lang } = useContext(LocaleContext);

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
    rootMargin: "500px",
  });

  const [blob, blobInView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <Wrapper>
      <Divider1MSvg />
      <Divider1DSvg />
      <Grid>
        <CustomContainer>
          <Title>{title}</Title>
          <h1 ref={ref}>{lang === "en" ? "I'm a" : "Ik ben een"} </h1>
          <TextSwitchAnimation inView={inView} />
          <Explanation>{explanation}</Explanation>
        </CustomContainer>
        <IMG
          style={{ overflow: "initial" }}
          fluid={headshot}
          alt="Roland-Branten"
        />
      </Grid>
      <BlobAnimation blob={blob} blobInView={blobInView} />
    </Wrapper>
  );
}
