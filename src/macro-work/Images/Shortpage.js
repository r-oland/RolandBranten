// Components==============

import { motion } from "framer-motion";
import Img from "gatsby-image";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
// =========================

const Wrapper = styled(motion.div)`
  display: grid;
  position: relative;

  right: -10%;

  @media screen and (min-width: 1000px) {
    transform: ${({ left }) => (left ? "scale(-1.2, 1.2) " : "scale(1.2)")};

    left: ${({ left }) => left && "20px"};
    right: ${({ left }) => !left && "20px"};
  }
`;

const Main = styled(Img)`
  position: relative;
  grid-column: 1;
  grid-row: 1;
  right: 10%;
  width: 80%;
`;

const Float = styled(motion.div)`
  position: relative;
  grid-column: 1;
  grid-row: 1;
  width: 60%;
  height: 60%;
  bottom: -47%;
  left: -13%;

  @media screen and (min-width: 1000px) {
    bottom: -50%;
    left: -1%;
  }
`;

const Float2 = styled(motion.div)`
  position: relative;
  grid-column: 1;
  grid-row: 1;
  bottom: 8%;
  left: 40%;
  width: 55%;
  height: 55%;

  @media screen and (min-width: 1000px) {
    bottom: 0%;
    left: 42%;
  }
`;

export default function ShortPage({ left, images, alt }) {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <Wrapper
      ref={ref}
      left={left}
      animate={inView ? "inSight" : "outOfSight"}
      variants={parent}
    >
      <Main fluid={images.main} alt={`${alt}1`} />
      <Float
        variants={floatVariants}
        whileHover={{ scale: 1.25, transition: { duration: 1.3 } }}
      >
        <Img fluid={images.float1} alt={`${alt}2`} />
      </Float>
      <Float2
        variants={floatVariants}
        whileHover={{ scale: 1.25, transition: { duration: 1.3 } }}
      >
        <Img fluid={images.float2} alt={`${alt}3`} />
      </Float2>
    </Wrapper>
  );
}

const parent = {
  inSight: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const floatVariants = {
  inSight: {
    y: [0, 15, 0],
    scale: [1, 1.05, 1],
    transition: {
      loop: Infinity,
      duration: 8,
    },
  },
  outOfSight: {
    y: [0, 0, 0],
    scale: [1, 1, 1],
  },
};
