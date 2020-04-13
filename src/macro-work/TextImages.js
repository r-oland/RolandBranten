// Components==============
import { motion } from "framer-motion";
import Img from "gatsby-image";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { H2, H3, L } from "../style/Mixins";
// =========================

const Name = styled(H2)`
  margin: ${({ theme: { spacing } }) => `${spacing.s7} 0 ${spacing.s3}`};

  @media screen and (min-width: 800px) {
    margin: ${({ theme: { spacing } }) => `${spacing.s6} 0 ${spacing.s1}`};
  }
`;

const Type = styled(H3)``;

const Work = styled(L)`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  margin: ${({ theme: { spacing } }) => `${spacing.s2} 0 ${spacing.s8}`};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.wide};

  @media screen and (min-width: 800px) {
    margin: ${({ theme: { spacing } }) => `${spacing.s6} 0 ${spacing.s7}`};
  }
`;

const ImgWrapper = styled.div`
  display: grid;

  @media screen and (min-width: 800px) {
    width: 50%;

    transform: ${({ align }) =>
      align === "left" ? "translate(-40px, 25px)" : "translate(50px, 30px)"};
  }
`;

const Main = styled(Img)`
  grid-column: 1;
  grid-row: 1;
  width: 120%;
  right: 10%;
`;

const Float = styled(motion.div)`
  position: relative;
  width: 50%;
  grid-column: 1;
  grid-row: 1;
  bottom: -20%;
  left: 50%;
`;

const Float2 = styled(motion.div)`
  position: relative;
  width: 50%;
  grid-column: 1;
  grid-row: 1;
  bottom: -35%;
  left: 5%;
`;

export const Text = (data) => {
  return (
    <>
      <Name>{data.name}</Name>
      <Type>{data.type}</Type>
      <Work>{data.work}</Work>
    </>
  );
};

const floatVariants = {
  inSight: {
    y: [0, 10, 0],
    scale: [1, 1.03, 1],
  },
  outOfSight: {
    y: [0, 0, 0],
    scale: [1, 1, 1],
  },
};

export const Images = (Business, float, float2, alt, align) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <ImgWrapper ref={ref} align={align}>
      <Main fluid={Business} alt={`${alt}1`} />
      <Float
        animate={inView ? "inSight" : "outOfSight"}
        variants={floatVariants}
        transition={{
          loop: Infinity,
          duration: 5,
          delay: 1,
        }}
      >
        <Img fluid={float} alt={`${alt}2`} />
      </Float>
      <Float2
        animate={inView ? "inSight" : "outOfSight"}
        variants={floatVariants}
        transition={{
          loop: Infinity,
          duration: 5,
        }}
      >
        <Img fluid={float2} alt={`${alt}3`} />
      </Float2>
    </ImgWrapper>
  );
};
