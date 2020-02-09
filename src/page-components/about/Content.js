// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Container, H3 } from "../../style/Mixins";
// =========================

const Wrapper = styled.div`
  p {
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s5};
    @media screen and (min-width: 800px) {
      max-width: 50vw;
    }
  }
`;

const Title = styled(H3)`
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  margin: ${({ theme: { spacing } }) => `${spacing.s5} 0 ${spacing.s4}`};

  @media screen and (min-width: 1600px) {
    margin-top: ${({ theme: { spacing } }) => spacing.s8};
  }
`;

const FirstText = styled.p`
  margin-bottom: ${({ theme: { spacing } }) => spacing.s9};

  @media screen and (min-width: 800px) {
    margin-bottom: 0;
  }
`;

const PictureWrapMobile = styled.div`
  position: relative;
  margin: ${({ theme: { spacing } }) => `${spacing.s8} 0  ${spacing.s9}`};

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const Background = styled.div`
  background: ${({ theme: { primary } }) => primary.s4.replace("1)", "0.2)")};
  position: absolute;
  width: 100vw;
  height: 120%;
  top: -10%;
  left: -5%;

  @media screen and (min-width: 500px) {
    width: 70vw;
    transform: translateX(15vw);
  }

  @media screen and (min-width: 768px) {
    width: 50vw;
    transform: translateX(25vw);
    left: -7%;
  }

  @media screen and (min-width: 800px) {
    transform: translateX(0);
    width: 100%;
    height: 100%;
    left: 40px;
    top: -40px;
  }
`;

const IMG = styled(Img)`
  max-width: 275px;
  margin: 0 auto;

  @media screen and (min-width: 800px) {
    width: 100%;
    max-width: initial;
    margin: 0;
  }
`;

const Text = styled.div`
  padding-top: ${({ theme: { spacing } }) => spacing.s4};
  padding-bottom: ${({ theme: { spacing } }) => spacing.s7};

  @media screen and (min-width: 800px) {
    padding-bottom: ${({ theme: { spacing } }) => spacing.s10};
  }
`;

const Grid = styled.div`
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  @media screen and (min-width: 1600px) {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s8};
  }
`;

const PictureWrapDesktop = styled.div`
  display: none;
  position: relative;

  @media screen and (min-width: 800px) {
    display: block;
    max-width: calc(200px + 8vw);
    align-self: center;
    transform: translateX(5vw);
  }
`;

export default function Content({ firstText, text, title, picture }) {
  const aboutText = text.map(edge => {
    return (
      <div key={edge.text}>
        <p>{edge.text}</p>
        <br />
      </div>
    );
  });

  return (
    <Wrapper>
      <Container>
        <Grid>
          <div>
            <Title>{title}</Title>
            <FirstText>{firstText}</FirstText>
            <PictureWrapMobile>
              <Background />
              <IMG fluid={picture} alt="Roland Branten" />
            </PictureWrapMobile>
            <Text>{aboutText}</Text>
          </div>
          <PictureWrapDesktop>
            <Background />
            <IMG fluid={picture} alt="Roland Branten" />
          </PictureWrapDesktop>
        </Grid>
      </Container>
    </Wrapper>
  );
}
