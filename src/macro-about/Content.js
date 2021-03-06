// Components==============
import { motion } from "framer-motion";
import Img from "gatsby-image";
import { useMediaQ } from "hooks-lib";
import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../global-components/Layout/Layout";
import Block from "../micro-components/Block";
import { Container, flexUnit } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  p {
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s5};
    @media screen and (min-width: 800px) {
      max-width: 50vw;
    }
  }
`;

const Title = styled(motion.h3)`
  font-family: Poppins;
  ${flexUnit(2, 20, 35, "vw", "font-size")};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  margin: ${({ theme: { spacing } }) => `${spacing.s5} 0 ${spacing.s4}`};

  @media screen and (min-width: 1600px) {
    margin-top: ${({ theme: { spacing } }) => spacing.s8};
  }
`;

const FirstText = styled(motion.div)`
  margin-bottom: ${({ theme: { spacing } }) => spacing.s9};

  @media screen and (min-width: 800px) {
    margin-bottom: 0;
  }
`;

const PictureWrapMobile = styled(motion.div)`
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

const Text = styled(motion.div)`
  padding-top: ${({ theme: { spacing } }) => spacing.s4};
  padding-bottom: ${({ theme: { spacing } }) => spacing.s7};

  @media screen and (min-width: 800px) {
    padding-bottom: ${({ theme: { spacing } }) => spacing.s10};
  }

  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
  }
`;

const Grid = styled(motion.div)`
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  @media screen and (min-width: 1600px) {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s8};
  }
`;

const PictureWrapDesktop = styled(motion.div)`
  display: none !important;
  position: relative;

  @media screen and (min-width: 800px) {
    display: block !important;
    max-width: calc(200px + 8vw);
    align-self: center;
    transfrom: translateX(5vw);
  }
`;

export default function Content({ content }) {
  const { lang } = useContext(LocaleContext);
  const time = new Date().getHours();
  const timeOfDay =
    time >= 18
      ? content.title.evening
      : time >= 12
      ? content.title.afternoon
      : time >= 5
      ? content.title.morning
      : content.title.evening;

  const text = content.text[lang];
  const firstText = text[0];
  const lastText = text.filter((_, index) => index !== 0);
  const query = useMediaQ("min", 800);

  return (
    <Wrapper>
      <Container>
        <Grid animate="mount" initial="unMounted" variants={framerParent}>
          <div>
            <Title variants={framerFadeIn}>{timeOfDay}</Title>
            <FirstText variants={framerFadeIn}>
              <Block content={firstText} />
            </FirstText>
            <PictureWrapMobile variants={!query && framerScale}>
              <Background />
              <IMG fluid={content.image} alt="Roland Branten" />
            </PictureWrapMobile>
            <Text variants={framerFadeIn}>
              <Block content={lastText} />{" "}
            </Text>
          </div>
          <PictureWrapDesktop variants={query && framerSlideIn}>
            <Background />
            <IMG fluid={content.image} alt="Roland Branten" />
          </PictureWrapDesktop>
        </Grid>
      </Container>
    </Wrapper>
  );
}

const framerParent = {
  mount: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const framerFadeIn = {
  mount: { opacity: 1, y: 0 },
  unMounted: { opacity: 0, y: -10 },
};

const framerScale = {
  mount: { scale: 1, transition: { damping: 5 } },
  unMounted: { scale: 0 },
};

const framerSlideIn = {
  mount: { x: "5vw", opacity: 1 },
  unMounted: { x: "20vw ", opacity: 0 },
};
