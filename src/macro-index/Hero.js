// Components==============
import Divider1DImp from "assets/Divider1D.inline.svg";
import Divider1MImp from "assets/Divider1M.inline.svg";
import Img from "gatsby-image";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import BlobAnimation from "../micro-components/BlobAnimation";
import TextSwitchAnimation from "../micro-components/TextSwitchAnimation";
import { Container, flexUnit, H2 } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  height: calc(110vh - 4em);
  background: ${({ theme: { primary } }) => primary.s4};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding-top: ${({ theme: { spacing } }) => spacing.s7};

  @media screen and (min-width: 850px) {
    padding-top: 0;
    height: 110vh;
    flex-direction: row-reverse;
    justify-content: center;
  }

  h1 {
    line-height: 1.1;
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  }
`;

const Wrapper2 = styled(Container)`
  @media screen and (min-width: 850px) {
    position: relative;
    left: -130px;
    margin: 0;
    z-index: 5;
  }
`;

const Title = styled(H2)`
  padding: ${({ theme: { spacing } }) => `${spacing.s5} 0 ${spacing.s2}`};

  @media screen and (min-width: 850px) {
    padding: ${({ theme: { spacing } }) => `${spacing.s9} 0 ${spacing.s2}`};
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
`;

const Inline = styled.div`
  display: inline-block;
`;

const StyledUnderline = styled.div`
  display: flex;
  flex-direction: column;
  width: 94px;

  h3 {
    display: inline;
    position: relative;
    z-index: 1;
    font-family: Poppins;
    font-weight: 700;
    font-size: 18px;
  }

  div {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 7px;
    background: ${({ theme: { white } }) => white.replace("1)", "0.8)")};
    transform: translateY(-14px);
  }
`;

const IMG = styled(Img)`
  width: 120%;
  max-width: 650px;
  max-height: 650px;

  @media screen and (min-width: 850px) {
    align-self: flex-end;
    left: -170px;
    width: 150%;
  }

  @media screen and (min-width: 1000px) {
    max-width: 700px;
    max-height: 700px;
  }

  @media screen and (min-width: 1250px) {
    bottom: -140px;
    width: 57%;
    max-width: initial;
    max-height: initial;
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
    <>
      <Wrapper>
        <Divider1MSvg />;
        <Divider1DSvg />
        <Wrapper2>
          <Title> {title}</Title>
          <h1 ref={ref}>
            Freelance <br /> web <TextSwitchAnimation inView={inView} />
          </h1>
          <Explanation>
            {explanation}
            <Inline>
              <StyledUnderline>
                <h3>JAMstack</h3>
                <div />
              </StyledUnderline>
            </Inline>
          </Explanation>
        </Wrapper2>
        <IMG
          style={{ overflow: "initial" }}
          fluid={headshot}
          alt="Roland-Branten"
        />
        <BlobAnimation blob={blob} blobInView={blobInView} />
      </Wrapper>
    </>
  );
}
