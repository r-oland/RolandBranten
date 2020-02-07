// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Blob = styled(motion.div)`
  position: absolute;
  height: 40vh;
  width: 80vw;
  top: 30vh;
  right: 10vw;
  background: ${({ theme: { primary } }) => primary.s4};

  @media screen and (min-width: 800px) {
    right: -25vw;
    top: -100vh;
    height: 200vh;
    width: 80vw;
  }
`;

export default function BlobAnimation() {
  return (
    <Blob
      animate={{
        borderRadius: [
          "37% 63% 16% 84% / 61% 77% 23% 39%",
          "42% 51% 26% 94% / 71% 67% 30% 47%",
          "27% 46% 21% 79% / 55% 63% 30% 42%",
          "34% 50% 26% 74% / 51% 57% 37% 44%",
          "47% 43% 36% 85% / 63% 62% 42% 54%",
          "34% 50% 26% 74% / 51% 57% 37% 44%",
          "27% 46% 21% 79% / 55% 63% 30% 42%",
          "37% 63% 16% 84% / 61% 77% 23% 39%"
        ]
      }}
      transition={{
        duration: 12,
        loop: Infinity,
        ease: "linear"
      }}
    />
  );
}
