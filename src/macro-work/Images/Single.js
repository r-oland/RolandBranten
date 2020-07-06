// Components==============

import { motion } from "framer-motion";
import Img from "gatsby-image";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  position: relative;
  @media screen and (min-width: 1000px) {
    transform: ${({ left }) => left && "scale(-1, 1) "};

    left: ${({ left }) => left && "20px"};
    right: ${({ left }) => !left && "20px"};
  }
`;

const Main = styled(Img)`
  grid-column: 1;
  grid-row: 1;
`;

export default function Single({ left, images, alt }) {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <Wrapper left={left} ref={ref}>
      <motion.div
        animate={inView ? "inSight" : "outOfSight"}
        whileHover={{ scale: 1.25, transition: { duration: 1.3 } }}
        variants={floatVariants}
      >
        <Main fluid={images.main} alt={`${alt}`} />
      </motion.div>
    </Wrapper>
  );
}

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
