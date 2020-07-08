// Components==============
import { motion } from "framer-motion";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled(motion.div)`
  width: 100%;
  z-index: 1;
  max-width: 500px;

  @media screen and (min-width: 1100px) {
    justify-self: end;
    max-width: initial;

    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`;

export default function Image({ image, title }) {
  return (
    <Wrapper whileHover="hover" initial="initial">
      <Img fluid={image} alt={title} />
    </Wrapper>
  );
}
