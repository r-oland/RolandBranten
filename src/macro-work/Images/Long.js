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
  grid-column: 1;
  grid-row: 1;
  right: 10%;
`;

const Float = styled(motion.div)`
  position: relative;
  grid-column: 1;
  grid-row: 1;
  bottom: -10%;
  left: 38%;
  width: 50%;
  height: 50%;
`;

const Float2 = styled(motion.div)`
  position: relative;
  grid-column: 1;
  grid-row: 1;
  bottom: -23%;
  left: -15%;

  width: 50%;
  height: 50%;
`;

export default function Long({ left, images, alt }) {
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
