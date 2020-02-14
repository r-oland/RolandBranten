// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Blob = styled(motion.div)`
  position: absolute;
  display: none;
  z-index: 2;
  background: ${({ theme: { black } }) => black.replace("1)", "0.025)")};

  right: -25vw;
  top: -100vh;
  height: 200vh;
  width: 80vw;

  @media screen and (min-width: 850px) {
    display: block;
  }
`;

export default function BlobAnimation({ blob, blobInView }) {
  return (
    <Blob
      ref={blob}
      variants={{
        animating: {
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
        },
        stop: {
          borderRadius: [
            "37% 63% 16% 84% / 61% 77% 23% 39%",
            "37% 63% 16% 84% / 61% 77% 23% 39%",
            "37% 63% 16% 84% / 61% 77% 23% 39%",
            "37% 63% 16% 84% / 61% 77% 23% 39%",
            "37% 63% 16% 84% / 61% 77% 23% 39%",
            "37% 63% 16% 84% / 61% 77% 23% 39%",
            "37% 63% 16% 84% / 61% 77% 23% 39%",
            "37% 63% 16% 84% / 61% 77% 23% 39%"
          ]
        }
      }}
      animate={blobInView ? "animating" : "stop"}
      transition={{
        duration: 6,
        loop: Infinity,
        ease: "linear"
      }}
    />
  );
}
