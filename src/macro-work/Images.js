// Components==============
import { motion } from "framer-motion";
import Img from "gatsby-image";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
// =========================

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
export default function Images({ align, content, alt }) {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <ImgWrapper ref={ref} align={align}>
      <Main fluid={content.main} alt={`${alt}1`} />
      <Float
        animate={inView ? "inSight" : "outOfSight"}
        variants={floatVariants}
        transition={{
          loop: Infinity,
          duration: 5,
          delay: 1,
        }}
      >
        <Img fluid={content.float1} alt={`${alt}2`} />
      </Float>
      <Float2
        animate={inView ? "inSight" : "outOfSight"}
        variants={floatVariants}
        transition={{
          loop: Infinity,
          duration: 5,
        }}
      >
        <Img fluid={content.float2} alt={`${alt}3`} />
      </Float2>
    </ImgWrapper>
  );
}
