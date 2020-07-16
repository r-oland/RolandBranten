// Components==============
import { motion } from "framer-motion";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import ScrollIndicator from "./ScrollIndicator";
// =========================

const Wrapper = styled(motion.div)`
  position: relative;
  margin-top: ${({ theme: { spacing } }) => spacing.s6};

  @media screen and (min-width: 850px) {
    margin-top: 0;
    top: -${({ theme: { spacing } }) => spacing.s9};
    height: 85vh;
  }
`;

const Image = styled(Img)`
  img {
    filter: blur(2px) brightness(0.4);
    transform: scale(1.05);
  }
  @media screen and (min-width: 850px) {
    height: 85vh;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
  color: ${({ theme: { white } }) => white};
  text-align: center;
`;

const Title = styled(motion.h2)``;

const Flex = styled(motion.div)`
  display: none;
  align-items: center;
  justify-content: center;
  transform: translateY(10px);

  @media screen and (min-width: 350px) {
    display: flex;
  }

  strong {
    color: ${({ theme: { gray } }) => gray.s1};
    font-size: 16px;

    @media screen and (min-width: 400px) {
      font-size: 19px;
    }
  }

  div {
    height: 17.5px;
    width: 2.5px;
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    background: ${({ theme: { primary } }) => primary.s4};
    margin: 0 0.5em;
  }

  p {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    font-size: 16px;

    @media screen and (min-width: 400px) {
      font-size: 19px;
    }
  }
`;

export default function Header({ content }) {
  const { title, readTime, date, image } = content;

  return (
    <>
      <Wrapper animate="mounted" initial="unMounted" variants={framerParent}>
        <Image fluid={image} alt={title} />
        <Info>
          <Title variants={framerFadeIn}>{title}</Title>
          <Flex variants={framerFadeIn}>
            <strong className="date">{date}</strong>
            <div />
            <p className="readTime">{readTime} mins read</p>
          </Flex>
        </Info>
        <motion.div variants={framerFadeIn}>
          <ScrollIndicator />
        </motion.div>
      </Wrapper>
    </>
  );
}

const framerParent = {
  mounted: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const framerFadeIn = {
  mounted: { opacity: 1, y: 0 },
  unMounted: { opacity: 0, y: -10 },
};
